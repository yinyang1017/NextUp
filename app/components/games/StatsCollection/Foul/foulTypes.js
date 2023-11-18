import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { Text, View } from 'react-native-ui-lib';
import { customTheme } from '../../../../constants';
import { hp, wp } from '../../../../utils/responsive';
function Item({ isSelected, select, value }) {
  return (
    <Pressable onPress={() => select(value)}>
      <Text
        style={[styles.roundItem, isSelected ? styles.bgRed : styles.bgGray]}>
        {value}
      </Text>
    </Pressable>
  );
}
export default function FoulType({ current, select }) {
  return (
    <View style={styles.main1}>
      <Text style={styles.foulText}>Who Foul</Text>
      <View style={styles.playerBox}>
        {[
          'Common Foul',
          'Techinical Foul',
          'Shooting Foul',
          'Offensive Foul',
        ].map(el => (
          <Item
            value={el}
            key={el}
            isSelected={el === current}
            select={select}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  playerBox: {
    flexDirection: 'row',
    gap: hp(2),
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
    height: wp(30),
    alignItems: 'center',
    justifyContent: 'center',
    gap: wp(1),
  },

  roundItem: {
    width: wp(20),
    height: wp(20),
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: wp(10),
    color: customTheme.colors.light,
  },
  bgGreen: {
    backgroundColor: customTheme.colors.green30,
  },
  bgRed: {
    backgroundColor: customTheme.colors.red30,
  },
  bgGray: {
    backgroundColor: customTheme.colors.gray_400,
  },
  foulText: {
    color: customTheme.colors.light,
    fontSize: 22,
  },
});
