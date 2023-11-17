import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Text, View } from 'react-native-ui-lib';
import { customTheme } from '../../../../constants';
import { hp, wp } from '../../../../utils/responsive';
function Item({ isSelected, select, num }) {
  return (
    <Pressable onPress={() => select(num)}>
      <Text
        style={[styles.roundItem, isSelected ? styles.bgGreen : styles.bgGray]}>
        0{num}
      </Text>
    </Pressable>
  );
}
export default function FreethrowCount({ selected, select }) {
  return (
    <View style={styles.container}>
      <Text style={styles.flowthrowText}>Number of free throw</Text>
      <View style={styles.horizontalRow}>
        {[1, 2, 3].map(el => (
          <Item
            num={el}
            key={el}
            select={select}
            isSelected={selected === el}
          />
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: wp(3),
  },
  flowthrowText: {
    color: customTheme.colors.light,
    fontSize: 22,
  },
  roundItem: {
    padding: wp(8),
    borderRadius: wp(15),
    color: customTheme.colors.light,
  },
  bgGreen: {
    backgroundColor: customTheme.colors.green30,
  },
  bgGray: {
    backgroundColor: customTheme.colors.gray_400,
  },
  horizontalRow: {
    flexDirection: 'row',
    gap: hp(1),
  },
});
