import React from 'react';
import { Image, Text, View } from 'react-native-ui-lib';
import { customTheme } from '../../../../constants';
import { StyleSheet } from 'react-native';
import { wp } from '../../../../utils/responsive';

export function Player({
  image,
  number,
  available,
  size,
  color = customTheme.colors.overlay,
}) {
  return available ? (
    <Image
      source={image}
      style={{ height: size, width: size }}
      borderRadius={size / 2}
    />
  ) : (
    <View
      style={{
        width: size,
        borderRadius: size / 2,
        height: size,
        backgroundColor: color,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{ color: customTheme.colors.light, fontSize: size / 2 }}>
        {number}
      </Text>
    </View>
  );
}

export function PlayerItem({
  image,
  name,
  available,
  width,
  imageWidth,
  textSize,
  number = 0,
  selected,
}) {
  return (
    <View style={{ width, alignItems: 'center', gap: wp(2) }}>
      {selected ? (
        <Player
          image={image}
          available={available}
          size={imageWidth}
          number={number}
          color={customTheme.colors.red30}
        />
      ) : (
        <Player
          image={image}
          size={imageWidth}
          available={available}
          number={number}
        />
      )}
      <Text
        style={[
          styles.name,
          selected ? styles.selected : styles.unselected,
          { fontSize: textSize || imageWidth / 3 },
        ]}>
        {name}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  name: {
    color: customTheme.colors.light,

    fontWeight: '600',
    textAlign: 'center',
  },
  unselected: {
    color: customTheme.colors.light,
  },
  selected: {
    color: customTheme.colors.red30,
  },
});
