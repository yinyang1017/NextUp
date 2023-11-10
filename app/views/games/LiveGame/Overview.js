import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, Text, View } from 'react-native-ui-lib';
import Prediction from './Prediction';
import { Colors } from '../../../constants';
import { FontSize } from '../../GlobalStyles';
import { hp, wp } from '../../../utils/responsive';
import GameStats from './GameStat';
import { GAME, LiveGameContext } from '.';
import PlayerStats from './PlayerStats';
import { useNavigation } from '@react-navigation/native';
export default function Overview() {
  const status = useContext(LiveGameContext);
  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Prediction />
      <Text style={styles.statement}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
        sollicitudin viverra ipsum nibh mi lacus. In mi neque risus elementum
        tempor nisl ultricies ultrices ut. Malesuada ultrices vel cursus
        sollicitudin ut nunc et lectus quis.
      </Text>
      <GameStats title={status === GAME.BEFORE ? 'Game Stats' : 'Box Score'} />
      {status === GAME.BEFORE ? (
        <View style={styles.buttonWrapper}>
          <Button
            label="Start Stat Collection"
            onPress={() => navigation.navigate('Stats')}
          />
        </View>
      ) : (
        <PlayerStats />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: wp(3) },
  statement: {
    color: Colors.light,
    lineHeight: 25,
    fontSize: FontSize.bodyMediumSemibold_size,
    marginBottom: hp(3),
  },
  buttonWrapper: {
    paddingVertical: hp(2),
  },
});
