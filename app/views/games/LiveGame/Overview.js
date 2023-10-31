import React from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, Text, View } from 'react-native-ui-lib';
import Prediction from './Prediction';
import { Colors } from '../../../constants';
import { FontSize } from '../../GlobalStyles';
import { hp, wp } from '../../../utils/responsive';
import GameStats from './GameStat';
export default function Overview() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Prediction />
      <Text style={styles.statement}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
        sollicitudin viverra ipsum nibh mi lacus. In mi neque risus elementum
        tempor nisl ultricies ultrices ut. Malesuada ultrices vel cursus
        sollicitudin ut nunc et lectus quis.
      </Text>
      <GameStats />
      <View style={styles.buttonWrapper}>
      <Button label="Start Stat Collection" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: wp(3) },
  statement: {
    color: Colors.light,
    lineHeight: 25,
    fontSize: FontSize.bodyMediumSemibold_size,
    marginBottom: hp(3),
  },
  buttonWrapper: {
    paddingVertical: hp(2)
  }
});
