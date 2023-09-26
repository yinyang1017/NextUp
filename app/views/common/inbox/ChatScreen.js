import { StyleSheet, View } from 'react-native';
import React, { useCallback, useState } from 'react';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import ChatHeader from '../../../components/inbox/chat/ChatHeader';
import ChatChallengeAccepted from '../../../components/inbox/chat/ChatChallengeAccepted';
import { hp, wp } from '../../../utils/responsive';
import { GiftedChat } from 'react-native-gifted-chat';
import ChatInput from '../../../components/inbox/chat/ChatInput';

const ChatScreen = () => {
  const [messages, setMessages] = useState([
    {
      _id: 1,
      text: 'Hello developer',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'React Native',
        avatar: 'https://placeimg.com/140/140/any',
      },
    },
  ]);

  const onSend = newMessages => {
    setMessages(GiftedChat.append(messages, newMessages));
  };

  const renderInputToolbar = useCallback(props => <ChatInput {...props} />, []);

  const { bottom, top } = useSafeAreaInsets();

  const extraContainerStyle = {
    paddingBottom: bottom ? bottom + hp(0.8) : 0,
    paddingTop: top,
  };

  return (
    <View style={[styles.container, extraContainerStyle]}>
      <ChatHeader />
      <ChatChallengeAccepted containerStyle={styles.chatChallengeContainer} />
      <GiftedChat
        listViewProps={{
          showsVerticalScrollIndicator: false,
          horizontal: false,
        }}
        messagesContainerStyle={{ paddingBottom: hp(2) }}
        messages={messages}
        // renderBubble={renderBubble}
        showAvatarForEveryMessage={true}
        showUserAvatar={false}
        renderAvatar={() => null}
        renderInputToolbar={renderInputToolbar}
        onSend={_messages => onSend(_messages)}
        alwaysShowSend
        // user={chatUserInfo}
        // text={messageText}
        // onInputTextChanged={setMessageText}
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
