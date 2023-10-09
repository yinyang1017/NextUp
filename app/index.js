import React from 'react';
import { StatusBar } from 'react-native';
import { customTheme } from './constants';
import { NavigationContainer } from '@react-navigation/native';
import AppLoadignStack from './navigations/AppLoadingStack';
import AppProviders from './context/AppProviders';
import AuthProvider from './context/AuthProvider';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import './utils/typographies';

export default function App() {
  return (
    <SafeAreaProvider
      style={{ backgroundColor: customTheme.colors.background }}>
      <NavigationContainer theme={customTheme}>
        <AppProviders>
          <AuthProvider>
            <StatusBar
              barStyle={customTheme.statusBarStyle}
              backgroundColor={customTheme.colors.light.background}
            />
            <AppLoadignStack />
          </AuthProvider>
          <Toast />
        </AppProviders>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
