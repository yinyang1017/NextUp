import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { ViewContainer } from '../../../components/common/ViewConatiner';
import StatsHeader from './StatsHeader';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View } from 'react-native-ui-lib';
import Result from '../../../components/games/StatsCollection/Score/result';
import { hp, wp } from '../../../utils/responsive';
import Button from '../../../components/games/StatsCollection/Main/Button';
import { customTheme } from '../../../constants';
import Players from '../../../components/games/StatsCollection/Score/players';
import useDelayedState from '../../../hooks/useBounceState';
import { GameContext } from '../../../context/GameProvider';
export default function Score() {
  const {
    params: { x, y },
  } = useRoute();
  const [result, setResult] = useState(null);
  const navigation = useNavigation();
  const { activePlayers } = useContext(GameContext);
  const [selectedPlayerId, playerIsSelected, selectPlayer] = useDelayedState(
    null,
    100,
  );
  useEffect(() => {
    if (playerIsSelected !== null) {
      navigation.navigate('Assist', {
        x,
        y,
        goalPlayerId: playerIsSelected,
      });
    }
  }, [playerIsSelected, navigation, x, y]);

  return (
    <ViewContainer isView={false} hideStatusBar>
      <StatsHeader />
      <View style={styles.mainContainer}>
        <View style={styles.main}>
          <Result current={result} select={setResult} />
          {result !== null && (
            <Players
              current={selectedPlayerId}
              selectPlayer={selectPlayer}
              players={activePlayers}
            />
          )}
        </View>
        <View style={styles.bottomSection}>
          <Button
            label={'Skip'}
            onPress={() => navigation.navigate('Main')}
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
    height: wp(60),
    gap: wp(1),
    justifyContent: 'center',
  },

  bottomSection: {
    width: '10%',

    alignSelf: 'flex-end',
    marginHorizontal: hp(2),
  },
});
