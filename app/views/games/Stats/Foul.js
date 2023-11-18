import React, { useContext, useState, useEffect } from 'react';
import { ViewContainer } from '../../../components/common/ViewConatiner';
import StatsHeader from './StatsHeader';
import { Text, View } from 'react-native-ui-lib';
import useDelayedState from '../../../hooks/useBounceState';
import Result from '../../../components/games/StatsCollection/Foul/result';
import { StyleSheet } from 'react-native';
import { customTheme } from '../../../constants';
import FoulType from '../../../components/games/StatsCollection/Foul/foulTypes';
import Button from '../../../components/games/StatsCollection/Main/Button';
import { hp } from '../../../utils/responsive';
import FouledPlayers from '../../../components/games/StatsCollection/Foul/fouledPlayers';
import { GameContext } from '../../../context/GameProvider';
import { useNavigation } from '@react-navigation/native';
export default function Foul() {
  const [result, setResult] = useState(null);
  const navigation = useNavigation();
  const { activePlayers } = useContext(GameContext);
  const [foulType, foulTypeDelayed, setFoulType] = useDelayedState(null, 100); // one of Common Foul, Technical Foul, Shooting Foul, Offensive Foul
  const [selectedPlayerId, playerIsSelected, selectPlayer] = useDelayedState(
    null,
    100,
  );
  useEffect(() => {
    if (playerIsSelected !== null) {
      navigation.goBack();
    }
  }, [playerIsSelected, navigation]);
  return (
    <ViewContainer isView={false} hideStatusBar>
      <StatsHeader />
      <View style={styles.mainContainer}>
        <View style={styles.main}>
          {foulTypeDelayed === null ? (
            <>
              <Result current={result} select={setResult} />
              {result && (
                <>
                  <FoulType current={foulType} select={setFoulType} />
                </>
              )}
            </>
          ) : (
            <FouledPlayers
              current={selectedPlayerId}
              selectPlayer={selectPlayer}
              players={activePlayers}
            />
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
    justifyContent: 'space-around',
  },
  main: {
    alignItems: 'center',
  },

  bottomSection: {
    width: '10%',

    alignSelf: 'flex-end',
    marginHorizontal: hp(2),
  },
});
