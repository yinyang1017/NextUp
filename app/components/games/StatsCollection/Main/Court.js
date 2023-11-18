import React, { useState } from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import { hp, wp } from '../../../../utils/responsive';
import { Text, View } from 'react-native-ui-lib';
import { customTheme } from '../../../../constants';
function Position({ x, y, children }) {
  const style = { transform: [{ translateX: x }, { translateY: y }] };
  return <View style={[style, { position: 'absolute' }]}>{children}</View>;
}
function Cursor() {
  return (
    <Text style={[{ color: customTheme.colors.yellow30 }, styles.scoreIcon]}>
      +
    </Text>
  );
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
export default function Court({ data = [], onPress }) {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const handlePress = event => {
    const x = event.nativeEvent.locationX;
    const y = event.nativeEvent.locationY;
    setCursor({ x: (200 * x) / wp(90) - 100, y: 100 - (y * 100) / wp(60) });

    onPress({ x: (200 * x) / wp(90) - 100, y: 100 - (y * 100) / wp(60) });
    // Do something with the touch coordinates
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <ImageBackground
        source={require('../../../../assets/half_court.png')}
        style={styles.iamgeContainer}
        resizeMode="contain">
        {cursor && (
          <Position
            x={(wp(45) * cursor.x) / 100}
            y={wp(1) - (wp(60) * cursor.y) / 100}>
            <Cursor />
          </Position>
        )}
        {data
          .filter(el => ['made', 'missed'].includes(el.type))
          .map((el, index) => (
            <Position
              key={index}
              x={(wp(44) * el.x) / 100}
              y={-(wp(56) * el.y) / 100}>
              {el.type === 'made' ? <BlueCircle /> : <RedCircle />}
            </Position>
          ))}
      </ImageBackground>
    </TouchableWithoutFeedback>
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
