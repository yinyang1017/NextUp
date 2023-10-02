import {Dimensions, Platform} from 'react-native';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

export const isiPAD = viewportHeight / viewportWidth < 1.6;
export const isTablet = viewportHeight / viewportWidth < 1.6;

export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';
export const isX = isIphoneXorAbove();

export function isIphoneXorAbove() {
  const dimen = Dimensions.get('window');

  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTV &&
    (dimen.height === 812 ||
      dimen.width === 812 ||
      dimen.height === 896 ||
      dimen.height === 667 ||
      dimen.width === 375 ||
      dimen.width === 414 ||
      dimen.width === 896 ||
      dimen.width === 390 ||
      dimen.height === 844 ||
      dimen.height === 926 ||
      dimen.width === 428 ||
      dimen.height === 852 ||
      dimen.width === 393 ||
      dimen.height === 932 ||
      dimen.width === 932)
  );
}

export function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

export function hp(percentage) {
  const value = (percentage * viewportHeight) / 100;
  return Math.round(value);
}

// based on iphone 5s's scale
const scale = viewportWidth / 375;

export function normalize(size) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    if (isiPAD) {
      return Math.round(newSize) - wp(1);
    } else {
      return Math.round(newSize);
    }
  } else {
    if (isTablet) {
      return Math.round(newSize) - wp(1);
    } else {
      return Math.round(newSize);
    }
  }
}

export const wpPx = percentage => wp(percentage) + 'px';
export const hpPx = percentage => hp(percentage) + 'px';
