import { Dimensions, Platform } from 'react-native';

const Dim = Dimensions.get('window');

const xOffset = Platform.OS == 'ios' ? Dim.width * 0.04 : 0;
const yOffset = Platform.OS == 'ios' ? Dim.width * 0.03 : 0;

export const Layout = {
  width: Dim.width,
  height: Dim.height,
  xOffset,
  yOffset,
};
