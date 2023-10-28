import React from 'react';
import { View } from 'react-native-ui-lib';
import { StatusBar } from 'react-native';
import { customTheme } from './constants';
import { NavigationContainer } from '@react-navigation/native';
import AppLoadignStack from './navigations/AppLoadingStack';
import AppProviders from './context/AppProviders';
import AuthProvider from './context/AuthProvider';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ImagePreviewProvider from './context/ImagePreviewProvider';
import { statusBarHeight } from './components/common/ViewConatiner';
import './utils/typographies';
import './constants/theme-manager';


export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider
        style={{ backgroundColor: customTheme.colors.background }}>
        <NavigationContainer theme={customTheme}>
          <AppProviders>
            <AuthProvider>
              <ImagePreviewProvider>
                {/* <View
                  backgroundColor={customTheme.colors.light.background}
                  width={'100%'}
                  height={statusBarHeight + customTheme.spacings.spacing_12}
                /> */}
                <StatusBar
                  barStyle={customTheme.statusBarStyle}
                  backgroundColor={customTheme.colors.light.background}
                />
                <AppLoadignStack />
              </ImagePreviewProvider>
            </AuthProvider>
            <Toast />
          </AppProviders>
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
