import React from 'react';
import { Image } from 'react-native';
import { wp } from '../../../../utils/responsive';
import { Text } from 'react-native-ui-lib';
export default function Court({}) {
  return (
    <Image
      source={require('../../../../assets/half_court.png')}
      width={wp(90)}
    />
  );
}
