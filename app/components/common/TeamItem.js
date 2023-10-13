import { StyleSheet, Text, View } from 'react-native';
import React, { memo } from 'react';
import { Colors } from 'react-native-ui-lib';
import { Color, Padding } from '../../views/GlobalStyles';
import { wp } from '../../utils/responsive';
import { customTheme } from '../../constants';
import FastImage from 'react-native-fast-image';
import { appImages } from '../../constants/appImages';

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
        <FastImage
          style={styles.image}
          resizeMode="contain"
          source={
            imageSource.uri
              ? { uri: imageSource.uri, priority: 'high' }
              : imageSource
          }
          defaultSource={appImages.defaultAvatarImage}
        />
      </View>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

export default memo(TeamItem);

const styles = StyleSheet.create({
  container: { alignItems: 'center' },
  containerActiveBottomBorder: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.white,
  },
  imageContainer: { height: wp(22), width: wp(22) },
  image: { width: '100%', height: '100%' },
  name: {
    lineHeight: 14,
    fontSize: customTheme.fontSizes.size_14,
    fontFamily: customTheme.fontFamily.robotoRegular,
    color: Color.othersWhite,
    width: '100%',
    paddingVertical: Padding.p_8xs,
    textAlign: 'center',
  },
});
