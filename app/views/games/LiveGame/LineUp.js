import React from 'react';
import { ScrollView, StyleSheet, ImageBackground } from 'react-native';
import { Button, Image, Text, View } from 'react-native-ui-lib';
import _ from 'lodash';
import backImg from '../../../assets/images/coatbg.png';
import { hp, wp } from '../../../utils/responsive';
import { FontSize } from '../../GlobalStyles';
import { Colors } from '../../../constants';
import { useNavigation } from '@react-navigation/native';
function Position({ x, y, children }) {
  const style = { transform: [{ translateX: x }, { translateY: y }] };
  return <View style={[style, styles.positionContainer]}>{children}</View>;
}
function Player({ name, imageUrl, color }) {
  return (
    <View style={styles.playerContainer}>
      <Image
        source={imageUrl}
        style={styles.playerImage}
        resizeMode="contain"
      />
      <View style={[styles.playerName, { width: name.length * 10 }]}>
        <Text style={[styles.playerNameText, { backgroundColor: color }]}>
          {name}
        </Text>
      </View>
    </View>
  );
}

/** Basketball Court
 *
 */

export default function LineUp() {
  const players = [
    {
      id: 0,
      isHome: true,
      name: 'Malik Monk',
      image: require('../../../assets/image-9.png'),
      x: -60,
      y: -100,
    },
    {
      id: 1,
      isHome: true,
      name: 'Russel Westbrook',
      image: require('../../../assets/image-9.png'),
      x: 60,
      y: -100,
    },
    {
      id: 2,
      isHome: true,
      name: 'Anthony Davis',
      image: require('../../../assets/image-9.png'),
      x: -60,
      y: -60,
    },
    {
      id: 3,
      isHome: true,
      name: 'Anthony Davis',
      image: require('../../../assets/image-9.png'),
      x: 60,
      y: -60,
    },
    {
      id: 4,
      isHome: true,
      name: 'Charmelo Anthony',
      image: require('../../../assets/image-9.png'),
      x: 0,
      y: -20,
    },
    {
      id: 5,
      isHome: false,
      name: 'Zach Lavine',
      image: require('../../../assets/image-9.png'),
      x: -60,
      y: 100,
    },
    {
      id: 6,
      isHome: false,
      name: 'Patrick Williams',
      image: require('../../../assets/image-9.png'),
      x: 60,
      y: 100,
    },
    {
      id: 7,
      isHome: false,
      name: 'Demar Deronzan',
      image: require('../../../assets/image-9.png'),
      x: -60,
      y: 60,
    },
    {
      id: 8,
      isHome: false,
      name: 'Alex Caruso',
      image: require('../../../assets/image-9.png'),
      x: 60,
      y: 60,
    },
    {
      id: 9,
      isHome: false,
      name: 'Nikola Vucevic',
      image: require('../../../assets/image-9.png'),
      x: 0,
      y: 20,
    },
  ];
  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.field}>
        <ImageBackground
          style={{ height: wp(120) }}
          source={backImg}
          resizeMode="contain">
          {_.map(players, player => (
            <Position
              key={player.id}
              x={(player.x / 100) * wp(30) + wp(38)}
              y={(player.y / 100 + 1) * wp(50)}>
              <Player
                name={player.name}
                imageUrl={player.image}
                color={player.isHome ? Colors.violet : Colors.btnRed}
              />
            </Position>
          ))}
        </ImageBackground>
      </View>
      <Button
        label="Edit Lineup"
        onPress={() => navigation.navigate('Stats', { screen: 'Lineup' })}
      />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
  },
  field: {
    paddingVertical: hp(2),
  },
  playerContainer: {
    alignItems: 'center',
  },
  playerNameText: {
    color: Colors.light,
    borderRadius: wp(3),
    paddingHorizontal: wp(3),
    fontSize: FontSize.size_sm_3,
  },
  playerName: {
    backgroundColor: Colors.transparent,
    position: 'absolute',
    transform: [{ translateY: wp(10) }],
    width: 'auto',
    alignItems: 'center',
  },
  playerImage: {
    width: wp(15),
    height: wp(10),
  },
  positionContainer: {
    position: 'absolute',
  },
});
