import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Checkbox } from 'react-native-ui-lib';
import { hp, wp } from '../../../utils/responsive';
import { customTheme } from '../../../constants';

const PointsInfoItem = ({ title, value }) => {
  return (
    <View style={styles.pointInfoItemContainer}>
      <Text style={styles.pointInfoItemTitle}>{title}</Text>
      <Text style={styles.pointInfoItemValue}>{value}</Text>
    </View>
  );
};

const SearchPlayerItem = ({
  onPress,
  isSelected = false,
  onCheckBoxPress = () => {},
}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image
        source={require('../../../assets/avatar2.png')}
        style={styles.image}
      />
      <View style={styles.body}>
        <Text style={styles.name}>Arlene McCoy</Text>
        <View style={styles.pointsInfoContainer}>
          <PointsInfoItem title={'PPG'} value={'21.5'} />
          <PointsInfoItem title={'RPG'} value={'10.9'} />
          <PointsInfoItem title={'APG'} value={'1.9'} />
        </View>
      </View>
      <Checkbox
        style={styles.checkbox}
        color={
          isSelected ? customTheme.colors.btnBg : customTheme.colors.lightGray1
        }
        value={isSelected}
        onValueChange={onCheckBoxPress}
        size={wp(5.5)}
        borderRadius={wp(1)}
        hitSlop={wp(2)}
      />
    </Pressable>
  );
};

export default SearchPlayerItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: customTheme.colors.lightDark,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: wp(2),
    paddingHorizontal: wp(3),
    paddingVertical: hp(1.5),
  },
  image: { height: wp(12.5), width: wp(12.5), marginRight: wp(3) },
  body: { flex: 1 },
  name: {
    fontFamily: customTheme.fontFamily.robotoRegular,
    fontWeight: '600',
    fontSize: customTheme.fontSizes.size_16,
    color: customTheme.colors.light,
  },
  pointsInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(11),
    marginTop: hp(0.5),
  },
  pointInfoItemContainer: { alignItems: 'center' },
  pointInfoItemTitle: {
    fontSize: customTheme.fontSizes.size_11,
    color: customTheme.colors.light + '60',
    fontFamily: customTheme.fontFamily.robotoRegular,
  },
  pointInfoItemValue: {
    color: customTheme.colors.light,
    fontWeight: '500',
    fontFamily: customTheme.fontFamily.robotoRegular,
  },
  checkbox: { marginRight: wp(3) },
});
