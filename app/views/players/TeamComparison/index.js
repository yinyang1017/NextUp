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
  profileImg: require('../../../assets/images/dummyTeamLogo.png'),
};
const _awayTeamData = {
  name: 'Lakers',
  location: 'Ros Angeles',
  profileImg: require('../../../assets/images/dummyTeamLogo1.png'),
};

export default function TeamComparison() {
  const Stack = createNativeStackNavigator();
  const options = { headerShown: false };
  return (
    <Stack.Navigator screenOptions={options} initialRouteName="CompareTeam">
      <Stack.Screen name="CompareTeam" component={TeamComparisonScreen} />
      <Stack.Screen name="SearchTeam" component={SearchModal} />
    </Stack.Navigator>
  );
}

export function TeamComparisonScreen() {
  const [season, setSeason] = useState(_seasonList[0]);
  const navigation = useNavigation();
  const [isSearchOpen, openSearch] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Back
        containerStyle={styles.backButtonContainer}
        title="Team Comparison"
      />
      <SelectionHeader
        allSeason={_seasonList}
        season={season}
        selectTeam={() => {
          navigation.navigate('SearchTeam');
        }}
        selectSeason={e => setSeason(e)}
        homeTeamData={_homeTeamData}
        awayTeamData={_awayTeamData}
      />
      <ScrollView horizontal={false}>
        <GameStats />
        <LastGames />
        {/* <SearchModal isOpen={isSearchOpen} close={() => openSearch(false)} /> */}
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1 },
  backButtonContainer: {
    marginHorizontal: wp(5),
    // marginTop: hp(3),
    marginBottom: hp(3),
  },
});
