import { StyleSheet, View } from 'react-native';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ChatHeader from '../../../components/common/inbox/chat/ChatHeader';
import ChatChallengeAccepted from '../../../components/common/inbox/chat/ChatChallengeAccepted';
import { hp, wp } from '../../../utils/responsive';
import { GiftedChat } from 'react-native-gifted-chat';
import ChatInput from '../../../components/common/inbox/chat/ChatInput';
import ChatMessage from '../../../components/common/inbox/chat/ChatMessage';
import ChatVideoMessage from '../../../components/common/inbox/chat/ChatVideoMessage';
import ChatImageMessage from '../../../components/common/inbox/chat/ChatImageMessage';
import { useIsFocused, useRoute } from '@react-navigation/native';
import { useSendChatMessage } from '../../../api/chat.api';
import EventSource from 'react-native-sse';
import { baseUrl } from '../../../utils/api-client';
import { useAuth } from '../../../hooks/useAuth';
import moment from 'moment';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { BASE_URL } from '../../../hooks/useUpload';
import { errorToast } from '../../../utils/toast';
import { compact } from 'lodash';
import AppLoader from '../../../utils/Apploader';
import { CHAT_ENUMS } from '../../../utils/chatEnums';
import { isJsonString } from '../../../utils/helper';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const screenParams = useRoute().params;

  const [isSendingImageMessage, setIsSendingImageMessage] = useState(false);

  const chatInfo = useMemo(() => screenParams?.chatInfo || {}, [screenParams]);

  const isGroup = chatInfo?.type === 'GROUP';

  const chatName = isGroup ? chatInfo?.groupName : chatInfo?.otherUserName;

  const chatProfileImage = isGroup
    ? chatInfo?.groupLogoUrl
    : chatInfo?.userProfilePicUrl;

  const { mutate: sendChatMessageMutation } = useSendChatMessage();

  const isFocus = useIsFocused();

  const { user } = useAuth();

  const loginUserInfo = {
    _id: user?.id,
    name: chatName,
    avatar: chatProfileImage,
  };

  const commonSendMessageParam = useMemo(
    () => ({
      senderId: user?.id,
      channelId: chatInfo?.channelId,
      status: 'SENT',
      senderName: 'OCHAI AGBAJI',
      senderProfilePictureUrl:
        'https://cdn.nba.com/headshots/nba/latest/1040x760/1630534.png',
    }),
    [chatInfo, user],
  );

  const onSend = newMessages => {
    const newChatMessageInfo = {
      ...commonSendMessageParam,
      messageType: CHAT_ENUMS.MESSSAGE_TYPE.TEXT,
      content: newMessages[0]?.text,
      id: uuidv4(),
      createdAt: moment().toISOString(),
    };

    sendChatMessageMutation(newChatMessageInfo);
  };

  const uploadImageAxiosHandler = file => {
    const formData = new FormData();
    formData.append('file', {
      uri: file.uri,
      name: file.fileName,
      type: file.type,
    });

    return axios({
      method: 'POST',
      url: BASE_URL + '/storage/upload/image',
      maxBodyLength: Infinity,
      headers: {
        'Content-Type': 'multipart/form-data',
        Accept: '*',
      },
      data: formData,
    });
  };

  const uploadChatImagesHandler = useCallback(
    async response => {
      try {
        if (response?.assets?.length) {
          const promiseArray = [];
          setIsSendingImageMessage(true);
          response?.assets?.map(imageFile => {
            promiseArray.push(uploadImageAxiosHandler(imageFile));
          });
          const imagesUploadResponses = await Promise.all(promiseArray);
          const imageUrlsArray = compact(
            imagesUploadResponses?.map(
              imageResponse => imageResponse?.data?.data?.imageUrl,
            ),
          );
          const messageInfo = {
            ...commonSendMessageParam,
            messageType: CHAT_ENUMS.MESSSAGE_TYPE.IMAGE,
            content: JSON.stringify(imageUrlsArray),
            id: uuidv4(),
            createdAt: moment().toISOString(),
          };
          sendChatMessageMutation(messageInfo);
          setIsSendingImageMessage(false);
        }
      } catch (error) {
        setIsSendingImageMessage(false);
        errorToast({
          title: 'Error',
          body: 'Filed to send images! Please try again',
        });
      }
    },
    [commonSendMessageParam, sendChatMessageMutation],
  );

  const renderInputToolbar = useCallback(
    props => <ChatInput {...props} onSelectImage={uploadChatImagesHandler} />,
    [uploadChatImagesHandler],
  );

  const { bottom, top } = useSafeAreaInsets();

  const extraContainerStyle = {
    paddingBottom: bottom ? bottom + hp(0.8) : 0,
    paddingTop: top,
  };

  const renderBubble = useCallback(props => {
    if (props.currentMessage?.video) {
      return <ChatVideoMessage {...props} />;
    }
    if (props.currentMessage?.image) {
      return <ChatImageMessage {...props} />;
    }
    return <ChatMessage {...props} />;
  }, []);

  const onNewMessageReceivedHandler = newMessage => {
    if (
      newMessage.content &&
      newMessage?.messageType !== CHAT_ENUMS.MESSSAGE_TYPE.BANNER
    ) {
      const newMessageInfo = {
        _id: newMessage?.id || uuidv4(),
        text: newMessage?.content,
        createdAt: newMessage?.createdAt || new Date(),
        user: { _id: newMessage.senderId || null },
        ...(newMessage?.messageType === CHAT_ENUMS.MESSSAGE_TYPE.IMAGE && {
          image: isJsonString(newMessage?.content)
            ? JSON.parse(newMessage?.content)
            : [],
        }),
      };
      setMessages(prevMessages => [newMessageInfo, ...prevMessages]);
    }
  };

  const chatEventSource = useMemo(
    () =>
      new EventSource(baseUrl + '/message/stream/' + chatInfo?.channelId, {
        pollingInterval: 3600000,
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  useEffect(() => {
    if (isFocus) {
      chatEventSource.addEventListener('open', event => {
        console.log('Open SSE connection.');
      });
      chatEventSource.addEventListener('message', event => {
        console.log('New message event:', JSON.parse(event.data));
        onNewMessageReceivedHandler(JSON.parse(event.data || {}));
      });
      chatEventSource.addEventListener('error', event => {
        if (event.type === 'error') {
          console.error('Connection error:', event.message);
        } else if (event.type === 'exception') {
          console.error('Error:', event.message, event.error);
        }
      });
      chatEventSource.addEventListener('close', event => {
        console.log('Close SSE connection.', event);
      });
    }
    return () => {
      chatEventSource.close();
      chatEventSource.removeAllEventListeners();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocus]);

  return (
    <View style={[styles.container, extraContainerStyle]}>
      {isSendingImageMessage && <AppLoader />}
      <ChatHeader name={chatName} image={chatProfileImage} />
      {chatInfo?.recentMessageType === CHAT_ENUMS.MESSSAGE_TYPE.BANNER && (
        <ChatChallengeAccepted
          bannerText={chatInfo?.recentMessage}
          containerStyle={styles.chatChallengeContainer}
          dateString={moment(chatInfo?.createdAt).format('LL')}
        />
      )}
      <GiftedChat
        listViewProps={{
          showsVerticalScrollIndicator: false,
          horizontal: false,
          contentContainerStyle: { marginRight: wp(3) },
        }}
        messagesContainerStyle={{ paddingBottom: hp(2) }}
        messages={messages}
        renderBubble={renderBubble}
        showAvatarForEveryMessage={true}
        showUserAvatar={false}
        renderAvatar={() => null}
        renderInputToolbar={renderInputToolbar}
        onSend={_messages => onSend(_messages)}
        alwaysShowSend
        user={loginUserInfo}
        maxComposerHeight={hp(4)}
        bottomOffset={bottom}
        placeholder="Type a message"
      />
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  chatChallengeContainer: { paddingHorizontal: wp(5), marginVertical: hp(2) },
});
