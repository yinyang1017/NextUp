import { MyColors } from './colors';
import { Layout } from './dimensions';
import { Fonts } from './fonts';
import * as Base from './constant';
import CommonStyles from './styles';
import { customTheme } from './theme';

import Container from '../components/common/container';
import SafeContainer from '../components/common/safeContainer';
const Colors = { ...MyColors }
export {
  Layout,
  Colors,
  Fonts,
  Base,
  CommonStyles,
  Container,
  SafeContainer,
  customTheme
};
