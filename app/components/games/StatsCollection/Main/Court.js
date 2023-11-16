import React from 'react';
import { Image, ImageBackground, StyleSheet } from 'react-native';
import { hp, wp } from '../../../../utils/responsive';
import { Text, View } from 'react-native-ui-lib';
import { customTheme } from '../../../../constants';
function Position({ x, y, children }) {
  const style = { transform: [{ translateX: x }, { translateY: y }] };
  return <View style={[style, { position: 'absolute' }]}>{children}</View>;
}
function BlueCircle() {
  return (
    <Text style={[{ color: customTheme.colors.green30 }, styles.scoreIcon]}>
      O
    </Text>
  );
}
function RedCircle() {
  return <Text style={{ color: customTheme.colors.red20 }}>X</Text>;
}
export default function Court({ data = [] }) {
  return (
    <ImageBackground
      source={require('../../../../assets/half_court.png')}
      style={styles.iamgeContainer}
      resizeMode="contain">
      {data.map((el, index) => (
        <Position
          key={index}
          x={(wp(44) * el.x) / 100}
          y={-(wp(56) * el.y) / 100}>
          {el.type === 'scored' ? <BlueCircle /> : <RedCircle />}
        </Position>
      ))}
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  scoreIcon: {
    fontSize: 15,
  },
  iamgeContainer: {
    width: wp(90),
    height: wp(60),
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
