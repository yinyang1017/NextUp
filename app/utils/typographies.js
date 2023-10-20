const { Typography } = require('react-native-ui-lib');
const { customTheme } = require('../constants');

Typography.loadTypographies({
  tiny: {
    fontSize: customTheme.fontSizes.size_10,
    fontFamily: customTheme.fontFamily.robotoRegular,
  },
  'tiny-600': {
    fontWeight: '600',
    fontSize: customTheme.fontSizes.size_8,
    fontFamily: customTheme.fontFamily.robotoRegular,
  },
  'small-400': {
    fontWeight: '400',
    fontSize: customTheme.fontSizes.size_12,
    fontFamily: customTheme.fontFamily.robotoRegular,
  },
  'small-500': {
    fontWeight: '500',
    fontSize: customTheme.fontSizes.size_12,
    fontFamily: customTheme.fontFamily.robotoRegular,
  },
  'small-600': {
    fontWeight: '600',
    fontSize: customTheme.fontSizes.size_12,
    fontFamily: customTheme.fontFamily.robotoMedium,
  },
  'small-700': {
    fontWeight: '700',
    fontSize: customTheme.fontSizes.size_12,
    fontFamily: customTheme.fontFamily.robotoBold,
  },
  'small-x': {
    fontSize: customTheme.fontSizes.size_14,
    fontFamily: customTheme.fontFamily.robotoRegular,
  },
  'small-x-500': {
    fontWeight: '500',
    fontSize: customTheme.fontSizes.size_14,
    fontFamily: customTheme.fontFamily.robotoMedium,
  },
  'small-x-600': {
    fontWeight: '600',
    fontSize: customTheme.fontSizes.size_14,
    fontFamily: customTheme.fontFamily.robotoRegular,
  },
  medium: {
    fontFamily: customTheme.fontFamily.robotoRegular,
    fontSize: customTheme.fontSizes.size_16,
  },
  'medium-500': {
    fontFamily: customTheme.fontFamily.robotoRegular,
    fontSize: customTheme.fontSizes.size_16,
    fontWeight: '500',
    color: customTheme.colors.light,
  },
  'medium-600': {
    fontWeight: '600',
    fontSize: customTheme.fontSizes.size_16,
    fontFamily: customTheme.fontFamily.robotoMedium,
  },
  'medium-700': {
    fontWeight: '700',
    fontSize: customTheme.fontSizes.size_16,
    fontFamily: customTheme.fontFamily.robotoBold,

  },
  'medium-x-400': {
    fontWeight: '400',
    fontSize: customTheme.fontSizes.size_17,
    fontFamily: customTheme.fontFamily.robotoRegular,
  },
  'medium-xl-600': {
    fontWeight: '600',
    fontSize: customTheme.fontSizes.size_18,
    fontFamily: customTheme.fontFamily.robotoRegular,
  },
  'large-x-500': {
    fontWeight: '500',
    fontSize: customTheme.fontSizes.size_20,
    fontFamily: customTheme.fontFamily.robotoRegular,
  },
  'large-x-600': {
    fontWeight: '600',
    fontSize: customTheme.fontSizes.size_20,
    fontFamily: customTheme.fontFamily.robotoRegular,
  },
  'large-x-700': {
    fontWeight: '700',
    fontSize: customTheme.fontSizes.size_20,
    fontFamily: customTheme.fontFamily.robotoRegular,
  },
  'large-xl-600': {
    fontWeight: '600',
    fontSize: customTheme.fontSizes.size_22,
    fontFamily: customTheme.fontFamily.robotoRegular,
  },
  'large-3xl-400': {
    fontWeight: '400',
    fontSize: customTheme.fontSizes.size_24,
    fontFamily: customTheme.fontFamily.robotoRegular,
  },
  'large-3xl-700': {
    fontWeight: '700',
    fontSize: customTheme.fontSizes.size_24,
    fontFamily: customTheme.fontFamily.robotoBold,
  },
  'regular-400': {
    fontWeight: '400',
    fontFamily: customTheme.fontFamily.robotoRegular,
  },
  'regular-500': {
    fontWeight: '500',
    fontFamily: customTheme.fontFamily.robotoRegular,
  },
  'regular-700': {
    fontWeight: '700',
    fontFamily: customTheme.fontFamily.robotoRegular,
  },
  'header-400': {
    fontWeight: '400',
    fontSize: customTheme.fontSizes.size_32,
    fontFamily: customTheme.fontFamily.robotoRegular,
  },
  'header-bold': {
    fontWeight: 'bold',
    fontSize: customTheme.fontSizes.size_32,
    fontFamily: customTheme.fontFamily.robotoBold,
    lineheight: 40,
  },
  'input-label': {
    opacity: 0.6,
    marginBottom: customTheme.spacings.spacing_16,
    textTransform: 'uppercase',
    fontSize: customTheme.fontSizes.size_12,
    color: customTheme.colors.light,
    fontWeight: '700',
    fontFamily: customTheme.fontFamily.robotoBold,
  },
  'link-text': {
    color: customTheme.colors.blue10,
    fontSize: customTheme.fontSizes.size_12,
    fontFamily: customTheme.fontFamily.robotoBold,
    fontWeight: '700',
    textTransform: 'uppercase',
    textDecorationLine: 'underline',
  },
  // need this to fix searchinput issue in Picker component in SelectionDropdown File.
  text70: {
    fontFamily: customTheme.fontFamily.robotoRegular,
    fontSize: customTheme.fontSizes.size_16,
    fontWeight: '400',
  },
  'text-error': {
    fontFamily: customTheme.fontFamily.robotoRegular,
    fontSize: customTheme.fontSizes.size_12,
    color: customTheme.colors.red10,
  }
});
