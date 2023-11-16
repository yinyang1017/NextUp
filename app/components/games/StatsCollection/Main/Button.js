import React from 'react';
import { Button as RNButton } from 'react-native-ui-lib';
export default function Button({
  label,
  backgroundColor,
  color,
  onPress,
  borderColor,
}) {
  return (
    <RNButton
      label={label}
      backgroundColor={backgroundColor}
      color={color}
      style={[
        { width: '100%' },
        borderColor && { borderColor, borderWidth: 1 },
      ]}
      onPress={onPress}
      size="small"
      borderRadius={5}
    />
  );
}
