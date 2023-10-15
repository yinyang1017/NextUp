import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import StatsBoxItem from '../common/StatsBoxItem';
import { Dash } from 'react-native-ui-lib';
import { hp, wp } from '../../utils/responsive';
import { customTheme } from '../../constants';
import { appImages } from '../../constants/appImages';

const CoachViewPlayerDetailsStatsTab = () => {
  return (
    <View>
      <View style={styles.statsContainer}>
        <View style={styles.statsVerticalContainer}>
          <StatsBoxItem
            title={'27'}
            subtitle={'MPG'}
            style={styles.statItem}
            titleStyle={styles.statItemTitle}
            subtitleStyle={styles.statItemSubTitle}
          />
          <StatsBoxItem
            title={'13'}
            subtitle={'RBG'}
            style={styles.statItem}
            titleStyle={styles.statItemTitle}
            subtitleStyle={styles.statItemSubTitle}
          />
        </View>
        <Dash
          vertical
          length={hp(10)}
          color={customTheme.colors.light + '30'}
          thickness={1}
        />
        <View style={styles.statsVerticalContainer}>
          <StatsBoxItem
            title={'21'}
            subtitle={'PPG'}
            style={styles.statItem}
            titleStyle={styles.statItemTitle}
            subtitleStyle={styles.statItemSubTitle}
          />
          <StatsBoxItem
            title={'3.7'}
            subtitle={'APG'}
            style={styles.statItem}
            titleStyle={styles.statItemTitle}
            subtitleStyle={styles.statItemSubTitle}
          />
        </View>
        <Dash
          vertical
          length={hp(10)}
          color={customTheme.colors.light + '30'}
          thickness={1}
        />
        <View style={styles.statsVerticalContainer}>
          <StatsBoxItem
            title={'52'}
            subtitle={'FG%'}
            style={styles.statItem}
            titleStyle={styles.statItemTitle}
            subtitleStyle={styles.statItemSubTitle}
          />
          <StatsBoxItem
            title={'0.7'}
            subtitle={'SPG'}
            style={styles.statItem}
            titleStyle={styles.statItemTitle}
            subtitleStyle={styles.statItemSubTitle}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.viewMore} activeOpacity={0.7}>
        <Text regular-400 style={styles.viewMoreText}>
          View More
        </Text>
        <Image source={appImages.dropdown} style={styles.dropdown} />
      </TouchableOpacity>
    </View>
  );
};

export default CoachViewPlayerDetailsStatsTab;

const styles = StyleSheet.create({
  statsContainer: {
    height: hp(22),
    marginTop: hp(1),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(10),
  },
  statsVerticalContainer: { justifyContent: 'space-between', height: '100%' },
  statItemTitle: {
    fontSize: customTheme.fontSizes.size_40,
    fontWeight: '700',
    fontFamily: customTheme.fontFamily.robotoBold,
  },
  statItemSubTitle: {
    color: customTheme.colors.light + '90',
    fontFamily: customTheme.fontFamily.robotoRegular,
  },
  statItem: { paddingVertical: 0 },
  viewMore: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: wp(1),
    alignSelf: 'center',
    marginTop: hp(3),
  },
  viewMoreText: {
    textDecorationLine: 'underline',
    color: customTheme.colors.light + '80',
  },
  dropdown: {
    height: wp(4),
    width: wp(4),
    tintColor: customTheme.colors.light + '80',
  },
});
