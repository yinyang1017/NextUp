import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { ViewContainer } from '../../../components/common/ViewConatiner';
import StatsHeader from './StatsHeader';
import Button from '../../../components/games/StatsCollection/Main/Button';
import { View } from 'react-native-ui-lib';
import { hp, wp } from '../../../utils/responsive';
import { customTheme } from '../../../constants';
import useDelayedState from '../../../hooks/useBounceState';
import { GameContext } from '../../../context/GameProvider';
import Players from '../../../components/games/StatsCollection/Assist/players';
import Result from '../../../components/games/StatsCollection/Assist/result';
import { useNavigation, useRoute } from '@react-navigation/native';
export default function Assist() {
  const {
    params: { goalPlayerId, x, y },
  } = useRoute();
  const { activePlayers, setScore } = useContext(GameContext);
  const [result, setResult] = useState(null);
  const navigation = useNavigation();
  const [selectedPlayerId, selectPlayer] = useState(null);
  useEffect(() => {
    if (result !== null) {
      setScore(e => [
        ...e,
        {
          goalBy: goalPlayerId,
          assistBy: selectedPlayerId,
          type: result && result.toLowerCase(),
          x,
          y,
        },
      ]);
      navigation.navigate('Main');
    }
  }, [selectedPlayerId, goalPlayerId, result, x, y, setScore, navigation]);
  return (
    <ViewContainer isView={false} hideStatusBar>
      <StatsHeader />
      <View style={styles.mainContainer}>
        <View style={styles.main}>
          <Players
            current={selectedPlayerId}
            selectPlayer={selectPlayer}
            players={activePlayers}
          />
          {selectedPlayerId !== null && (
            <Result current={result} select={setResult} />
          )}
        </View>
        <View style={styles.bottomSection}>
          <Button
            label={'Skip'}
            backgroundColor={customTheme.colors.gray_300}
          />
        </View>
      </View>
    </ViewContainer>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  main: {
    alignItems: 'center',
    flexDirection: 'column',
    height: wp(60),
    gap: wp(4),
    justifyContent: 'center',
  },

  bottomSection: {
    width: '10%',

    alignSelf: 'flex-end',
    marginHorizontal: hp(2),
  },
});
