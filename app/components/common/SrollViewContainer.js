import React from 'react';
import { View, Text } from 'react-native-ui-lib';
import { Platform, ScrollView, StatusBar, StyleSheet, } from 'react-native';
import { customTheme } from '../../constants';

export const ScrollViewContainer = ({ children, headerConternt = null }) => {
  const statusBarHeight =
    StatusBar.currentHeight * customTheme.spacings.spacing_8 ||
    (Platform.OS === 'ios'
      ? customTheme.spacings.spacing_16
      : customTheme.spacings.spacing_16); // Default values for iOS and Android
  return (
    <>
      {
        headerConternt && <View></View>
      }

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={{
          ...styles.content,
          paddingTop: statusBarHeight,
        }}>
        {children}
      </ScrollView>
    </>

  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: customTheme.spacings.spacing_12,
    paddingBottom: customTheme.spacings.spacing_16,
    justifyContent: 'flex-start',
  },
});
