import { useState, useEffect } from 'react';
import { PlayerAvatar, Substitute } from '../IconItems';
import { Text, View } from 'react-native-ui-lib';
import { customTheme } from '../../../../constants';
import { Pressable, StyleSheet } from 'react-native';
import { wp } from '../../../../utils/responsive';
export default function Player({
  image,
  name,
  width,
  imageWidth,
  timeout = 0,
  emptyColor = customTheme.colors.gray_300,
}) {
  return (
    <View style={{ width, alignItems: 'center', gap: wp(2) }}>
      {timeout ? (
        <PlayerAvatar alt={timeout} size={imageWidth} color={emptyColor} />
      ) : (
        <PlayerAvatar image={image} alt={timeout} size={imageWidth} />
      )}
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}
export function SeletablePlayer({
  image,
  name,
  number,
  width,
  imageWidth,
  available,
  selected,
  toggle,
  emptyColor = customTheme.colors.red10,
}) {
  return (
    <View style={{ width, alignItems: 'center', gap: wp(2) }}>
      <Pressable onPress={toggle}>
        {selected ? (
          <Substitute
            image={image}
            size={imageWidth}
            borderColor={emptyColor}
            borderWidth={4}
          />
        ) : (
          <Substitute image={image} size={imageWidth} />
        )}
      </Pressable>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  name: {
    color: customTheme.colors.light,
    fontSize: 10,
    fontWeight: '600',
    textAlign: 'center',
  },
});
