import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { wp, hp } from '../../../utils/responsive';
import Back from '../../../utils/HeaderButtons/Back';
import SelectionHeader from './SelectionHeader';
import OverallStats from './OverallStats';
import StatsComparison from './StatsComparison';
import LastGames from './LastGames';
import UpcomingGames from './UpcomingGames';
import SearchModal from './SearchModal';
import { Text } from 'react-native-ui-lib';

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

const _homePlayerData = {
  name: 'Vaibhav Chibbar',
  profileImg: require('../../../assets/images/avatar.png'),
  teamProfileImg: require('../../../assets/images/dummyTeamLogo.png'),
  rank: 5,
};
const _awayPlayerData = null;
export default function PlayerComparison({ route }) {
  const [isSearchOpen, openSearch] = useState(false);
  const [season, setSeason] = useState(_seasonList[0]);
  return (
    <SafeAreaView style={styles.container}>
      <Back
        containerStyle={styles.backButtonContainer}
        title="Player Comparison"
      />
      <SelectionHeader
        season={season}
        selectPlayer={() => openSearch(true)}
        allSeason={_seasonList}
        selectSeason={e => setSeason(e)}
        homePlayerData={_homePlayerData}
        awayPlayerData={_awayPlayerData}
      />
      <ScrollView horizontal={false}>
        <OverallStats />
        <StatsComparison
          homePlayerData={_homePlayerData}
          awayPlayerData={_awayPlayerData}
        />
        <LastGames />
        <UpcomingGames />
        <SearchModal isOpen={isSearchOpen} close={() => openSearch(false)} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  backButtonContainer: {
    marginHorizontal: wp(5),
    marginTop: hp(1),
    marginBottom: hp(3),
  },
});
