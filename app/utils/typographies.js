const { Typography } = require('react-native-ui-lib');
const { customTheme } = require('../constants');

Typography.loadTypographies({
  tiny: {
    color: customTheme.colors.light,
    fontSize: customTheme.fontSizes.size_10,
    fontFamily: customTheme.fontFamily.robotoRegular,
  },
  'tiny-600': {
    color: customTheme.colors.light,
    fontWeight: '600',
    fontSize: customTheme.fontSizes.size_10,
    fontFamily: customTheme.fontFamily.robotoRegular,
  },
  'small-400': {
    color: customTheme.colors.light,
    fontWeight: '400',
    fontSize: customTheme.fontSizes.size_12,
    fontFamily: customTheme.fontFamily.robotoRegular,
  },
  'small-500': {
    color: customTheme.colors.light,
    fontWeight: '500',
    fontSize: customTheme.fontSizes.size_12,
    fontFamily: customTheme.fontFamily.robotoRegular,
  },
  'small-600': {
    color: customTheme.colors.light,
    fontWeight: '600',
    fontSize: customTheme.fontSizes.size_12,
    fontFamily: customTheme.fontFamily.robotoRegular,
  },
  'small-700': {
    color: customTheme.colors.light,
    fontWeight: '700',
    fontSize: customTheme.fontSizes.size_12,
    fontFamily: customTheme.fontFamily.robotoBold,
  },
  'small-x': {
    color: customTheme.colors.light,
    fontSize: customTheme.fontSizes.size_13,
    fontFamily: customTheme.fontFamily.robotoRegular,
  },
  'small-x-500': {
    color: customTheme.colors.light,
    fontWeight: '500',
    fontSize: customTheme.fontSizes.size_13,
    fontFamily: customTheme.fontFamily.robotoRegular,
  },
  'small-x-600': {
    color: customTheme.colors.light,
    fontWeight: '600',
    fontSize: customTheme.fontSizes.size_13,
    fontFamily: customTheme.fontFamily.robotoRegular,
  },
  medium: {
    fontFamily: customTheme.fontFamily.robotoRegular,
    fontSize: customTheme.fontSizes.size_16,
    color: customTheme.colors.light,
  },
  'medium-500': {
    fontFamily: customTheme.fontFamily.robotoRegular,
    fontSize: customTheme.fontSizes.size_16,
    color: customTheme.colors.light,
    fontWeight: '500',
  },
  'medium-600': {
    color: customTheme.colors.light,
    fontWeight: '600',
    fontSize: customTheme.fontSizes.size_16,
    fontFamily: customTheme.fontFamily.robotoRegular,
  },
  'medium-700': {
    color: customTheme.colors.light,
    fontWeight: '700',
    fontSize: customTheme.fontSizes.size_16,
    fontFamily: customTheme.fontFamily.robotoBold,
  },
  'medium-x-400': {
    color: customTheme.colors.light,
    fontWeight: '400',
    fontSize: customTheme.fontSizes.size_17,
    fontFamily: customTheme.fontFamily.robotoRegular,
  },
  'medium-xl-600': {
    color: customTheme.colors.light,
    fontWeight: '600',
    fontSize: customTheme.fontSizes.size_18,
    fontFamily: customTheme.fontFamily.robotoRegular,
  },
  'large-x-500': {
    color: customTheme.colors.light,
    fontWeight: '500',
    fontSize: customTheme.fontSizes.size_20,
    fontFamily: customTheme.fontFamily.robotoRegular,
  },
  'large-x-600': {
    color: customTheme.colors.light,
    fontWeight: '600',
    fontSize: customTheme.fontSizes.size_20,
    fontFamily: customTheme.fontFamily.robotoRegular,
  },
  'large-x-700': {
    color: customTheme.colors.light,
    fontWeight: '700',
    fontSize: customTheme.fontSizes.size_20,
    fontFamily: customTheme.fontFamily.robotoRegular,
  },
  'large-xl-600': {
    color: customTheme.colors.light,
    fontWeight: '600',
    fontSize: customTheme.fontSizes.size_22,
    fontFamily: customTheme.fontFamily.robotoRegular,
  },
  'large-3xl-400': {
    color: customTheme.colors.light,
    fontWeight: '400',
    fontSize: customTheme.fontSizes.size_24,
    fontFamily: customTheme.fontFamily.robotoRegular,
  },
  'regular-400': {
    color: customTheme.colors.light,
    fontWeight: '400',
    fontFamily: customTheme.fontFamily.robotoRegular,
  },
  'regular-700': {
    color: customTheme.colors.light,
    fontWeight: '700',
    fontFamily: customTheme.fontFamily.robotoRegular,
  },
  'header-400': {
    color: customTheme.colors.light,
    fontWeight: '400',
    fontSize: customTheme.fontSizes.size_32,
    fontFamily: customTheme.fontFamily.robotoRegular,
  },
});
