import React from 'react';
import { ScrollView, StyleSheet, ImageBackground } from 'react-native';
import { Button, Image, Text, View } from 'react-native-ui-lib';
import backImg from '../../../assets/images/coatbg.png';
import { hp, wp } from '../../../utils/responsive';
import { FontSize } from '../../GlobalStyles';
import { Colors } from '../../../constants';
function Player({ name, imageUrl, color }) {
  return (
    <View style={styles.playerContainer}>
      <Image
        source={imageUrl}
        style={styles.playerImage}
        resizeMode="contain"
      />
      <View style={[styles.playerName, { backgroundColor: color }]}>
        <Text style={styles.playerNameText}>{name}</Text>
      </View>
    </View>
  );
}
export default function LineUp() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.field}>
        <ImageBackground
          style={{ height: wp(120) }}
          source={backImg}
          resizeMode="contain">
          <Player
            name="Anthony Davis"
            imageUrl={require('../../../assets/image-9.png')}
            color={Colors.violet}
          />
          <Player
            name="Anthony Davis"
            imageUrl={require('../../../assets/image-9.png')}
            color={Colors.btnRed}
          />
        </ImageBackground>
      </View>
      <Button label="Edit Lineup" />
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
    fontSize: FontSize.bodyMediumSemibold_size,
  },
  playerName: {
    borderRadius: wp(3),
    paddingHorizontal: wp(3),
  },
  playerImage: {
    width: wp(18),
    height: wp(12),
  },
});
