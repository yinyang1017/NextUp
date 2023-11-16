import React from 'react';
import { StyleSheet } from 'react-native';
import { Image, View, Text } from 'react-native-ui-lib';
import Avatar from '../../common/Avatar.1';
import { hp } from '../../../utils/responsive';
import { FontSize } from '../../../views/GlobalStyles';
import { customTheme } from '../../../constants';
export function Team({
  logo,
  score,
  title,
  subtitle,
  reverse = false,
  scoreColor,
}) {
  return (
    <View
      style={{
        flexDirection: !reverse ? 'row' : 'row-reverse',
        gap: hp(1),
        paddingHorizontal: hp(1),
      }}>
      <Text style={[styles.scoreText, { color: scoreColor }]}>{score}</Text>
      <Avatar imageUrl={logo} size={hp(5)} borderRadius={0} />
      <View>
        {title && <Text style={styles.teamText}>{title}</Text>}
        {subtitle && (
          <Text style={[{ color: scoreColor }, styles.locationText]}>
            {subtitle}
          </Text>
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  scoreText: {
    fontSize: FontSize.size_6xl,
    fontWeight: '600',
  },
  teamText: {
    fontSize: FontSize.bodyMediumSemibold_size,
    color: customTheme.colors.light,
  },
  locationText: {
    fontSize: FontSize.size_xs,
  },
});

export function PlayerAvatar({
  image,
  alt,
  size,
  color = customTheme.colors.red30,
}) {
  return image ? (
    <Image
      source={image}
      style={{ height: size, width: size }}
      borderRadius={size / 2}
    />
  ) : (
    <View
      style={{
        width: size,
        borderRadius: size / 2,
        height: size,
        backgroundColor: color,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{ color: customTheme.colors.light, fontSize: size / 2 }}>
        {alt}
      </Text>
    </View>
  );
}
