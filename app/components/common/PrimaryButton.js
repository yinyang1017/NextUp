import { Pressable, StyleSheet, Text } from 'react-native';
import React from 'react';
import { hp, wp } from '../../utils/responsive';
import { MyColors } from '../../constants/colors';
import { FontFamily, FontSize } from '../../views/GlobalStyles';

const PrimaryButton = ({ title, titleStyle = {}, ...props }) => {
  return (
    <Pressable
      {...props}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.pressed,
        props.style,
      ]}>
      <Text style={[styles.title, props.titleStyle]}>{title}</Text>
    </Pressable>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    paddingVertical: hp(2),
    backgroundColor: MyColors.btnBg,
    borderRadius: wp(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: FontFamily.robotoRegular,
    color: MyColors.light,
    fontSize: FontSize.size_mini,
    fontWeight: '700',
  },
  pressed: { opacity: 0.7 },
});
