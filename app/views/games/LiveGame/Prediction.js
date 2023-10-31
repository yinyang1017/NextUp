import React from 'react';
import { StyleSheet } from 'react-native';
import { Image, Text, View } from 'react-native-ui-lib';
import { hp, wp } from '../../../utils/responsive';
import { Colors } from '../../../constants';
import PieChart from '../../../components/games/LiveGame/PieChart';
import { MyColors } from '../../../constants/colors';
import { FontSize } from '../../GlobalStyles';
function TeamItem({ score, image }) {
  return (
    <View style={styles.teamItem}>
      <Text style={styles.whiteText}>{score}</Text>
      <View style={styles.imageWrapper}>
        <Image source={image} style={styles.image} />
      </View>
    </View>
  );
}
export default function Prediction() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Prediction</Text>
      <PieChart
        score2={8}
        score1={2}
        outerRadius={83}
        innerRadius={80}
        color1={Colors.darkRed}
        color2={Colors.darkYellow}>
        <View style={styles.horizontalRow}>
          <Text style={styles.whiteText}>BULLS</Text>
          <Text style={styles.grayText}>LKR</Text>
        </View>
      </PieChart>
      <View style={[styles.horizontalRow, styles.stretch]}>
        <TeamItem
          image={require('../../../assets/chicago-bulls-logo3.png')}
          score="80%"
        />

        <TeamItem
          image={require('../../../assets/chicago-bulls-logo3.png')}
          score="80%"
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 'auto',
    marginVertical: hp(2),
    paddingHorizontal: wp(2),
    paddingVertical: hp(3),
    backgroundColor: Colors.playerCategoryBg,
    borderRadius: wp(2),
    alignItems: 'center',
  },
  title: {
    color: MyColors.light,
    fontSize: FontSize.size_mini,
    marginBottom: hp(2),
  },
  whiteText: {
    color: MyColors.light,
    fontSize: FontSize.size_mini,
  },
  grayText: {
    color: MyColors.overlayWhite,
    fontSize: FontSize.size_mini,
  },
  horizontalRow: {
    flexDirection: 'row',
    gap: wp(2),
  },
  stretch: {
    width: '100%',
    justifyContent: 'space-around',
  },
  image: {
    width: '70%',
    height: '70%',
  },
  imageWrapper: {
    height: 50,
    width: 50,
    alignItems: 'center',
    borderRadius: 25,
    justifyContent: 'center',
    backgroundColor: Colors.light,
  },
  teamItem: {
    alignItems: 'center',
    gap: hp(1),
  },
});
