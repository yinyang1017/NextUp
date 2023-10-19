import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Text } from 'react-native-ui-lib';
import { hp, wp } from '../../utils/responsive';
import { customTheme } from '../../constants';

const PracticeScheduleItem = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={onPress}>
      <Image
        style={styles.practiceImage}
        source={require('../../assets/rectangle-copy.png')}
        resizeMode="cover"
      />
      <Text medium-600 style={styles.title}>
        21 August 2022,13:13
      </Text>
      <Text small-x-500 style={styles.description}>
        #practice #mupractice #basketballpractice
      </Text>
    </TouchableOpacity>
  );
};

export default PracticeScheduleItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: customTheme.colors.gray_500,
    borderRadius: wp(2),
    padding: wp(2),
  },
  practiceImage: { height: hp(12.5), width: '100%' },
  title: { marginTop: hp(2) },
  description: { color: customTheme.colors.light + '50', marginTop: hp(1) },
});
