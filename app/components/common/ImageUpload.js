import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import {wp} from '../../utils/responsive';
import FastImage from 'react-native-fast-image';
import {launchImageLibrary} from 'react-native-image-picker';

const ImageUpload = ({size = wp(24), source = {}, containerStyle = {}}) => {
  const baseContainerStyle = {
    height: size,
    width: size,
    borderRadius: size / 2,
  };

  const onPressPickImageHandler = () => {
    launchImageLibrary();
  };

  return (
    <TouchableOpacity
      style={[baseContainerStyle, styles.container, containerStyle]}
      onPress={onPressPickImageHandler}
      activeOpacity={0.7}>
      <Image
        source={require('../../assets/images/CameraIcon.png')}
        style={styles.addImage}
        resizeMode="contain"
      />
      <FastImage source={source} style={styles.image} />
    </TouchableOpacity>
  );
};

export default memo(ImageUpload);

const styles = StyleSheet.create({
  container: {overflow: 'hidden'},
  image: {height: '100%', width: '100%'},
  addImage: {
    height: wp(5),
    width: wp(5),
    position: 'absolute',
    bottom: 10,
    right: 0,
    left: wp(9.5),
    tintColor: 'white',
    zIndex: 11,
  },
});
