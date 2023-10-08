import React from 'react';
import { StatusBar } from 'react-native';
import { customTheme } from './constants';
import { NavigationContainer } from '@react-navigation/native';
import AppLoadignStack from './navigations/AppLoadingStack';
import AppProviders from './context/AppProviders';
import AuthProvider from './context/AuthProvider';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
export default function App() {
  return (
    <>
      <SafeAreaProvider
        style={{ backgroundColor: customTheme.colors.background }}>
        <AppProviders>
          <AuthProvider>
            <StatusBar
              barStyle={customTheme.statusBarStyle}
              backgroundColor={customTheme.colors.light.background}
            />
            <GestureHandlerRootView style={{
              flex: 1
            }}>
              <NavigationContainer theme={customTheme}>
                <AppLoadignStack />
              </NavigationContainer>
            </GestureHandlerRootView>

          </AuthProvider>
          <Toast />
        </AppProviders>
      </SafeAreaProvider>
    </>

  );
}
