import React from 'react';
import { Button as RNButton } from 'react-native-ui-lib';
export default function Button({ label, backgroundColor, color, onPress }) {
  return (
    <RNButton
      label={label}
      backgroundColor={backgroundColor}
      color={color}
      style={{ width: '100%' }}
      onPress={onPress}
      size="small"
      borderRadius={5}
    />
  );
}
