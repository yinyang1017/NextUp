import React from 'react';
import { PlayerAvatar } from '../IconItems';
import { Text, View } from 'react-native-ui-lib';
import { customTheme } from '../../../../constants';
import { StyleSheet } from 'react-native';
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

const styles = StyleSheet.create({
  name: {
    color: customTheme.colors.light,
    fontSize: 10,
    fontWeight: '600',
    textAlign: 'center',
  },
});
