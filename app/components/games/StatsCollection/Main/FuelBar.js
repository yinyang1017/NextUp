import React from 'react';
import { StyleSheet } from 'react-native';
import { ProgressBar, Text, View } from 'react-native-ui-lib';
import { Fonts, customTheme } from '../../../../constants';
import { hp, wp } from '../../../../utils/responsive';
import { FontSize } from '../../../../views/GlobalStyles';
const MAX_FUEL = 4;
function Score({ score, isReversed }) {
  return (
    <View
      style={[
        { alignItems: 'center', flexDirection: 'row', gap: hp(1) },
        isReversed && styles.reverseFlow,
      ]}>
      <Text style={styles.scoreText}>{score}</Text>
      <ProgressBar
        style={[styles.progress, isReversed && styles.reverse]}
        fullWidth
        progressColor={customTheme.colors.yellow20}
        progress={(100 * score) / MAX_FUEL}
      />
    </View>
  );
}
function FuelText() {
  return <Text style={styles.fuelText}>Fuel</Text>;
}
export default function FuelBar({ score1, score2, time }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: wp(10),
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      <FuelText />
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: hp(1) }}>
        <Score score={0} />
        <Text style={styles.timeText}>{time}</Text>
        <Score score={1} isReversed />
      </View>
      <FuelText />
    </View>
  );
}
const styles = StyleSheet.create({
  progress: {
    width: wp(30),
    backgroundColor: customTheme.colors.foulBarColor,
  },
  reverse: { transform: [{ rotateY: '180deg' }] },
  reverseFlow: {
    flexDirection: 'row-reverse',
  },
  scoreText: {
    color: customTheme.colors.light,
  },
  timeText: {
    color: customTheme.colors.light,
    fontSize: FontSize.bodyMediumSemibold_size,
  },
  fuelText: {
    backgroundColor: customTheme.colors.red10,
    paddingHorizontal: 3,
    borderRadius: 3,
    color: customTheme.colors.light,
  },
});
