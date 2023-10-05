import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View, Button} from 'react-native';
import {Colors, Layout, Fonts} from '../../../constants';
import {RecentGames} from './Games';
import {times} from 'lodash';
import {wp, hp} from '../../../utils/responsive';
import {AlternativeTable} from '../../../components/common/AlternativeTable';
// import {FontSize} from '../../GlobalStyles';
const wide = Layout.width;
export default function AboutTab() {
  const [data, setData] = useState([1, 2, 3]);

  const addData = () => {
    setData([...data, data.length + 1]);
  };

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
        title="Player stats"
        headerData={['Starters', 'Min', 'FG', '3PT', 'AST', 'PF', 'PTS']}
        data={times(9).fill(['D. Green', '42', '5-10', '2-5', '8', '1', '12'])}
        headerWidthArray={['28%', ...times(6).fill('12%')]}
        titleStyle={styles.tableTitle}
        tableContainerStyle={styles.tableContainer}
      />
      <AlternativeTable
        title="Player stats"
        headerData={['Starters', 'Min', 'FG', '3PT', 'AST', 'PF', 'PTS']}
        data={times(9).fill(['D. Green', '42', '5-10', '2-5', '8', '1', '12'])}
        headerWidthArray={['28%', ...times(6).fill('12%')]}
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
