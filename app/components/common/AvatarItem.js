import {StyleSheet, View} from 'react-native';
import React from 'react';
import {hp, wp} from '../../utils/responsive';
import {Text} from 'react-native-ui-lib';
import {Grayscale} from 'react-native-color-matrix-image-filters';
import FastImage from 'react-native-fast-image';
import {customTheme} from '../../constants';

const AvatarItem = ({
  size = wp(12.5),
  image = require('../../assets/avatar-without-online-badge.png'),
  containerStyle = {},
  title = '',
  titleStyle = {},
  subTitle = '',
  subTitleStyle = {},
  isDisable = false,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {isDisable ? (
        <Grayscale>
          <FastImage source={image} style={styles.image(size)} />
        </Grayscale>
      ) : (
        <FastImage source={image} style={styles.image(size)} />
      )}
      <Text small-600 style={[titleStyle, isDisable && styles.disabledTitle]}>
        {title}
      </Text>
      {!!subTitle && (
        <Text
          medium-500
          style={[subTitleStyle, isDisable && styles.disabledSubTitle]}>
          {subTitle}
        </Text>
      )}
    </View>
  );
};

export default AvatarItem;

const styles = StyleSheet.create({
  container: {gap: hp(0.8), alignItems: 'center'},
  disabledTitle: {color: customTheme.colors.light + '70'},
  disabledSubTitle: {color: customTheme.colors.light + '40'},
  image: size => ({height: size, width: size, borderRadius: size / 2}),
});
