import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { Text, View } from 'react-native-ui-lib';
import { customTheme } from '../../../../constants';
import { hp, wp } from '../../../../utils/responsive';
function Item({ isSelected, select, value, success }) {
  return (
    <Pressable onPress={() => select(value)}>
      <Text
        style={[
          styles.roundItem,
          isSelected
            ? success
              ? styles.bgGreen
              : styles.bgRed
            : styles.bgGray,
        ]}>
        {value}
      </Text>
    </Pressable>
  );
}
function ClickedItem({ isSelected, value, success }) {
  return (
    <Text
      style={[
        styles.roundItem,
        isSelected ? (success ? styles.bgGreen : styles.bgRed) : styles.bgGray,
      ]}>
      {value}
    </Text>
  );
}
export default function Result({ current, select }) {
  return (
    <View style={[styles.main1, styles.heightSmall]}>
      <Text style={styles.titleText1}>Made / Missed</Text>
      <View style={styles.playerBox}>
        {[
          { label: 'Made', success: true },
          { label: 'Missed', success: false },
        ].map(el =>
          current === null ? (
            <Item
              value={el.label}
              key={el.label}
              isSelected={el.label === current}
              select={select}
              success={el.success}
            />
          ) : (
            <ClickedItem
              value={el.label}
              key={el.label}
              isSelected={el.label === current}
              success={el.success}
            />
          ),
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heightSmall: { height: wp(30) },
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
    alignItems: 'center',
    justifyContent: 'center',
    gap: wp(2),
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
});
