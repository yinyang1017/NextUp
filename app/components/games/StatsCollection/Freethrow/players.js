import React from 'react';
import { Image, Text, View } from 'react-native-ui-lib';
import { customTheme } from '../../../../constants';
import { StyleSheet } from 'react-native';
import { wp } from '../../../../utils/responsive';

export function Player({
  image,
  timeout,
  size,
  color = customTheme.colors.overlay,
}) {
  return timeout === 0 ? (
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
        {timeout}
      </Text>
    </View>
  );
}

export function PlayerItem({
  image,
  name,
  width,
  imageWidth,
  timeout = 0,
  selected,
}) {
  return (
    <View style={{ width, alignItems: 'center', gap: wp(2) }}>
      {selected ? (
        <Player
          image={image}
          size={imageWidth}
          timeout={timeout}
          color={customTheme.colors.red30}
        />
      ) : (
        <Player image={image} size={imageWidth} timeout={timeout} />
      )}
      <Text
        style={[
          styles.name,
          selected ? styles.selected : styles.unselected,
          { fontSize: imageWidth / 3 },
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
