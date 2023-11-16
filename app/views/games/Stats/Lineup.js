import React from 'react';
import { ViewContainer } from '../../../components/common/ViewConatiner';
import StatsHeader from './StatsHeader';
import { Button, Text, View } from 'react-native-ui-lib';
import { StyleSheet } from 'react-native';
import { customTheme } from '../../../constants';
import { FontSize } from '../../GlobalStyles';
import { hp, wp } from '../../../utils/responsive';
import Player from '../../../components/games/StatsCollection/LineUp/playitems';
import { ClickableBox } from '../../../components/games/StatsCollection/LineUp/box';
const players = [
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
    image: require('../../../assets/image-9.png'),
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
export default function Lineup() {
  return (
    <ViewContainer hideStatusBar isView={false}>
      <StatsHeader />
      <View style={styles.container}>
        <View style={styles.leftBar}>
          <Text style={styles.subtitle}>Active Lineup</Text>
          <View style={styles.activePlayerBox}>
            {players.map((el, index) => (
              <Player
                key={index}
                name={el.name}
                timeout={el.timeout}
                image={el.image}
                width={hp(5)}
                imageWidth={hp(5)}
              />
            ))}
          </View>
          <Button label="Substitue" />
        </View>
        <View style={styles.rightBar}>
          <View style={styles.boxList}>
            <Text style={styles.subtitle}>Select Substitute Line up</Text>
            <ClickableBox
              title={'Efficient Shooting Lineup'}
              players={players}
              isActive
            />
            <ClickableBox
              title={'Efficient Shooting Lineup'}
              players={players}
            />
          </View>
          <Button
            label="Skip"
            style={{ alignSelf: 'flex-end', borderRadius: wp(1) }}
            backgroundColor={customTheme.colors.gray_300}
            size="small"
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
    gap: hp(2),
    borderRightColor: customTheme.colors.overlayWhite,
    borderRightWidth: 1,
    height: wp(40),
  },
  boxList: {
    gap: hp(1),
  },
});
