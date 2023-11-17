import React, { useContext, useEffect, useState } from 'react';
import { Pressable } from 'react-native';
import { ViewContainer } from '../../../components/common/ViewConatiner';
import StatsHeader from './StatsHeader';
import { Text, View } from 'react-native-ui-lib';
import { PlayerItem } from '../../../components/games/StatsCollection/Freethrow/players';
import { hp, wp } from '../../../utils/responsive';
import { StyleSheet } from 'react-native';
import Button from '../../../components/games/StatsCollection/Main/Button';
import { customTheme } from '../../../constants';
import { GameContext } from '../../../context/GameProvider';
import FreethrowCount from '../../../components/games/StatsCollection/Freethrow/freethrowCount';
import MadeNMiss from '../../../components/games/StatsCollection/Freethrow/madeNmiss';
import { useNavigation } from '@react-navigation/native';
import useDelayedState from '../../../hooks/useBounceState';
export default function Freethrow() {
  const navigation = useNavigation();
  const { activePlayers } = useContext(GameContext);
  const [freethrowCount, countIsSelected, setFreethrowCount] =
    useDelayedState(0);
  const [selectedPlayerId, playerIsSelected, selectPlayer] =
    useDelayedState(null);
  const [result, isFinished, setResult] = useDelayedState(null); // can be Made/Miss
  useEffect(() => {
    if (isFinished !== null) {
      navigation.goBack();
    }
  }, [isFinished, navigation]);
  return (
    <ViewContainer hideStatusBar isView={false}>
      <StatsHeader />
      <View>
        {playerIsSelected === null ? (
          <View style={styles.main1}>
            <Text style={styles.titleText1}>Who shooting the free throw?</Text>
            <View style={styles.playerBox}>
              {activePlayers.map(el => (
                <Pressable key={el.id} onPress={() => selectPlayer(el.id)}>
                  <PlayerItem
                    image={el.image}
                    width={hp(14)}
                    name={el.name}
                    imageWidth={hp(5)}
                    timeout={el.timeout}
                  />
                </Pressable>
              ))}
            </View>
          </View>
        ) : countIsSelected === 0 ? (
          <View style={styles.main2}>
            <Text style={styles.titleText1}>Who shooting the free throw?</Text>
            <View style={styles.playerBox}>
              {activePlayers.map(el => (
                <PlayerItem
                  selected={el.id === selectedPlayerId}
                  image={el.image}
                  width={hp(14)}
                  name={el.name}
                  imageWidth={hp(5)}
                  timeout={el.timeout}
                />
              ))}
            </View>
            <FreethrowCount
              select={setFreethrowCount}
              selected={freethrowCount}
            />
          </View>
        ) : (
          <MadeNMiss current={result} select={setResult} />
        )}

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
  playerBox: {
    flexDirection: 'row',
  },
  bottomSection: {
    width: '10%',
    alignSelf: 'flex-end',
    marginHorizontal: hp(2),
  },
  titleText1: {
    color: customTheme.colors.light,
    fontSize: 22,
    fontWeight: '600',
  },
  main1: {
    height: wp(70),
    alignItems: 'center',
    justifyContent: 'center',
    gap: wp(5),
  },
  main2: {
    height: wp(70),
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: wp(5),
  },
});
