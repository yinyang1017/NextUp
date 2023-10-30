import { Image, StyleSheet, Text, View } from 'react-native';
import React, { memo } from 'react';
import { Colors } from 'react-native-ui-lib';
import { Color, Padding } from '../../views/GlobalStyles';
import { wp } from '../../utils/responsive';
import { customTheme } from '../../constants';
import FastImage from 'react-native-fast-image';
import { appImages } from '../../constants/appImages';
import { SvgCssUri } from 'react-native-svg';

const TeamItem = ({
  imageSource = {},
  name = '',
  isActive = false,
  containerStyle = {},
  imageContainerStyle= {},
}) => {
  const isImageSVG = imageSource?.uri?.split('.').slice(-1)[0] === 'svg';

  return (
    <View
      style={[
        styles.container,
        isActive && styles.containerActiveBottomBorder,
        containerStyle,
      ]}>
      <View style={[styles.imageContainer, imageContainerStyle]}>
        {isImageSVG ? (
          <SvgCssUri
            width="88%"
            height="88%"
            uri={imageSource.uri}
            fallback={
              <Image
                source={appImages.defaultAvatarImage}
                style={styles.image}
              />
            }
          />
        ) : (
          <FastImage
            style={styles.image}
            source={
              imageSource.uri
                ? { uri: imageSource.uri, priority: 'high' }
                : imageSource
            }
            defaultSource={appImages.defaultAvatarImage}
          />
        )}
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
  imageContainer: {
    height: wp(22),
    width: wp(22),
    borderRadius: wp(12),
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
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
