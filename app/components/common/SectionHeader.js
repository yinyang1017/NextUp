import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { hp } from '../../utils/responsive';
import { customTheme } from '../../constants';

export const SectionHeader = ({
  title,
  onPressSeeAll = () => { },
  containerStyle = {},
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity
        activeOpacity={0.6}
        style={[styles.seeAllParent, styles.parentFlexBox]}
        onPress={onPressSeeAll}>
        <Text style={[styles.seeAll, styles.textTypo1]}>See All</Text>
        <Image
          style={[styles.chevronDownIcon, styles.chevronIconLayout]}
          resizeMode="cover"
          source={require('.../../../assets/chevrondown4.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: hp(2.5),
  },
  title: {
    fontSize: customTheme.fontSizes.size_22,
    color: customTheme.colors.light,
    lineHeight: 22,
    textAlign: 'left',
    fontFamily: customTheme.fontFamily.robotoBold,
    fontWeight: '600',
  },
  seeAll: {
    color: customTheme.colors.royalblue,
    textAlign: 'left',
    fontSize: customTheme.fontSizes.size_14,
  },
  chevronDownIcon: {
    marginLeft: 2,
  },
  seeAllParent: {
    width: 60,
    height: 16,
  },
  parentFlexBox: {
    height: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textTypo1: {
    fontFamily: customTheme.fontFamily.robotoMedium,
    fontWeight: '500',
  },
  chevronIconLayout: {
    height: 14,
    width: 14,
    overflow: 'hidden',
  },
});
