import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { customTheme } from '../../constants';
import { View } from 'react-native-ui-lib';
import { getDesiredNumber } from '../../utils/helper';
import { isX, wp } from '../../utils/responsive';
import { ScreenHeader } from './ScreenHeader';
export const statusBarHeight =
  StatusBar.currentHeight * customTheme.spacings.spacing_8 ||
  (Platform.OS === 'ios'
    ? isX ? customTheme.spacings.spacing_48 : customTheme.spacings.spacing_48
    : customTheme.spacings.spacing_48);
export const ViewContainer = ({ headerTilte, ...props }) => {
  // Default values for iOS and Android
  return (
    <View flex useSafeArea paddingH-16>
      {
        headerTilte && <ScreenHeader title={headerTilte ?? ''} />
      }
      {props.children}
    </View>
  );
};
