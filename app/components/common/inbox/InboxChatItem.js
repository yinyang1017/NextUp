import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { memo } from 'react';
import { hp, wp } from '../../../utils/responsive';
import { customTheme } from '../../../constants';
import { useNavigation } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import { appImages } from '../../../constants/appImages';
import { useAuth } from '../../../hooks/useAuth';
import moment from 'moment';

const InboxChatItem = ({ index, chatInfo }) => {
  const isAudio = index;
  const showUnread = false;

  const navigation = useNavigation();

  const onPressChatHandler = () => {
    navigation.navigate('ChatScreen', { channelId: chatInfo?.channelId });
  };
  const { user } = useAuth();
  const userId = user?.id || '1013';

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.container}
        onPress={onPressChatHandler}>
        <FastImage
          style={styles.profileImage}
          source={{ uri: chatInfo?.groupLogoUrl }}
          defaultSource={appImages.defaultAvatarImage}
        />
        <View style={styles.messagesContainer}>
          <Text style={styles.name} numberOfLines={1}>
            {chatInfo?.groupName}
          </Text>
          {isAudio ? (
            <Text style={[styles.message, { color: customTheme.colors.btnBg }]}>
              Audio
            </Text>
          ) : (
            <Text style={styles.message} numberOfLines={1}>
              {userId === chatInfo?.recentSenderId ? 'You: ' : ''}
              <Text
                style={[
                  styles.message,
                  { color: customTheme.colors.Gray98 + '50' },
                ]}>
                {chatInfo?.recentMessage || ''}
              </Text>
            </Text>
          )}
        </View>
        <View style={styles.timeBadgeContainer}>
          <Text style={styles.timeInfoText}>
            {moment(chatInfo?.createdAt).format('dddd')}
          </Text>
          {showUnread && (
            <View style={styles.unreadCountBadge}>
              <Text style={styles.unreadCount}>2</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
      <View style={styles.bottomDivider} />
    </>
  );
};

export default memo(InboxChatItem);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp(1.2),
    paddingHorizontal: wp(4),
  },
  profileImage: {
    height: wp(15),
    width: wp(15),
    borderRadius: wp(8),
    marginRight: wp(4),
  },
  messagesContainer: {
    flex: 1,
    paddingRight: wp(2),
  },
  name: {
    color: customTheme.colors.Gray98,
    lineHeight: 20,
    fontSize: customTheme.fontSizes.size_17,
    fontFamily: customTheme.fontFamily.robotoRegular,
    fontWeight: '600',
  },
  message: {
    fontSize: customTheme.fontSizes.size_15,
    color: customTheme.colors.Gray98,
    fontWeight: '600',
    lineHeight: 20,
    marginTop: hp(0.5),
    fontFamily: customTheme.fontFamily.robotoRegular,
  },
  timeBadgeContainer: {
    alignItems: 'center',
  },
  timeInfoText: {
    fontSize: customTheme.fontSizes.size_13,
    fontFamily: customTheme.fontFamily.robotoRegular,
    fontWeight: '500',
    color: customTheme.colors.Gray98 + '50',
    textAlign: 'center',
  },
  unreadCountBadge: {
    backgroundColor: customTheme.colors.btnBg,
    height: wp(6),
    width: wp(6),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(6),
    marginTop: hp(0.5),
  },
  unreadCount: {
    fontFamily: customTheme.fontFamily.robotoRegular,
    color: customTheme.colors.light,
  },
  bottomDivider: {
    height: 1,
    backgroundColor: customTheme.colors.Gray98 + '15',
    width: wp(92),
    alignSelf: 'center',
  },
});
