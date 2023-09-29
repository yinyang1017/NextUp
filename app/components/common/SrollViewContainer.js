import React from 'react';
import { Platform, ScrollView, StatusBar, StyleSheet } from 'react-native';
import { customTheme } from '../../constants';

export const ScrollViewContainer = props => {
  const statusBarHeight =
    StatusBar.currentHeight * customTheme.spacings.spacing_8 ||
    (Platform.OS === 'ios'
      ? customTheme.spacings.spacing_48
      : customTheme.spacings.spacing_48); // Default values for iOS and Android
  return (
    <ScrollView
      style={styles.scrollView}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={true}
      contentContainerStyle={{
        ...styles.content,
        paddingTop: statusBarHeight,
      }}>
      {props.children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    maxWidth: '100%',
    overflow: 'hidden',
    width: '100%',
    flex: 1,
    backgroundColor: customTheme.colors.background,
  },
  content: {
    paddingHorizontal: customTheme.spacings.spacing_16,
    justifyContent: 'flex-start',
  },
});
