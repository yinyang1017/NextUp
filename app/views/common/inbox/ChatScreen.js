import { StyleSheet, View } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
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
import {
  useGetChatMessagesByChannelId,
  useSendChatMessage,
} from '../../../api/chat.api';

const loginUserInfo = {
  _id: 1,
  name: 'React Native',
  avatar: 'https://placeimg.com/140/140/any',
};

const initialData = [
  {
    _id: 12,
    text: 'Can you write the time and place of the meeting?',
    createdAt: new Date(),
    image:
      'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZG9jdG9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    user: {
      _id: 1,
      name: 'React Native',
    },
  },
  {
    _id: 11,
    text: 'Can you write the time and place of the meeting?',
    createdAt: new Date(),
    video:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    user: {
      _id: 2,
      name: 'React Native',
    },
  },
  {
    _id: 2,
    text: 'Can you write the time and place of the meeting?',
    createdAt: new Date(),
    user: {
      _id: 1,
      name: 'React Native',
    },
  },
  {
    _id: 4,
    text: 'We can meet? I am free',
    createdAt: new Date(),
    user: {
      _id: 1,
      name: 'React Native',
    },
  },
  {
    _id: 3,
    text: 'Hi!',
    createdAt: new Date(),
    user: {
      _id: 2,
      name: 'React Native',
    },
  },
  {
    _id: 5,
    text: 'Hi!',
    createdAt: new Date(),
    user: {
      _id: 1,
      name: 'React Native',
    },
  },
];

const ChatScreen = () => {
  const [messages, setMessages] = useState(initialData);
  const screenParams = useRoute().params;

  const { mutate: sendChatMessageMutation } = useSendChatMessage();

  const { mutate: getChatMessagesByChannelId } =
    useGetChatMessagesByChannelId();

  const isFocus = useIsFocused();

  const onSend = newMessages => {
    setMessages(GiftedChat.append(messages, newMessages));

    const newChatMessageInfo = {
      senderId: 1013,
      messageType: 'TEXT',
      content: newMessages[0]?.text,
      channelId: screenParams?.channelId,
      status: 'SENT',
      senderName: 'OCHAI AGBAJI',
      senderProfilePictureUrl:
        'https://cdn.nba.com/headshots/nba/latest/1040x760/1630534.png',
    };

    sendChatMessageMutation(newChatMessageInfo, {
      onSuccess: res => {
        console.log('🚀 ~ file: ChatScreen.js:112 ~ onSend ~ res:', res);
      },
      onError: err => {
        console.log('🚀 ~ file: ChatScreen.js:115 ~ onSend ~ err:', err);
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

  const onGetChatMessagesHandler = res => {
    console.log(
      '🚀 ~ file: ChatScreen.js:114 ~ onGetChatMessagesHandler ~ res:',
      res,
    );
  };

  useEffect(() => {
    if (isFocus) {
      getChatMessagesByChannelId(
        { channelId: screenParams?.channelId },
        { onSuccess: onGetChatMessagesHandler },
        {},
      );
    }
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
