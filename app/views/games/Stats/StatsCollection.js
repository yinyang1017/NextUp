import React, { useEffect } from 'react';
import { Text, View } from 'react-native-ui-lib';
import Orientation from 'react-native-orientation-locker';
import { ViewContainer } from '../../../components/common/ViewConatiner';
import { hp } from '../../../utils/responsive';
import Back from '../../../utils/HeaderButtons/Back';
export default function StatsCollection() {
  console.log(hp(100));
  useEffect(() => {
    Orientation.lockToLandscapeLeft();
    return () => Orientation.unlockAllOrientations();
  }, []);
  return (
    <ViewContainer>
      <Back />
      <Text>Stats Collection</Text>
    </ViewContainer>
  );
}
