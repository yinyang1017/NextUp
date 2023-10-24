import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Text } from 'react-native-ui-lib';
import { customTheme } from '../../constants';
import { hp, wp } from '../../utils/responsive';
import times from 'lodash/times';
import MultiImagesRow from './MultiImagesRow';
import { appImages } from '../../constants/appImages';
import { useNavigation } from '@react-navigation/native';

const LineupItem = ({
  title,
  containerStyle = {},
  isVerified = false,
  isAILineup = false,
  titleStyle = {},
  viewTextStyle = {},
}) => {
  const navigation = useNavigation();

  const onPressViewLineupDetailsHandler = () => {
    navigation.navigate('LineupDetails');
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.leftBodyItem}>
        <Text medium-xl-600 style={titleStyle}>
          {title}
        </Text>
        <MultiImagesRow
          images={times(5)}
          borderColor={containerStyle?.backgroundColor}
        />
      </View>
      <View style={styles.rightBodyItem(isVerified, isAILineup)}>
        {(isVerified || isAILineup) && (
          <Image
            style={styles.icon(isAILineup)}
            source={isAILineup ? appImages.crown : appImages.yellowCheckBadge}
          />
        )}
        <TouchableOpacity onPress={onPressViewLineupDetailsHandler}>
          <Text
            medium-700
            color={customTheme.colors.btnBg}
            style={viewTextStyle}>
            View
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LineupItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: customTheme.colors.playerCategoryBg,
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(4),
    borderRadius: wp(3),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftBodyItem: { gap: hp(1) },
  rightBodyItem: (isVerified, isAILineup) => ({
    gap: hp(1),
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: isVerified || isAILineup ? 'center' : 'flex-end',
    ...(!(isVerified || isAILineup) && { marginBottom: hp(1) }),
  }),
  icon: isAILineup => ({
    height: wp(7),
    width: wp(7),
    tintColor: isAILineup ? customTheme.colors.darkYellow2 : undefined,
  }),
});
