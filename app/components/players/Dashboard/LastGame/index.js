/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import SideBySideBarGraph from '../../../../components/common/SideBySideBar';
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
import FastImage from 'react-native-fast-image';
import {Layout, Colors, Fonts} from './../../../../constants';
import styles from './styles';
import PlayerSummary from './PlayerSummary';
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
          <View
            style={{
              width: '92%',
              alignSelf: 'center',
            }}>
            <Text
              style={{
                color: Colors.light,
                fontFamily: Fonts.Bold,
                fontSize: 16,
                lineHeight: 22,
                fontWeight: '700',
                marginLeft: wide * 0.015,
                marginTop: wide * 0.06,
              }}>
              Team Summary
            </Text>

            <View style={{marginTop: wide * 0.04}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '90%',
                  alignSelf: 'center',
                  // backgroundColor: 'red'
                }}>
                <FastImage
                  source={require('../../../../assets/images/dummyTeamLogo.png')}
                  // source={{
                  //   uri: coachDashTeamData?.lastGameInfo?.teamSummary
                  //     ?.gameStats[0].teamLogoUrl,
                  // }}
                  style={{
                    width: wide * 0.1,
                    height: wide * 0.1,
                  }}
                  // resizeMode={'contain'}
                />
                {/* :
            <></>
          } */}
                <Text
                  style={{
                    color: Colors.light,
                    fontFamily: Fonts.Regular,
                    fontSize: 14,
                    lineHeight: 20,
                    fontWeight: '400',
                    // marginLeft: wide * 0.015,
                    // marginTop: wide * 0.06,
                  }}>
                  Team Stats
                </Text>
                {/* {coachDashTeamData?.lastGameInfo?.teamSummary?.gameStats != null ? */}

                <FastImage
                  source={require('../../../../assets/images/dummyTeamLogo1.png')}
                  //   source={{
                  //     uri: coachDashTeamData?.lastGameInfo?.teamSummary
                  //       ?.gameStats[1].teamLogoUrl,
                  //   }}
                  style={{
                    width: wide * 0.1,
                    height: wide * 0.1,
                  }}
                />
                {/* :
            <></>
          } */}
              </View>
            </View>

            <View
              style={{
                marginTop: wide * 0.05,
                marginBottom: wide * 0.06,
              }}>
              <SideBySideBarGraph
                // pgsData={this.state.sideBySideBarchartData}
                pgsData={[
                  {name: 'PST', value: [12.7, 10.7]},
                  {name: 'AST', value: [7.7, 8.7]},
                  {name: 'RPG', value: [10.9, 11.9]},
                  {name: 'BPG', value: [12.7, 10.7]},
                  {name: 'STL', value: [7.7, 8.7]},
                  {name: 'FG%', value: [10.9, 11.9]},
                  {name: '2PT', value: [7.7, 8.7]},
                  {name: '3PT', value: [10.9, 11.9]},
                ]}
              />
            </View>
          </View>
        </View>
      </View>
    );
  } else {
    return <></>;
  }
}
export default LastGameSection;
