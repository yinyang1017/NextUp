import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { customTheme } from '../../constants';
import { View } from 'react-native-ui-lib';

export const ViewContainer = props => {
  const statusBarHeight =
    StatusBar.currentHeight * customTheme.spacings.spacing_12 ||
    (Platform.OS === 'ios'
      ? customTheme.spacings.spacing_12
      : customTheme.spacings.spacing_12); // Default values for iOS and Android
  return (
    <View
      style={{
        paddingTop: statusBarHeight,
        flex: 1,
        paddingHorizontal: customTheme.spacings.spacing_20,
      }}>
      {props.children}
    </View>
  );
};
