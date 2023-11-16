import React from 'react';
import { ViewContainer } from '../../../components/common/ViewConatiner';
import StatsHeader from './StatsHeader';
import { customTheme } from '../../../constants';
import { hp, wp } from '../../../utils/responsive';
import { FontSize } from '../../GlobalStyles';
import { StyleSheet } from 'react-native';
import { ClickableBox } from '../../../components/games/StatsCollection/LineUp/box';
import { Button, Text, View } from 'react-native-ui-lib';
import { SeletablePlayer } from '../../../components/games/StatsCollection/LineUp/playitems';
import { useNavigation } from '@react-navigation/native';
import { SubstitutesArea } from '../../../components/games/StatsCollection/Substitute/sections';
const activePlayers = [
  {
    name: 'Jacob Jones',
    image: require('../../../assets/image-9.png'),
    timeout: 0,
  },
  {
    name: 'Guy Hawkins',
    image: require('../../../assets/image-9.png'),
    timeout: 5,
  },
  {
    name: 'Albert Flores',
    image: require('../../../assets/ellipse-7578.png'),
    timeout: 0,
  },
  {
    name: 'Albert Flores',
    image: require('../../../assets/image-9.png'),
    timeout: 21,
  },
  {
    name: 'Albert Flores',
    image: require('../../../assets/image-9.png'),
    timeout: 0,
  },
];
const substitutes = [
  {
    name: 'Jacob Jones',
    image: require('../../../assets/image-9.png'),
    timeout: 0,
  },
  {
    name: 'Guy Hawkins',
    image: require('../../../assets/image-9.png'),
    timeout: 5,
  },
  {
    name: 'Albert Flores',
    image: require('../../../assets/ellipse-7578.png'),
    timeout: 0,
  },
  {
    name: 'Albert Flores',
    image: require('../../../assets/image-9.png'),
    timeout: 21,
  },
  {
    name: 'Albert Flores',
    image: require('../../../assets/image-9.png'),
    timeout: 0,
  },
  {
    name: 'Guy Hawkins',
    image: require('../../../assets/image-9.png'),
    timeout: 5,
  },
  {
    name: 'Albert Flores',
    image: require('../../../assets/ellipse-7578.png'),
    timeout: 0,
  },
  {
    name: 'Albert Flores',
    image: require('../../../assets/image-9.png'),
    timeout: 21,
  },
  {
    name: 'Albert Flores',
    image: require('../../../assets/image-9.png'),
    timeout: 0,
  },
  {
    name: 'Albert Flores',
    image: require('../../../assets/image-9.png'),
    timeout: 0,
  },
];
export default function Substitute() {
  const navigation = useNavigation();
  return (
    <ViewContainer hideStatusBar isView={false}>
      <StatsHeader />
      <View style={styles.container}>
        <View style={styles.topSection}>
          <View style={styles.leftBar}>
            <Text style={styles.subtitle}>Active Lineup</Text>
            <View style={styles.activePlayerBox}>
              {activePlayers.map((el, index) => (
                <SeletablePlayer
                  key={index}
                  selected
                  name={el.name}
                  timeout={el.timeout}
                  image={el.image}
                  width={hp(7)}
                  imageWidth={hp(7)}
                />
              ))}
            </View>
          </View>
          <View style={styles.rightBar}>
            <View style={styles.boxList}>
              <Text style={styles.subtitle}>Select Substitute</Text>
              <SubstitutesArea players={substitutes} />
            </View>
          </View>
        </View>
        <View style={styles.bottomSection}>
          <Button
            label="Substitute"
            style={{
              alignSelf: 'center',
              paddingVertical: wp(3),
              paddingHorizontal: hp(10),
            }}
          />
          <Button
            label="Cancel"
            style={{ alignSelf: 'flex-end', borderRadius: wp(1) }}
            backgroundColor={customTheme.colors.gray_300}
            size="small"
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>
    </ViewContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: customTheme.colors.background,
  },
  topSection: {
    flexDirection: 'row',
  },
  leftBar: {
    width: '40%',

    paddingHorizontal: hp(2),
  },
  rightBar: {
    width: '60%',
    paddingHorizontal: hp(2),
    gap: wp(1),
  },
  subtitle: {
    height: wp(10),
    paddingVertical: wp(1),
    textAlignVertical: 'bottom',
    fontSize: FontSize.bodyLargeBold_size,
    color: customTheme.colors.light,
  },
  activePlayerBox: {
    marginVertical: wp(4),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: hp(3),
    rowGap: wp(2),
    borderRightColor: customTheme.colors.overlayWhite,
    borderRightWidth: 1,
    height: wp(40),
    width: '100%',
  },
  boxList: {
    gap: hp(1),
  },
  bottomSection: {
    paddingHorizontal: hp(2),
  },
});
