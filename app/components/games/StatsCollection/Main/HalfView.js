import React from 'react';
import { View } from 'react-native-ui-lib';
import { wp } from '../../../../utils/responsive';
export default function HalfView({ children }) {
  return (
    <View style={{ width: '50%', paddingHorizontal: wp(1) }}>{children}</View>
  );
}
