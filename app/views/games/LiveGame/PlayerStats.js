import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, Image } from 'react-native-ui-lib';
import { Colors } from '../../../constants';
import { FontSize } from '../../GlobalStyles';
import { hp } from '../../../utils/responsive';
import { AlternativeTable } from '../../../components/common/AlternativeTable';
import { times } from 'lodash';
import { MyColors } from '../../../constants/colors';
function SubTitle({ imageUrl, title }) {
  return (
    <View style={[styles.horizontalRow, styles.gap10, styles.p10]}>
      <View style={styles.imageWrapper}>
        <Image source={imageUrl} style={styles.image} />
      </View>
      <Text style={styles.header1}>{title}</Text>
    </View>
  );
}
const _data = [
  ['D.Green', 42, '5-10', '2-5', 5, 0, 12],
  ['D.Green', 42, '5-10', '2-5', 5, 0, 12],
  ['D.Green', 42, '5-10', '2-5', 5, 0, 12],
  ['D.Green', 42, '5-10', '2-5', 5, 0, 12],
];
export default function PlayerStats() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Player Stats</Text>
      <SubTitle
        title="Chicago Bulls"
        imageUrl={require('../../../assets/chicago-bulls-logo3.png')}
      />
      <AlternativeTable
        containerStyle={styles.tableContainer}
        data={_data}
        headerData={[
          { value: 'Starters', style: { color: Colors.btnBg } },
          'Min',
          'FG',
          '3PT',
          'AST',
          'PF',
          'PTS',
        ]}
        headerWidthArray={['20%', ...times(6).fill('8%')]}
      />
      <AlternativeTable
        data={_data}
        headerData={['Bench', 'Min', 'FG', '3PT', 'AST', 'PF', 'PTS']}
        headerWidthArray={['20%', ...times(6).fill('8%')]}
      />
      <SubTitle
        title="Los Angeles Lakers"
        imageUrl={require('../../../assets/chicago-bulls-logo3.png')}
      />
      <AlternativeTable
        containerStyle={styles.tableContainer}
        data={_data}
        headerData={[
          { value: 'Starters', style: { color: Colors.btnBg } },
          'Min',
          'FG',
          '3PT',
          'AST',
          'PF',
          'PTS',
        ]}
        headerWidthArray={['20%', ...times(6).fill('8%')]}
      />
      <AlternativeTable
        data={_data}
        headerData={['Bench', 'Min', 'FG', '3PT', 'AST', 'PF', 'PTS']}
        headerWidthArray={['20%', ...times(6).fill('8%')]}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: hp(3),
  },
  header: {
    color: Colors.light,
    fontSize: FontSize.size_3xl,
    fontWeight: '600',
  },
  tableContainer: {
    paddingVertical: hp(1),
  },
  image: {
    width: '70%',
    height: '70%',
  },
  imageWrapper: {
    height: 30,
    width: 30,
    alignItems: 'center',
    borderRadius: 25,
    justifyContent: 'center',
    backgroundColor: MyColors.light,
  },
  horizontalRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header1: {
    fontSize: FontSize.bodyMediumSemibold_size,
    color: Colors.light,
  },
  gap10: {
    gap: hp(1),
  },
  p10: {
    padding: 5,
  },
});
