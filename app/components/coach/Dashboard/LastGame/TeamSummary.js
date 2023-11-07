import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import SideBySideBarGraph from '../../../../components/common/SideBySideBar';
import { Layout, Colors, Fonts } from './../../../../constants';

const wide = Layout.width;
function TeamSummary() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Team Summary</Text>

      <View style={styles.arenaSection}>
        <FastImage
          source={require('../../../../assets/images/dummyTeamLogo.png')}
          style={styles.teamLogo}
        />
        <Text style={styles.arenaText}>Team Stats</Text>
        <FastImage
          source={require('../../../../assets/images/dummyTeamLogo1.png')}
          style={styles.teamLogo}
        />
      </View>

      <View style={styles.graphContainer}>
        <SideBySideBarGraph
          pgsData={[
            { name: 'PST', value: [12.7, 10.7] },
            { name: 'AST', value: [7.7, 8.7] },
            { name: 'RPG', value: [10.9, 11.9] },
            { name: 'BPG', value: [12.7, 10.7] },
            { name: 'STL', value: [7.7, 8.7] },
            { name: 'FG%', value: [10.9, 11.9] },
            { name: '2PT', value: [7.7, 8.7] },
            { name: '3PT', value: [10.9, 11.9] },
          ]}
        />
      </View>
    </View>
  );
}

export default TeamSummary;

const styles = StyleSheet.create({
  graphContainer: {
    marginTop: wide * 0.05,
    marginBottom: wide * 0.06,
  },
  container: {
    width: '92%',
    alignSelf: 'center',
  },
  header: {
    color: Colors.light,
    fontFamily: Fonts.Bold,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '700',
    marginLeft: wide * 0.015,
    marginTop: wide * 0.06,
  },
  arenaSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    marginTop: wide * 0.04,
    // backgroundColor: 'red'
  },
  arenaText: {
    color: Colors.light,
    fontFamily: Fonts.Regular,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    // marginLeft: wide * 0.015,
    // marginTop: wide * 0.06,
  },
  teamLogo: {
    width: wide * 0.1,
    height: wide * 0.1,
  },
});
