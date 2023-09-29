import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FontFamily, FontSize } from '../../../views/GlobalStyles';
import moment from 'moment/moment';
import { hp, wp } from '../../../utils/responsive';
import commonChatStyles from './commonChatStyles';
import { MyColors } from '../../../constants/colors';

const ChatMessage = props => {
  const userId = 1;

  const isSameUserMessage = props.currentMessage?.user?._id === userId;

  const isNextMessageFromSameUser =
    props.currentMessage?.user?._id === props.nextMessage?.user?._id;

  return (
    <View style={commonChatStyles.container(isSameUserMessage)}>
      <Text style={commonChatStyles.dateTimeText}>
        {moment(props.currentMessage?.createdAt).format('hh:mm a')}
      </Text>
      <View
        style={styles.messageContainer(
          isSameUserMessage,
          isNextMessageFromSameUser,
        )}>
        <Text style={styles.messageText}>{props.currentMessage?.text}</Text>
      </View>
    </View>
  );
};

export default ChatMessage;

const styles = StyleSheet.create({
  messageContainer: (isSameCurrentUser, isNextMessageSame) => ({
    ...commonChatStyles.messageBorderRadius(
      isSameCurrentUser,
      isNextMessageSame,
    ),
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(4),
    maxWidth: wp(65),
    marginLeft: isSameCurrentUser ? wp(1.5) : 0,
    marginRight: isSameCurrentUser ? 0 : wp(1.5),
    backgroundColor: isSameCurrentUser ? MyColors.lightDark : MyColors.btnBg,
  }),
  messageText: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.robotoRegular,
    fontWeight: '500',
    color: '#FAFAFA',
  },
});
