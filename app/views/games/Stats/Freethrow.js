import React from 'react';
import { ViewContainer } from '../../../components/common/ViewConatiner';
import StatsHeader from './StatsHeader';
import { Text, View } from 'react-native-ui-lib';
import {
  Player,
  PlayerItem,
} from '../../../components/games/StatsCollection/Freethrow/players';
import { hp, wp } from '../../../utils/responsive';
import { StyleSheet } from 'react-native';
import Button from '../../../components/games/StatsCollection/Main/Button';
import { customTheme } from '../../../constants';
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
    timeout: 12,
  },
];
export default function Freethrow() {
  return (
    <ViewContainer hideStatusBar isView={false}>
      <StatsHeader />
      <View>
        <View style={{ height: wp(70), alignItems: 'center' }}>
          <Text
            style={{
              color: customTheme.colors.light,
              fontSize: 22,
              fontWeight: '600',
            }}>
            Who shooting the free throw?
          </Text>
          <View style={styles.playerBox}>
            {activePlayers.map((el, index) => (
              <PlayerItem
                selected={index === 3}
                image={el.image}
                width={hp(14)}
                name={el.name}
                imageWidth={hp(5)}
                timeout={el.timeout}
              />
            ))}
          </View>
        </View>
        <View
          style={{
            width: '10%',
            alignSelf: 'flex-end',
            marginHorizontal: hp(2),
          }}>
          <Button
            label={'Skip'}
            backgroundColor={customTheme.colors.gray_300}
          />
        </View>
      </View>
    </ViewContainer>
  );
}
const styles = StyleSheet.create({
  playerBox: {
    flexDirection: 'row',
  },
});
