import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { wp } from '../responsive';

const Back = ({ onPress, containerStyle = {} }) => (
  <TouchableOpacity
    activeOpacity={0.5}
    style={[styles.container, containerStyle]}
    onPress={onPress}>
    <Image
      source={require('../../assets/leftArrow1.png')}
      style={styles.backImage}
    />
  </TouchableOpacity>
);

export default Back;

const styles = StyleSheet.create({
  container: {
    height: wp(8),
    width: wp(8),
    borderRadius: wp(1),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#373A44',
  },
  backImage: { height: wp(3.5), width: wp(3.5) },
});
