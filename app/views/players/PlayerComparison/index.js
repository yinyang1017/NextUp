import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native-ui-lib';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {wp, hp} from '../../../utils/responsive';
import Back from '../../../utils/HeaderButtons/Back';
import SelectionHeader from './SelectionHeader';
import OverallStats from './OverallStats';

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
  profileImg: require('../../../assets/images/dummyPlayer.png'),
  teamProfileImg: require('../../../assets/images/dummyTeamLogo.png'),
  rank: 14
};

export default function PlayerComparison({route}) {
  const navigation = useNavigation();
  const [season, setSeason] = useState(_seasonList[0]);

  console.log(route);
  return (
    <SafeAreaView style={styles.container}>
      <Back
        onPress={() => navigation.goBack()}
        containerStyle={styles.backButtonContainer}
        title="Player Comparison"
      />
      <SelectionHeader
        season={season}
        allSeason={_seasonList}
        selectSeason={e => setSeason(e)}
        homePlayerData={_homePlayerData}
      />
      <OverallStats />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  backButtonContainer: {
    marginHorizontal: wp(5),
    marginTop: hp(3),
  },
});
