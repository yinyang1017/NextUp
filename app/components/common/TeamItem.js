import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors, Image } from 'react-native-ui-lib';
import { Color, FontFamily, FontSize, Padding } from '../../views/GlobalStyles';
import { wp } from '../../utils/responsive';

const TeamItem = ({
  imageSource = {},
  name = '',
  isActive = false,
  containerStyle = {},
}) => {
  return (
    <View
      style={[
        styles.container,
        isActive && styles.containerActiveBottomBorder,
        containerStyle,
      ]}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} resizeMode="contain" source={imageSource} />
      </View>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

export default TeamItem;

const styles = StyleSheet.create({
  container: { alignItems: 'center' },
  containerActiveBottomBorder: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.white,
  },
  imageContainer: {
    height: wp(22),
    width: wp(22),
  },
  image: { width: '100%', height: '100%' },
  name: {
    lineHeight: 14,
    fontSize: FontSize.bodyMediumSemibold_size,
    fontFamily: FontFamily.robotoRegular,
    color: Color.othersWhite,
    width: '100%',
    paddingVertical: Padding.p_8xs,
    textAlign: 'center',
  },
});
