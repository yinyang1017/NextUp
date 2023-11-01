import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import React, { memo, useContext } from 'react';
import { Text, View } from 'react-native-ui-lib';
import { customTheme } from '../../../constants';
import TeamItem from '../../common/TeamItem';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../../hooks/useAuth';
import { hp, wp } from '../../../utils/responsive';
import { MyTeamsContext } from '../../../context/MyTeamsProvider';
import SeasonSelectDropdown from '../../common/SeasonSelectDropdown';

const MyTeamsHeader = () => {
  const navigation = useNavigation();
  const { isCoach } = useAuth();
  const { selectedSeason, selectedTeam, setSelectedSeason, setSelectedTeam } =
    useContext(MyTeamsContext);

  return (
    <View style={styles.container}>
      <View row centerV spread style={styles.header}>
        <Text large-xl-600>My Teams</Text>
        <SeasonSelectDropdown
          selectedSeason={selectedSeason}
          onSelectSeason={setSelectedSeason}
        />
      </View>
      <View style={styles.teams}>
        {!!isCoach && (
          <View>
            <TouchableOpacity
              style={styles.plusView}
              onPress={() => navigation.navigate('AddNewTeam')}>
              <View style={styles.plusIconView}>
                <Image
                  style={styles.plusIcon}
                  source={require('../../../assets/plus.png')}
                  tintColor={customTheme.colors.btnBg}
                />
              </View>
            </TouchableOpacity>
            <Text regular style={styles.plusIconAddText}>
              Add
            </Text>
          </View>
        )}
        <TeamItem
          imageSource={require('../../../assets/frame8.png')}
          name="Rotary AAU 17"
        />
        <TeamItem
          imageSource={require('../../../assets/frame9.png')}
          name="O’Dea HS"
        />
      </View>
    </View>
  );
};

export default memo(MyTeamsHeader);

const styles = StyleSheet.create({
  container: { marginTop: hp(2.5) },
  plusIconView: {
    borderWidth: 1.5,
    borderColor: customTheme.colors.btnBg,
    alignSelf: 'center',
    padding: wp(0.8),
    borderRadius: wp(2.5),
  },
  plusIcon: { width: wp(5), height: wp(5) },
  plusView: {
    borderWidth: 2,
    width: wp(18),
    height: wp(18),
    borderColor: customTheme.colors.btnBg,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(10),
    marginTop: wp(2),
  },
  plusIconAddText: {
    color: customTheme.colors.btnBg,
    paddingBottom: hp(1),
    paddingTop: hp(1.5),
    textAlign: 'center',
  },
  teams: {
    marginTop: hp(1.2),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  header: { marginBottom: hp(1) },
});
