import React from 'react';
import { StatusBar } from 'react-native';
import { customTheme } from './constants';
import { NavigationContainer } from '@react-navigation/native';
import AppLoadignStack from './navigations/AppLoadingStack';
import AppProviders from './context/AppProviders';
import AuthProvider from './context/AuthProvider';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { Typography } from 'react-native-ui-lib';
import { MyColors } from './constants/colors';
import { FontFamily } from './views/GlobalStyles';

Typography.loadTypographies({
  'small-400': {
    color: MyColors.light,
    fontWeight: '400',
    fontSize: customTheme.fontSizes.size_12,
    fontFamily: FontFamily.robotoRegular,
  },
  'small-600': {
    color: MyColors.light,
    fontWeight: '600',
    fontSize: customTheme.fontSizes.size_12,
    fontFamily: FontFamily.robotoRegular,
  },
  'small-x-600': {
    color: MyColors.light,
    fontWeight: '600',
    fontSize: customTheme.fontSizes.size_13,
    fontFamily: FontFamily.robotoRegular,
  },
  medium: {
    fontFamily: FontFamily.robotoRegular,
    fontSize: customTheme.fontSizes.size_16,
    color: MyColors.light,
  },
  'medium-600': {
    color: MyColors.light,
    fontWeight: '600',
    fontSize: customTheme.fontSizes.size_16,
    fontFamily: FontFamily.robotoRegular,
  },
  'medium-700': {
    color: MyColors.light,
    fontWeight: '700',
    fontSize: customTheme.fontSizes.size_16,
    fontFamily: FontFamily.robotoRegular,
  },
  'large-x-600': {
    color: MyColors.light,
    fontWeight: '600',
    fontSize: customTheme.fontSizes.size_20,
    fontFamily: FontFamily.robotoRegular,
  },
  'large-x-700': {
    color: MyColors.light,
    fontWeight: '700',
    fontSize: customTheme.fontSizes.size_20,
    fontFamily: FontFamily.robotoRegular,
  },
  'large-xl-600': {
    color: MyColors.light,
    fontWeight: '600',
    fontSize: customTheme.fontSizes.size_22,
    fontFamily: FontFamily.robotoRegular,
  },
  'large-3xl-400': {
    color: MyColors.light,
    fontWeight: '400',
    fontSize: customTheme.fontSizes.size_24,
    fontFamily: FontFamily.robotoRegular,
  },
  'regular-400': {
    color: MyColors.light,
    fontWeight: '400',
    fontFamily: FontFamily.robotoRegular,
  },
  'regular-700': {
    color: MyColors.light,
    fontWeight: '700',
    fontFamily: FontFamily.robotoRegular,
  },
  'header-400': {
    color: MyColors.light,
    fontWeight: '400',
    fontSize: customTheme.fontSizes.size_32,
    fontFamily: FontFamily.robotoRegular,
  },
});

export default function App() {
  return (
    <SafeAreaProvider
      style={{ backgroundColor: customTheme.colors.background }}>
      <AppProviders>
        <AuthProvider>
          <StatusBar
            barStyle={customTheme.statusBarStyle}
            backgroundColor={customTheme.colors.light.background}
          />
          <NavigationContainer theme={customTheme}>
            <AppLoadignStack />
          </NavigationContainer>
        </AuthProvider>
        <Toast />
      </AppProviders>
    </SafeAreaProvider>
  );
}
