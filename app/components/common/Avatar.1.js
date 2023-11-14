import React from 'react';
import { Image, View } from 'react-native-ui-lib';

export default function Avatar({
  size = 16,
  imageUrl,
  borderRadius = 2,
  borderColor = 'black',
  bgColor = 'white',
}) {
  return (
    <View
      style={{
        height: size,
        width: size,
        borderWidth: borderRadius,
        borderColor: borderColor,
        backgroundColor: bgColor,
        borderRadius: size / 2,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        source={imageUrl}
        // borderRadius={size/2}
        height={(size - 2 * borderRadius) * 0.7}
        width={(size - 2 * borderRadius) * 0.7}
        resizeMode="contain"
      />
    </View>
  );
}
