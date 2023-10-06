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
import { uniqueId } from 'lodash';
import { useAuth } from '../../../hooks/useAuth';
import { getUniqueId } from '../../../utils/helper';
import moment from 'moment';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const screenParams = useRoute().params;

  const { mutate: sendChatMessageMutation } = useSendChatMessage();

  const isFocus = useIsFocused();

  const { user } = useAuth();

  const loginUserInfo = {
    _id: user?.id || 1013,
    name: 'React Native',
    avatar: 'https://placeimg.com/140/140/any',
  };

  const onSend = newMessages => {
    const newChatMessageInfo = {
      senderId: user?.id || 1013,
      messageType: 'TEXT',
      content: newMessages[0]?.text,
      channelId: screenParams?.channelId,
      status: 'SENT',
      senderName: 'OCHAI AGBAJI',
      senderProfilePictureUrl:
        'https://cdn.nba.com/headshots/nba/latest/1040x760/1630534.png',
      id: getUniqueId(screenParams?.channelId?.toString()),
      createdAt: moment().toISOString(),
    };

    sendChatMessageMutation(newChatMessageInfo, {
      onSuccess: res => {
        console.log('~ res:', res);
      },
      onError: err => {
        console.log('~ err:', err);
      },
    });
  };

  const renderInputToolbar = useCallback(props => <ChatInput {...props} />, []);

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
    if (newMessage.content) {
      const newMessageInfo = {
        _id: newMessage?.id || uniqueId('chat-'),
        text: newMessage?.content,
        createdAt: newMessage?.createdAt || new Date(),
        user: { _id: newMessage.senderId || null },
      };
      setMessages(prevMessages => [newMessageInfo, ...prevMessages]);
    }
  };

  const chatEventSource = useMemo(
    () =>
      new EventSource(baseUrl + '/message/stream/' + screenParams?.channelId, {
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
      <ChatHeader />
      <ChatChallengeAccepted containerStyle={styles.chatChallengeContainer} />
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
