import React from 'react';
import { View, Text } from 'react-native-ui-lib';
import { Platform, ScrollView, StatusBar, StyleSheet, } from 'react-native';
import { customTheme } from '../../constants';
import { ScreenHeader } from './ScreenHeader';
import { KeyboardAvoidingScrollView } from 'react-native-keyboard-avoiding-scroll-view';
import { FormButton } from './FormInputs';

export const ScrollViewContainer = ({ children, headerTilte, showHeader }) => {
  const statusBarHeight =
    StatusBar.currentHeight * customTheme.spacings.spacing_8 ||
    (Platform.OS === 'ios'
      ? customTheme.spacings.spacing_16
      : customTheme.spacings.spacing_16); // Default values for iOS and Android
  return (
    <>
      <View
        backgroundColor={customTheme.colors.light.background}
        width={'100%'}
        height={statusBarHeight + customTheme.spacings.spacing_36}
      />
      {
        showHeader &&
        < >
          <ScreenHeader
            title={headerTilte ?? ''}
          />
        </>
      }
      <ScrollView
        contentContainerStyle={{
          ...styles.content,
        }}>
        {children}
      </ScrollView>
    </>

  );
};

export const KeyBoardAvoidingView = ({
  children,
  headerTilte,
  showHeader,
  onPress = () => null,
  label,
  loading,
  disabled,
}) => {
  return <>
    {
      showHeader &&
      <View paddingH-16 >
        <ScreenHeader
          title={headerTilte ?? ''}
        />
      </View>
    }
    <KeyboardAvoidingScrollView contentContainerStyle={{
      ...styles.content,
    }}
      stickyFooter={
        <View paddingB-20 centerV backgroundColor={
          customTheme.colors.background

        }>
          <FormButton
            onPress={onPress}
            label={label}
            loading={loading}
            disabled={disabled}
          />
        </View>

      }
    >
      {children}
    </KeyboardAvoidingScrollView>
  </>


}
const styles = StyleSheet.create({
  content: {
    paddingHorizontal: customTheme.spacings.spacing_12,
    paddingBottom: customTheme.spacings.spacing_16,
    justifyContent: 'flex-start',
  },
});
