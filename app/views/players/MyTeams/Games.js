import React from 'react';
import StatisticalOverview from '../../../components/games/StatisticalOverview/StatisticalOverview';
import { ScrollView, StyleSheet } from 'react-native';
import { customTheme } from '../../../constants';
import { hp } from '../../../utils/responsive';

export default function Games() {
  return (
    <ScrollView contentContainerStyle={styles.content}>
      {/* <CustomTable title="Team History" />
      <CustomTable title="2021-22 Pacific Standings" /> */}
      <StatisticalOverview />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: customTheme.spacings.spacing_16,
    marginTop: hp(4),
  },
});
