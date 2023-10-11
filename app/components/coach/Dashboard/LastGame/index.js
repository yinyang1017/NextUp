import * as React from 'react';

import {View, Text} from 'react-native';

import {Layout, Colors} from './../../../../constants';
import styles from './styles';
import PlayerSummary from './PlayerSummary';
import TeamSummary from './TeamSummary';
let wide = Layout.width;

function LastGameSection() {
  const coachDashTeamData = {
    lastGameInfo: {
      recentGamesInfo: {
        defenderName: ['Kalumet', 'Copper Kings'],
        teamSummary: true,
        columns: ['1', '2', '3', '4', 'T'],
        challengerName: ['Divine Child', 'Falcons'],
        challengerQuarterInfo: [1, 2, 3, 4, 5],
      },
    },
  };
  if (
    coachDashTeamData &&
    coachDashTeamData.lastGameInfo &&
    coachDashTeamData.lastGameInfo.recentGamesInfo !== undefined
  ) {
    return (
      <View>
        <Text style={styles.title}>Last Game</Text>
        <View
          style={{
            width: '100%',
            backgroundColor: Colors.lightDark,
            marginTop: wide * 0.04,
          }}>
          <PlayerSummary />
          <View
            style={{
              width: '90%',
              backgroundColor: Colors.light,
              opacity: 0.2,
              height: 1.5,
              marginTop: wide * 0.07,
              alignSelf: 'center',
            }}
          />
          <TeamSummary />
        </View>
      </View>
    );
  } else {
    return <></>;
  }
}
export default LastGameSection;
