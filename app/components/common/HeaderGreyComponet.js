import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { wp } from '../../utils/responsive';
import { MyColors } from '../../constants/colors';
import { Color } from '../../views/GlobalStyles';
import { customTheme } from '../../constants';

export const HeaderGreyComponent = ({
  title = '',
  rightContent = () => {},
  containerStyle = {},
  titleStyle = {},
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      {rightContent?.()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Color.gray_500,
    borderRadius: wp(2),
  },
  title: {
    fontSize: customTheme.fontSizes.size_16,
    color: MyColors.light,
    fontWeight: '600',
    paddingVertical: wp(2),
    paddingLeft: wp(2),
  },
});
