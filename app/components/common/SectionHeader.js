import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { Color, FontFamily, FontSize } from '../../views/GlobalStyles';

export const SectionHeader = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={[styles.seeAllParent, styles.parentFlexBox]}>
        <Text style={[styles.seeAll, styles.textTypo1]}>See All</Text>
        <Image
          style={[styles.chevronDownIcon, styles.chevronIconLayout]}
          resizeMode="cover"
          source={require('.../../../assets/chevrondown4.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  title: {
    fontSize: FontSize.size_3xl,
    color: Color.othersWhite,
    lineHeight: 22,
    textAlign: 'left',
    fontFamily: FontFamily.robotoBold,
    fontWeight: '600',
  },
  seeAll: {
    color: Color.royalblue,
    textAlign: 'left',
    fontSize: FontSize.bodyMediumSemibold_size,
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
    fontFamily: FontFamily.robotoMedium,
    fontWeight: '500',
  },
  chevronIconLayout: {
    height: 14,
    width: 14,
    overflow: 'hidden',
  },
});
