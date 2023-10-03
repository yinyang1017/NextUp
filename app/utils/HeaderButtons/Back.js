import React, { memo } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { wp } from '../responsive';
import { Colors } from '../../constants';
import { FontFamily, FontSize } from '../../views/GlobalStyles';

const Back = ({ onPress, containerStyle = {}, title = '' }) => (
  <View style={[styles.wrapper, containerStyle]}>
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.container}
      onPress={onPress}>
      <Image
        source={require('../../assets/leftArrow1.png')}
        style={styles.backImage}
      />
    </TouchableOpacity>
    {!!title && <Text style={styles.title}>{title}</Text>}
  </View>
);

export default memo(Back);

const styles = StyleSheet.create({
  wrapper: { flexDirection: 'row', alignItems: 'center' },
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
  title: {
    marginLeft: wp(3),
    color: Colors.light,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.bodyLargeBold_size,
  },
});
