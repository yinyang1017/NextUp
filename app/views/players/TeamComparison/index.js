import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Back from '../../../utils/HeaderButtons/Back';
import { hp, wp } from '../../../utils/responsive';
import SelectionHeader from './SelectionHeader';
import GameStats from './GameStats';
import LastGames from './LastGames';
import SearchModal from './SearchTeams';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

const _seasonList = [
  '2020-21',
  '2020-22',
  '2020-21',
  '2020-22',
  '2020-21',
  '2020-22',
  '2020-21',
  '2020-22',
  '2020-21',
  '2020-22',
];
const _homeTeamData = {
  name: 'Bulls',
  location: 'Chicago',
  logoUrl: require('../../../assets/images/dummyTeamLogo.png'),
};
const _awayTeamData = {
  name: 'Lakers',
  location: 'Ros Angeles',
  logoUrl: require('../../../assets/images/dummyTeamLogo1.png'),
};

export default function TeamComparison() {
  const [season, setSeason] = useState(_seasonList[0]);
  const [awayTeam, setAwayTeam] = useState(null);
  function handleTeamChance(e){
    setAwayTeam({
      name: e.name,
      location: e.state,
      logoUrl: e.imageUrl
    })
  }
  return (
    <SafeAreaView style={styles.container}>
      <Back
        containerStyle={styles.backButtonContainer}
        title="Team Comparison"
      />
      <SelectionHeader
        allSeason={_seasonList}
        season={season}
        selectTeam={handleTeamChance}
        selectSeason={e => setSeason(e)}
        homeTeamData={_homeTeamData}
        awayTeamData={awayTeam}
      />
      <ScrollView horizontal={false}>
        <GameStats />
        <LastGames />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1 },
  backButtonContainer: {
    marginHorizontal: wp(5),
    marginBottom: hp(3),
  },
});
