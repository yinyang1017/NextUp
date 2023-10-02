import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { hp, wp } from '../../../utils/responsive';
import Back from '../../../utils/HeaderButtons/Back';
import GameHeader from '../../../components/games/LastGame/GameHeader';
import LastGameScoreTable from '../../../components/games/LastGame/LastGameScoreTable';
import { MyColors } from '../../../constants/colors';
import GameDropdownButton from '../../../components/games/LastGame/GameDropdownButton';
import QuickBoxScore from '../../../components/games/QuickBoxScore/QuickBoxScore';
import { FontFamily, FontSize } from '../../GlobalStyles';
import { useNavigation } from '@react-navigation/native';

const GameStatistics = () => {
  const navigation = useNavigation();

  const gobackHandler = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <Back
        onPress={gobackHandler}
        title="Game Statistics"
        containerStyle={styles.backButton}
      />
      <View style={{ marginHorizontal: wp(2) }}>
        <GameHeader containerStyle={styles.gameHeader} />
        <LastGameScoreTable />
      </View>
      <View style={styles.dropdownButtons}>
        <GameDropdownButton
          title={'Blue Team'}
          isActive
          color={MyColors.lightBlue}
        />
        <GameDropdownButton title={'All Players'} />
      </View>
      <Text style={styles.quickScoreTitle}>Copper King’s Quick Box Score</Text>
      <QuickBoxScore containerStyle={styles.quickBoxScore} />
    </SafeAreaView>
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
    backgroundColor: MyColors.lightDark,
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
    color: MyColors.light,
    fontWeight: '700',
    fontSize: FontSize.bodyLargeBold_size,
    fontFamily: FontFamily.robotoRegular,
  },
  quickBoxScore: { alignSelf: 'center', marginTop: hp(3) },
});
