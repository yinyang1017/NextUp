import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Back from '../../../utils/HeaderButtons/Back';
import { hp, wp } from '../../../utils/responsive';
import { useNavigation } from '@react-navigation/native';
import { appImages } from '../../../constants/appImages';
import { MyColors } from '../../../constants/colors';
import { FontFamily } from '../../GlobalStyles';
import StandingsTable from '../../../components/games/Standings/StandingsTable';

const AllStandings = () => {
  const navigation = useNavigation();

  const gobackHandler = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <View style={styles.header}>
        <Back onPress={gobackHandler} title="Standings" />
        <TouchableOpacity style={styles.dropdown}>
          <Text style={styles.dropdownTitle}>Division</Text>
          <Image source={appImages.dropdown} style={styles.dropdownIcon} />
        </TouchableOpacity>
      </View>
      <StandingsTable />
    </SafeAreaView>
  );
};

export default AllStandings;

const styles = StyleSheet.create({
  container: { flex: 1 },
  dropdownIcon: {
    height: wp(4),
    width: wp(4),
    marginLeft: wp(1),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp(3),
    marginHorizontal: wp(10),
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdownTitle: {
    color: MyColors.light,
    fontWeight: '500',
    fontFamily: FontFamily.robotoRegular,
  },
});
