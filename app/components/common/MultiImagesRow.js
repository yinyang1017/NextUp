import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { wp } from '../../utils/responsive';
import { customTheme } from '../../constants';

const MultiImagesRow = ({
  images = [],
  imageSize = wp(10),
  borderColor = customTheme.colors.playerCategoryBg,
}) => {
  return (
    <View style={styles.container}>
      {images.map((item, index) => (
        <Image
          key={index}
          source={require('../../assets/avatar-without-online-badge.png')}
          style={styles.avatar(index, imageSize, borderColor)}
        />
      ))}
    </View>
  );
};

export default MultiImagesRow;

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center' },
  avatar: (index, imageSize, borderColor) => ({
    height: imageSize,
    width: imageSize,
    borderWidth: 2,
    borderRadius: imageSize / 2,
    borderColor: borderColor,
    marginLeft: index ? -wp(2) : 0,
  }),
});
