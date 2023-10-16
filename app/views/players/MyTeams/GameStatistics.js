import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import { hp, isAndroid, wp } from '../../../utils/responsive';
import Back from '../../../utils/HeaderButtons/Back';
import GameHeader from '../../../components/games/LastGame/GameHeader';
import LastGameScoreTable from '../../../components/games/LastGame/LastGameScoreTable';
import GameDropdownButton from '../../../components/games/LastGame/GameDropdownButton';
import QuickBoxScore from '../../../components/games/QuickBoxScore/QuickBoxScore';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native-ui-lib';
import { customTheme } from '../../../constants';
import CourtChartSVG from '../../../assets/images/icons-svgs/CourtChartSVG';

const GameStatistics = () => {
  const navigation = useNavigation();

  const gobackHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Back
        onPress={gobackHandler}
        title="Game Statistics"
        containerStyle={styles.backButton}
      />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.lastGameInfo}>
          <GameHeader
            containerStyle={styles.gameHeader}
            leftTeaminfo={{
              name: 'Kalumet',
              color: customTheme.colors.lightBlue,
              subTitle: 'Copper Kings',
            }}
            rightTeamInfo={{
              name: 'Divine Child',
              color: customTheme.colors.lightRed,
              subTitle: 'Falcons',
            }}
          />
          <LastGameScoreTable />
        </View>
        <View style={styles.dropdownButtons}>
          <GameDropdownButton
            title={'Blue Team'}
            isActive
            color={customTheme.colors.lightBlue}
          />
          <GameDropdownButton title={'All Players'} />
        </View>
        <Text medium-700 style={styles.quickScoreTitle}>
          Copper King’s Quick Box Score
        </Text>
        <QuickBoxScore containerStyle={styles.quickBoxScore} />
        <Text medium-700 style={styles.quickScoreTitle}>
          Court Chart
        </Text>
        <View style={styles.courtChartContainer}>
          <CourtChartSVG />
        </View>
      </ScrollView>
    </View>
  );
};

export default GameStatistics;

const styles = StyleSheet.create({
  container: { flex: 1 },
  backButton: {
    marginHorizontal: wp(5),
    marginTop: hp(2),
  },
  gameHeader: {
    backgroundColor: customTheme.colors.lightDark,
    padding: wp(2),
    borderRadius: wp(2),
  },
  dropdownButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: wp(10),
    marginTop: hp(4),
  },
  quickScoreTitle: {
    marginHorizontal: wp(5),
    marginTop: hp(3),
  },
  quickBoxScore: { alignSelf: 'center', marginTop: hp(3) },
  courtImage: {
    width: wp(90),
    alignSelf: 'center',
    marginTop: hp(2.5),
    height: hp(30),
  },
  lastGameInfo: { marginHorizontal: wp(2) },
  scrollView: { paddingBottom: hp(isAndroid ? 3 : 5) },
  courtChartContainer: { marginTop: hp(2), alignSelf: 'center' },
});
