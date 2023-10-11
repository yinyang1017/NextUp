import React from 'react';
import { CustomTable } from '../../../components/common/CustomTable';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { hp, wp } from '../../../utils/responsive';
import { times } from 'lodash';
import { Image, Text } from 'react-native-ui-lib';
import { appImages } from '../../../constants/appImages';
import { customTheme } from '../../../constants';
import { useNavigation } from '@react-navigation/native';

export default function PlayerStats() {
  const navigation = useNavigation();

  const onPressShowAdvanceStatsHandler = () => {
    navigation.navigate('AdvanceStats');
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      bounces={false}>
      <CustomTable
        title="Player stats"
        headerData={['Starters', 'Min', 'FG', '3PT', 'AST', 'PF', 'PTS']}
        data={times(9).fill(['D. Green', '42', '5-10', '2-5', '8', '1', '12'])}
        headerWidthArray={['28%', ...times(6).fill('12%')]}
        titleStyle={styles.tableTitle}
        tableContainerStyle={styles.tableContainer}
      />
      <TouchableOpacity
        style={styles.dropdown}
        activeOpacity={0.6}
        onPress={onPressShowAdvanceStatsHandler}>
        <Text regular-400 style={styles.advancedStats}>
          Advanced Stats
        </Text>
        <Image source={appImages.dropdown} style={styles.dropdownIcon} />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: hp(2), paddingBottom: hp(5) },
  tableTitle: { paddingHorizontal: wp(4) },
  tableContainer: { paddingHorizontal: wp(1) },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: hp(2),
  },
  dropdownIcon: {
    height: wp(5),
    width: wp(5),
    marginLeft: wp(0.5),
    tintColor: customTheme.colors.light + '80',
  },
  advancedStats: {
    textDecorationLine: 'underline',
    color: customTheme.colors.light + '80',
  },
});
