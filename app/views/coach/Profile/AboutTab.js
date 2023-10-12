import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View, Button} from 'react-native';
import {Colors, Layout, Fonts} from '../../../constants';
import {RecentGames} from './Games';
import {times} from 'lodash';
import {wp, hp} from '../../../utils/responsive';
import {AlternativeTable} from '../../../components/common/AlternativeTable';
// import {FontSize} from '../../GlobalStyles';
const wide = Layout.width;

const _data = [
  [2022, 'Milwaukee Bucks', 5, 5, 0, '1.000'],
  [2021, 'Milwaukee Bucks', 4, 3, 1, '0.750'],
  [2020, 'Milwaukee Bucks', 5, 3, 2, '0.600'],
  [2019, 'Milwaukee Bucks', 2, 2, 0, '1.000'],
  [2018, 'Milwaukee Bucks', 1, 0, 1, '0.000'],
  [2017, 'Milwaukee Bucks', 2, 1, 1, '0.500'],
  [2016, 'Milwaukee Bucks', 3, 1, 2, '0.333'],
  [2015, 'Milwaukee Bucks', 1, 1, 0, '1.000'],
  [2014, 'Milwaukee Bucks', 3, 2, 1, '0.667'],
];
export default function AboutTab() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.aboutContainer}>
        <View>
          <Text style={styles.aboutLabel}>About</Text>
        </View>
        <Text style={styles.aboutText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mi
          condimentum quis scelerisque eleifend cras tellus at. Dui aliquam
          quisque id porta vel sapien.
        </Text>
      </View>
      <View style={styles.recentGamesContainer}>
        <RecentGames />
      </View>

      <AlternativeTable
        title="Total Years"
        headerData={['Career', '5 Year', '26', '18', '8', '.667']}
        data={[]}
        headerWidthArray={['20%', '40%', ...times(3).fill('8%'), '16%']}
        titleStyle={styles.tableTitle}
        tableContainerStyle={styles.tableContainer}
      />
      <AlternativeTable
        title="Career Record"
        headerData={['Year', 'Team', 'G', 'W', 'L', 'PTS']}
        data={_data}
        headerWidthArray={['20%', '40%', ...times(3).fill('8%'), '16%']}
        titleStyle={styles.tableTitle}
        tableContainerStyle={styles.tableContainer}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 20,
  },
  container: {
    // height: 10000,
    width: '90%',
    marginTop: 20,
    alignSelf: 'center',
    flexDirection: 'col',
    justifyContent: 'space-between',
  },
  aboutContainer: {
    paddingHorizontal: 20,
  },
  aboutLabel: {
    color: Colors.light,
    fontWeight: '600',
    fontSize: wide * 0.0425,
    fontFamily: Fonts.SemiBold,
  },
  aboutText: {color: Colors.light, opacity: 0.4, fontSize: 13},
  recentGamesContainer: {paddingHorizontal: 20},
  tableTitle: {
    paddingHorizontal: wp(4),
    color: Colors.white_08,
    fontSize: 16,
    fontWeight: 'bold',
  },
  tableContainer: {paddingHorizontal: wp(1)},
});
