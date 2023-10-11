import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { customTheme } from '../../constants';
import { View } from 'react-native-ui-lib';
import { getDesiredNumber } from '../../utils/helper';
import { isX } from '../../utils/responsive';
export const statusBarHeight =
  StatusBar.currentHeight * customTheme.spacings.spacing_8 ||
  (Platform.OS === 'ios'
    ? isX ? customTheme.spacings.spacing_48 : customTheme.spacings.spacing_48
    : customTheme.spacings.spacing_48);
export const ViewContainer = props => {
  // Default values for iOS and Android
  return (
    <View
      style={{
        marginTop: statusBarHeight,
        // flex: 1,
        paddingHorizontal: customTheme.spacings.spacing_16,
        paddingBottom: customTheme.spacings.spacing_16,
      }}>
      {props.children}
    </View>
  );
};
