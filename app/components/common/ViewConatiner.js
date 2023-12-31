import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { customTheme } from '../../constants';
import { View } from 'react-native-ui-lib';
import { getDesiredNumber } from '../../utils/helper';
import { isX, wp } from '../../utils/responsive';
import { ScreenHeader } from './ScreenHeader';
export const statusBarHeight =
  Platform.OS === 'ios'
    ? (isX
        ? customTheme.spacings.spacing_48
        : customTheme.spacings.spacing_48) ||
      StatusBar.currentHeight * customTheme.spacings.spacing_8
    : StatusBar.currentHeight;
export const ViewContainer = ({
  headerTilte,
  hideStatusBar = false,
  isView = true,
  includeStatusBar = true,
  statusBarColor = customTheme.colors.light,
  ...props
}) => {
  // Default values for iOS and Android
  return (
    <>
      {Platform.OS === 'ios' ? (
        <View
          backgroundColor={customTheme.colors.light.background}
          width={'100%'}
          height={statusBarHeight + customTheme.spacings.spacing_12}
        />
      ) : (
        <>
          <StatusBar
            hidden={hideStatusBar}
            backgroundColor={statusBarColor}
            width={'100%'}
            translucent
            height={statusBarHeight + customTheme.spacings.spacing_12}
          />
          {!hideStatusBar && <View height={statusBarHeight} />}
        </>
      )}

      {headerTilte && <ScreenHeader title={headerTilte ?? ''} />}
      {isView && (
        <View flex useSafeArea paddingH-16 {...props}>
          {props.children}
        </View>
      )}
      {!isView && props.children}
    </>
  );
};
