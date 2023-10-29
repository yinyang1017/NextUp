import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Colors, Layout } from '../../../constants';
import SideBySideBarGraph from '../../../components/common/SideBySideBar';
import { FontSize } from '../../GlobalStyles';
import { Fonts } from '../../../constants';
import StatDuel from './StatDuel';
const wide = Layout.width;
const high = Layout.height;

function LastGameCard({
  id,
  name,
  challengerTeamLogo,
  defenderTeamLogo,
  challengerTeamName,
  score,
  defenderTeamName,
}) {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        borderRadius: 10,
        width: '100%',
        height: wide * 0.4,
      }}
      activeOpacity={1}
      onPress={() => {
        // navigation.navigate('GameDetails', {gameId: id});
      }}
      // onPress={() => Navigation.navigate('GamesRecentTab', { 'gameId': item.id })}
    >
      <Image
        source={require('../../../assets/images/teamComparisioncard.png')}
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 10,
          position: 'absolute',
        }}
      />

      <Text
        style={{
          color: Colors.lastGameTitle,
          fontSize: 11,
          fontFamily: Fonts.Regular,
          fontWeight: '400',
          lineHeight: 12,
          marginTop: wide * 0.024,
          position: 'absolute',
          zIndex: 1,
        }}>
        {name}
      </Text>

      <View
        style={{
          marginTop: wide * 0.056,
          flexDirection: 'row',
          alignItems: 'center',
          width: '73%',
          justifyContent: 'space-between',
          // backgroundColor: "red",
          // alignSelf: "center"
        }}>
        <View
          style={{
            width: wide * 0.13,
            height: wide * 0.13,
            backgroundColor: Colors.light,
            borderRadius: (wide * 0.13) / 2,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 6,
            borderColor: '#565B68',
            marginLeft: wide * 0.001,
          }}>
          <FastImage
            style={{
              width: wide * 0.11,
              height: wide * 0.11,
              borderRadius: (wide * 0.11) / 2,
            }}
            resizeMode={'contain'}
            source={challengerTeamLogo}
          />
        </View>

        <View
          style={{
            width: wide * 0.13,
            height: wide * 0.13,
            backgroundColor: Colors.light,
            borderRadius: (wide * 0.13) / 2,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 6,
            borderColor: '#565B68',
            marginLeft: 2,
          }}>
          <FastImage
            style={{
              width: wide * 0.11,
              height: wide * 0.11,
              borderRadius: (wide * 0.11) / 2,
            }}
            resizeMode={'contain'}
            source={defenderTeamLogo}
          />
        </View>
      </View>

      <View
        style={{
          marginTop: wide * 0.02,
          flexDirection: 'row',
          alignItems: 'center',
          width: '80%',
          justifyContent: 'space-between',
          // backgroundColor: "red",
          alignSelf: 'center',
        }}>
        <Text
          style={{
            color: Colors.light,
            fontSize: 12,
            fontFamily: Fonts.Bold,
            fontWeight: '700',
            lineHeight: 15,
            width: '25%',
            textAlign: 'center',
            marginLeft: wide * 0.004,
          }}>
          {challengerTeamName}
        </Text>

        <Text
          style={{
            color: Colors.light,
            fontSize: 12,
            fontFamily: Fonts.Bold,
            fontWeight: '700',
            lineHeight: 15,
            width: '30%',
            textAlign: 'center',
          }}>
          {defenderTeamName}
        </Text>
      </View>
      <View
        style={{
          marginTop: wide * 0.25,
          alignItems: 'center',
          width: '88%',
          position: 'absolute',
          justifyContent: 'space-between',
          // backgroundColor: "red",
          alignSelf: 'center',
        }}>
        <Text
          style={{
            color: Colors.btnBg,
            fontSize: 18,
            fontFamily: Fonts.Bold,
            fontWeight: '700',
            lineHeight: 22,
            textAlign: 'center',
          }}>
          {score}
        </Text>
      </View>

      <View
        style={{
          marginTop: wide * 0.02,
          alignItems: 'center',
          width: '90%',
          justifyContent: 'space-between',
          // backgroundColor: "red",
          alignSelf: 'center',
          flexDirection: 'row',
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <FastImage
            style={{
              width: wide * 0.06,
              height: wide * 0.06,
              borderRadius: (wide * 0.06) / 2,
            }}
            resizeMode={'contain'}
            source={require('../../../assets/images/dummyPlayer.png')}
          />
          <View
            style={{
              marginLeft: wide * 0.015,
            }}>
            <Text
              style={{
                color: Colors.light,
                fontSize: 12,
                fontFamily: Fonts.Medium,
                fontWeight: '500',
                lineHeight: 15,
              }}>
              Arlene McCoy
            </Text>

            <Text
              style={{
                color: Colors.btnBg,
                fontSize: 12,
                fontFamily: Fonts.Bold,
                fontWeight: '700',
                lineHeight: 15,
              }}>
              45 points
            </Text>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <FastImage
            style={{
              width: wide * 0.06,
              height: wide * 0.06,
              borderRadius: (wide * 0.06) / 2,
            }}
            resizeMode={'contain'}
            source={require('../../../assets/images/male_onboard_Icon.png')}
          />
          <View
            style={{
              marginLeft: wide * 0.015,
            }}>
            <Text
              style={{
                color: Colors.light,
                fontSize: 12,
                fontFamily: Fonts.Medium,
                fontWeight: '500',
                lineHeight: 15,
              }}>
              Arlene McCoy
            </Text>

            <Text
              style={{
                color: Colors.btnBg,
                fontSize: 12,
                fontFamily: Fonts.Bold,
                fontWeight: '700',
                lineHeight: 15,
              }}>
              45 points
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default function LastGames() {
  const homeTeamLast = {
    id: 12312,
    defenderTeamLogo: require('../../../assets/images/dummyTeamLogo.png'),
    defenderTeamName: 'Chicago Bulls',
    challengerTeamLogo: require('../../../assets/images/dummyTeamLogo1.png'),
    challengerTeamName: 'Ros Angeles Lakers',
    score: '108-97',
    name: 'Chigaco Bulls win the game',
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textLabel}>Last Game</Text>
      <View style={styles.graphContainer}>
        <View style={{ marginBottom: wide * 0.03 }}>
          <LastGameCard {...homeTeamLast} />
        </View>
        <View style={{ marginBottom: wide * 0.03 }}>
          <LastGameCard {...homeTeamLast} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  graphContainer: {
    marginTop: wide * 0.05,
    marginBottom: wide * 0.06,
  },
  container: {
    marginTop: high * 0.05,
    paddingHorizontal: wide * 0.05,
  },
  textLabel: {
    color: Colors.white_08,
    fontSize: FontSize.size_xl,
    fontWeight: '500',
  },
});
