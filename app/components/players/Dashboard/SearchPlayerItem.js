import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Checkbox } from 'react-native-ui-lib';
import { MyColors } from '../../../constants/colors';
import { hp, wp } from '../../../utils/responsive';
import { FontFamily, FontSize } from '../../../views/GlobalStyles';

const PointsInfoItem = ({ title, value }) => {
  return (
    <View style={styles.pointInfoItemContainer}>
      <Text style={styles.pointInfoItemTitle}>{title}</Text>
      <Text style={styles.pointInfoItemValue}>{value}</Text>
    </View>
  );
};

const SearchPlayerItem = () => {
  return (
    <View style={styles.container}>
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
        color={true ? MyColors.btnBg : MyColors.lightGray1}
        value
        size={wp(5.5)}
        borderRadius={wp(1)}
      />
    </View>
  );
};

export default SearchPlayerItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: MyColors.lightDark,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: wp(2),
    paddingHorizontal: wp(3),
    paddingVertical: hp(1.5),
  },
  image: { height: wp(12.5), width: wp(12.5), marginRight: wp(3) },
  body: { flex: 1 },
  name: {
    fontFamily: FontFamily.robotoRegular,
    fontWeight: '600',
    fontSize: FontSize.bodyLargeBold_size,
    color: MyColors.light,
  },
  pointsInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(11),
    marginTop: hp(0.5),
  },
  pointInfoItemContainer: {
    alignItems: 'center',
  },
  pointInfoItemTitle: {
    fontSize: FontSize.size_2xs,
    color: MyColors.light + '60',
    fontFamily: FontFamily.robotoRegular,
  },
  pointInfoItemValue: {
    color: MyColors.light,
    fontWeight: '500',
    fontFamily: FontFamily.robotoRegular,
  },
  checkbox: {
    marginRight: wp(3),
  },
});
