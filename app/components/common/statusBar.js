import React from 'react';
import { View, StatusBar } from 'react-native';
import { CommonStyles } from '../../constants';

const AppStatusBar = ({ color, ...props }) => (
  // <View style={[CommonStyles.statusBar, { backgroundColor: color }]}>
  <StatusBar translucent backgroundColor={color} {...props} />
  // </View>
);

export const GameAppStatusBar = ({ color, ...props }) => (
  // <View style={[CommonStyles.statusBar, { backgroundColor: color }]}>
  <StatusBar translucent backgroundColor={color} {...props} />
  // </View>
);

export default AppStatusBar;
