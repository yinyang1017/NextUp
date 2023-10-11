import React from 'react';
import StatisticalOverview from '../../../components/games/StatisticalOverview/StatisticalOverview';
import { ScrollView, StyleSheet } from 'react-native';
import { customTheme } from '../../../constants';
import { hp } from '../../../utils/responsive';
import LastGame from '../../../components/games/LastGame/LastGame';
import Standings from '../../../components/games/Standings/Standings';

export default function Games() {
  return (
    <ScrollView contentContainerStyle={styles.content}>
      <StatisticalOverview />
      <LastGame />
      <Standings />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: customTheme.spacings.spacing_16,
    marginTop: hp(4),
    paddingBottom: hp(6),
  },
});
