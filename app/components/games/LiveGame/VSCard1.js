import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, Image } from 'react-native-ui-lib';
import { Colors, customTheme } from '../../../constants';
import { FontSize } from '../../../views/GlobalStyles';
import FastImage from 'react-native-fast-image';
import { hp, wp } from '../../../utils/responsive';
function TeamCard({ score, name, logoImg }) {
  return (
    <View style={[styles.verticalRow, styles.gap10]}>
      <View style={styles.eventItemTeamContainer}>
        <View style={styles.eventItemTeamInnerContainer}>
          <FastImage
            source={logoImg}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      </View>
      <Text style={styles.teamName}>{name}</Text>
      <Text style={styles.teamScore}>{score}</Text>
    </View>
  );
}
export default function VSCard1({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.horizentalRow}>
        <View style={styles.sideItem}>
          <TeamCard
            name="Chicago Bulls"
            score="22-4-0"
            logoImg={require('../../../assets/chicago-bulls-logo3.png')}
          />
        </View>
        <View style={styles.centerItem}>
          <Image
            style={styles.vsImage}
            resizeMode="cover"
            source={require('../../../assets/mask-group.png')}
          />
        </View>
        <View style={styles.sideItem}>
          <TeamCard
            name="Chicago Bulls"
            score="22-4-0"
            logoImg={require('../../../assets/chicago-bulls-logo3.png')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: hp(1),
  },
  verticalRow: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  horizentalRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  gap10: {
    gap: 10,
  },
  teamName: {
    color: Colors.light,
    fontSize: FontSize.size_mini,
    fontWeight: '600',
  },
  teamScore: {
    color: Colors.light,
    fontSize: FontSize.bodyMediumSemibold_size,
  },
  centerItem: {
    // width: '20%',
  },
  sideItem: {
    width: '40%',
    alignItems: 'center',
  },
  vsImage: {
    height: 60,
    transform: [{ translateY: hp(-1) }],
  },
  title: {
    color: Colors.white_08,
    fontSize: FontSize.size_smi,
  },
  image: { height: '80%', width: '70%' },
  eventItemTeamContainer: {
    borderWidth: 3,
    borderColor: Colors.white_08,
    borderRadius: wp(10),
    height: 60,
    width: 60,
  },
  eventItemTeamInnerContainer: {
    borderRadius: wp(10),
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
});
