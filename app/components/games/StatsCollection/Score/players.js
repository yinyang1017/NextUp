import React from 'react';
import { hp, wp } from '../../../../utils/responsive';
import { customTheme } from '../../../../constants';
import { Pressable, StyleSheet } from 'react-native';
import { PlayerItem } from '../Freethrow/players';
import { Text, View } from 'react-native-ui-lib';
export default function Players({ current, players, selectPlayer }) {
  return (
    <View style={styles.main1}>
      <Text style={styles.titleText1}>Who Score</Text>
      <View style={styles.playerBox}>
        {players.map(el => (
          <Pressable key={el.id} onPress={() => selectPlayer(el.id)}>
            <PlayerItem
              selected={el.id === current}
              image={el.image}
              width={hp(14)}
              name={el.name}
              available={el.available}
              imageWidth={hp(7)}
              number={el.number}
              textSize={hp(1.4)}
            />
          </Pressable>
        ))}
      </View>
    </View>
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
