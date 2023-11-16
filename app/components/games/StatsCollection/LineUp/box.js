import React from 'react';
import Player from './playitems';
import { hp, wp } from '../../../../utils/responsive';
import { Text, View } from 'react-native-ui-lib';
import { StyleSheet } from 'react-native';
import { customTheme } from '../../../../constants';
import { FontSize } from '../../../../views/GlobalStyles';
export function ClickableBox({ title, players = [], isActive = false }) {
  return (
    <View style={[styles.container, isActive && styles.selected]}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.playerContainer}>
        {players.map((el, index) => (
          <Player
            key={index}
            name={el.name}
            timeout={el.timeout}
            image={el.image}
            width={hp(8)}
            imageWidth={hp(5)}
            emptyColor={customTheme.colors.background}
          />
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  playerContainer: {
    flexDirection: 'row',
    gap: hp(2),
  },
  container: {
    backgroundColor: customTheme.colors.gray_300,
    borderRadius: wp(3),
    gap: wp(1),
    flexDirection: 'col',
    alignItems: 'center',
    paddingVertical: wp(2),
  },
  title: {
    fontSize: FontSize.size_smi,
    color: customTheme.colors.light,
  },
  selected: {
    borderColor: customTheme.colors.brightGreen,
    borderWidth: 3,
  },
});
