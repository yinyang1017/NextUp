/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';

import {
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  Image,
  key,
  KeyboardAvoidingView,
  FlatList,
  Platform,
  StyleSheet,
  Modal,
  ScrollView,
} from 'react-native';

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
      <View
        style={{
          marginTop: wide * 0.08,
          width: '100%',
        }}>
        <Text style={styles.title}>Last Game</Text>

        <View
          style={{
            width: '100%',
            backgroundColor: Colors.lightDark,
            marginTop: wide * 0.04,
          }}>
          <PlayerSummary />
          <TeamSummary />
        </View>
      </View>
    );
  } else {
    return <></>;
  }
}
export default LastGameSection;
