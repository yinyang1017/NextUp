import React from 'react';
import { View } from 'react-native-ui-lib';
export default function ScoreIcon({
  size,
  bgColor,
  thumbColor,
  isLeft = false,
}) {
  return (
    <View
      style={[
        {
          width: size,
          backgroundColor: bgColor,
          height: size / 2,
          borderRadius: size / 2,
        },
        isLeft ? { flexDirection: 'row' } : { flexDirection: 'row-reverse' },
      ]}>
      <View
        style={{
          marginVertical: size / 12,
          marginHorizontal: size / 12,
          backgroundColor: thumbColor,
          width: size / 3,
          height: size / 3,
          borderRadius: size / 2,
        }}
      />
    </View>
  );
}
