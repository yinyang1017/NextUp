import { StyleSheet } from 'react-native';
import { FontSize } from '../../../views/GlobalStyles';
import { wp } from '../../../utils/responsive';

const commonChatStyles = StyleSheet.create({
  container: isSameCurrentUser => ({
    flexDirection: isSameCurrentUser ? 'row' : 'row-reverse',
    alignItems: 'flex-end',
  }),
  dateTimeText: {
    fontSize: FontSize.size_sm_3,
    fontWeight: '500',
    color: '#FAFAFA30',
  },
  messageBorderRadius: (isSameCurrentUser, isNextMessageSame) => ({
    borderTopLeftRadius: isSameCurrentUser ? wp(5) : wp(2),
    borderTopRightRadius: isSameCurrentUser ? wp(2) : wp(5),
    borderBottomLeftRadius:
      !isSameCurrentUser && isNextMessageSame ? wp(2) : wp(5),
    borderBottomRightRadius:
      isSameCurrentUser && isNextMessageSame ? wp(2) : wp(5),
  }),
});

export default commonChatStyles;
