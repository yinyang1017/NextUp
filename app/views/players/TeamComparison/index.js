import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View } from 'react-native';
import Back from '../../../utils/HeaderButtons/Back';
import { hp, wp } from '../../../utils/responsive';
import SelectionHeader from './SelectionHeader';
import GameStats from './GameStats';
import LastGames from './LastGames';
import SearchModal from './SearchTeams';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import DuelChart from '../../../components/common/DuelGraph';

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
  function handleTeamChance(e) {
    setAwayTeam({
      name: e.name,
      location: e.state,
      logoUrl: e.imageUrl,
    });
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
        <View style={{ paddingHorizontal: wp(10) }}>
          <DuelChart
            graphSize={wp(80)}
            scaleCount={5}
            xthreshold={wp(5)}
            ythreshold={20}
            numberInterval={2}
            data={[
              {
                AST: 26.3,
                RPG: 48.6,
                STL: 5.4,
                BPG: 7.5,
                FG: 47.3,
                PTS: 115.8,
              },
              {
                AST: 30.2,
                RPG: 20.6,
                STL: 5.2,
                BPG: 10.2,
                FG: 40.3,
                PTS: 110.25,
              },
            ]}
            options={{
              graphShape: 1,
              showAxis: false,
              showIndicator: false,
              colorList: ['#27DC70', '#246BFD'],
              dotList: [false, false],
            }}
          />
        </View>
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
