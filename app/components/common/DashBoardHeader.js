import * as React from 'react';
import { View, Avatar, Button } from 'react-native-ui-lib';
import { StyleSheet, Text, Image } from 'react-native';
import {
  Padding,
  FontSize,
  FontFamily,
  Color,
  Border,
} from '../../views/GlobalStyles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faBell } from '@fortawesome/free-solid-svg-icons';

import FastImage from 'react-native-fast-image';
import { customTheme } from '../../constants';
import { RoundButtons } from './button';
export const DashBoardHeader = ({ imgSrc = null, name = null, onClick }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Avatar
          containerStyle={styles.avatar}
          source={{ uri: imgSrc }}
          size={61}
          onPress={onClick}
        />
        <View style={styles.infoContainer}>
          <Text style={[styles.welcomeMsg]}>
            <Text style={styles.welcomeText}>{'Coach '}</Text>
          </Text>
          <Text style={[styles.vaibhavChibbar1, styles.vamTypo1]}>
            {name ?? 'Unnamed User'}
          </Text>
        </View>
      </View>
      <View style={styles.trophyParent}>
        <Button
          round
          style={{ width: 44, height: 44, margin: 10 }}
          size={'large'}
          backgroundColor={customTheme.colors.overlay2}>
          <FontAwesomeIcon
            icon={faBell}
            size={20}
            // style={styles.trophyIcon}
            color={customTheme.colors.light}
          />
        </Button>
        <Button
          round
          style={{ width: 44, height: 44 }}
          size={'large'}
          backgroundColor={customTheme.colors.overlay2}>
          <FontAwesomeIcon
            icon={faSearch}
            size={20}
            // style={styles.magnifyingglassIcon}
            color={customTheme.colors.light}
          />
        </Button>
      </View>
    </View>
  );
};
export default DashBoardHeader;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatar: {
    width: 61,
    height: 61,
  },
  infoContainer: {
    width: 'auto',
    marginLeft: 20,
    height: 38,
  },
  welcomeMsg: {
    color: Color.gray_200,
    textAlign: 'left',
    lineHeight: 14,
    fontSize: FontSize.bodyMediumSemibold_size,
  },
  welcomeText: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: '500',
  },
  welcomeHand: {
    fontFamily: FontFamily.robotoLight,
    fontWeight: '300',
  },
  vaibhavChibbar1: {
    fontSize: FontSize.size_lg,
    marginTop: 2,
    color: Color.othersWhite,
    lineHeight: 22,
    textAlign: 'left',
  },

  vamTypo1: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: '600',
  },
  trophyParent: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  trophyIcon: {
    height: 50,
    width: 50,
  },
  magnifyingglassIcon: {
    // marginLeft: 10,
    height: 42,
  },
  iconLayout3: {
    width: 42,
    height: 42,
  },
});
