import React from 'react';
import { hp, wp } from '../../../../utils/responsive';
import { customTheme } from '../../../../constants';
import { Pressable, StyleSheet } from 'react-native';
import { PlayerItem } from '../Freethrow/players';
import { Text, View } from 'react-native-ui-lib';
export default function Players({ current, players, selectPlayer }) {
  const selected = current === null;
  return (
    <View style={[styles.main1, !selected && styles.mainSmall]}>
      <View style={styles.titles}>
        <Text style={selected ? styles.titleText1 : styles.titleText1Small}>
          Who Assisted
        </Text>
        <Text style={selected ? styles.titleText2 : styles.titleText2Small}>
          +2pt Shot by Guy Hawkins
        </Text>
      </View>
      <View style={styles.playerBox}>
        {players.map(el =>
          selected ? (
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
          ) : (
            <PlayerItem
              selected={el.id === current}
              image={el.image}
              width={hp(14)}
              name={el.name}
              available={el.available}
              imageWidth={hp(5)}
              number={el.number}
              textSize={hp(1.4)}
            />
          ),
        )}
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
    color: customTheme.colors.overlayWhite,
    fontSize: 18,
    fontWeight: '500',
  },
  titleText1Small: {
    color: customTheme.colors.overlayWhite,
    fontSize: 13,
    fontWeight: '500',
  },
  titleText2: {
    color: customTheme.colors.light,
    fontSize: 22,
    fontWeight: '600',
  },
  titleText2Small: {
    color: customTheme.colors.light,
    fontSize: 16,
    fontWeight: '600',
  },
  main1: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: wp(2),
  },
  mainSmall: {
    alignContent: 'flex-start',
  },
  titles: {
    alignItems: 'center',
  },
});
