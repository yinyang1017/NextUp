import { StyleSheet, View } from 'react-native';
import React, { useCallback, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ChatHeader from '../../../components/inbox/chat/ChatHeader';
import ChatChallengeAccepted from '../../../components/inbox/chat/ChatChallengeAccepted';
import { hp, wp } from '../../../utils/responsive';
import { GiftedChat } from 'react-native-gifted-chat';
import ChatInput from '../../../components/inbox/chat/ChatInput';
import ChatMessage from '../../../components/inbox/chat/ChatMessage';
import ChatVideoMessage from '../../../components/inbox/chat/ChatVideoMessage';
import ChatImageMessage from '../../../components/inbox/chat/ChatImageMessage';

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

  const onSend = newMessages => {
    setMessages(GiftedChat.append(messages, newMessages));
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
  chatChallengeContainer: {
    paddingHorizontal: wp(5),
    marginVertical: hp(2),
  },
});
