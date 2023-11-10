import React from 'react';
import { Image, View, Text } from 'react-native-ui-lib';
export function Team({ size, logo, title, subtitle }) {
  return (
    <View>
      <View>
        <Image source={logo} height={size} width={size} />
      </View>
      <View>
        {title && <Text>{title}</Text>}
        {subtitle && <Text>{subtitle}</Text>}
      </View>
    </View>
  );
}
export function 