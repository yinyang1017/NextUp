import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { hp, wp } from '../../../utils/responsive';
import { useNavigation } from '@react-navigation/native';
import HeaderGreyComponent from '../../common/HeaderGreyComponent';
import AddButtonWithIcon from '../../common/AddButtonWithIcon';
import { Text, View } from 'react-native-ui-lib';
import AvatarItem from '../../common/AvatarItem';
import { customTheme } from '../../../constants';
import { useAuth } from '../../../hooks/useAuth';

const varsityData = [
  {
    id: '1',
    name: 'A.McCoy',
    source: require('../../../assets/ellipse-691.png'),
  },
  { id: '2', name: 'R.Fox', source: require('../../../assets/avatar4.png') },
  {
    id: '3',
    name: 'Cooper',
    source: require('../../../assets/ellipse-7566.png'),
  },
  {
    id: '4',
    name: 'C.Henry',
    source: require('../../../assets/ellipse-760.png'),
  },
  {
    id: '5',
    name: 'E.Howard',
    source: require('../../../assets/ellipse-7573.png'),
  },
  {
    id: '6',
    name: 'A.McCoy',
    source: require('../../../assets/ellipse-688.png'),
  },
  { id: '7', name: 'R.Fox', source: require('../../../assets/avatar3.png') },
  { id: '8', name: 'Cooper', source: require('../../../assets/group-6.png') },
  {
    id: '9',
    name: 'C.Henry',
    source: require('../../../assets/ellipse-7572.png'),
  },
  {
    id: '10',
    name: 'E.Howard',
    source: require('../../../assets/ellipse-7576.png'),
  },
];

const newPlayersData = [
  {
    id: '1',
    name: 'A.McCoy',
    source: require('../../../assets/ellipse-691.png'),
  },
  {
    id: '2',
    name: 'R.Fox',
    source: require('../../../assets/avatar4.png'),
  },

  {
    id: '3',
    name: 'Cooper',
    source: require('../../../assets/ellipse-7566.png'),
  },
];

export const RoasterComponent = () => {
  const navigation = useNavigation();
  const { isCoach } = useAuth();

  const renderRightAddButton = () => (
    <AddButtonWithIcon onPress={() => navigation.navigate('SearchPlayers')} />
  );

  const renderVarsityItem = (item, index) => (
    <AvatarItem
      key={index}
      title={item.name}
      image={item.source}
      containerStyle={styles.varsityAvatar}
    />
  );

  const renderNewPlayerItem = (item, index) => {
    return (
      <View row centerV spread key={index}>
        <AvatarItem title={item.name} image={item.source} />
        {item.id === '3' ? (
          <View row centerV style={styles.varsityJuniorContainer}>
            <TouchableOpacity style={styles.varsityButton}>
              <Text small-x-500>VARSITY</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.juniorVButton}>
              <Text small-x-500>JUNIOR V</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View row centerV spread style={styles.newPlayerItemButtonRow}>
            <TouchableOpacity
              style={[
                styles.rejectConfirmButton,
                { backgroundColor: customTheme.colors.darkRed2 },
              ]}>
              <Text medium-500>Reject</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.rejectConfirmButton,
                { backgroundColor: customTheme.colors.darkGreen },
              ]}>
              <Text medium-500>Confirm</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <HeaderGreyComponent title="Varsity" containerStyle={styles.headerGrey} />
      <View row centerV style={styles.varsityListContainer}>
        {varsityData.map(renderVarsityItem)}
      </View>
      <HeaderGreyComponent
        containerStyle={styles.headerGrey}
        title="New Players"
        rightContent={isCoach ? renderRightAddButton : undefined}
      />
      {isCoach ? (
        <View style={styles.newPlayersListContainer}>
          {newPlayersData.map(renderNewPlayerItem)}
        </View>
      ) : (
        <View row centerV style={styles.varsityListContainer}>
          {newPlayersData.map(renderVarsityItem)}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rejectConfirmButton: {
    borderRadius: wp(1.5),
    paddingBottom: hp(0.4),
    width: wp(22),
    justifyContent: 'center',
    alignItems: 'center',
  },
  varsityButton: {
    borderTopLeftRadius: wp(1),
    borderBottomLeftRadius: wp(1),
    paddingHorizontal: wp(4),
    backgroundColor: customTheme.colors.btnBg,
    padding: wp(1.5),
  },
  juniorVButton: {
    borderTopRightRadius: wp(1),
    borderBottomRightRadius: wp(1),
    backgroundColor: customTheme.colors.gray_400,
    padding: wp(1.5),
    paddingHorizontal: wp(4),
  },
  headerGrey: { marginTop: hp(3), marginBottom: hp(1.5) },
  varsityAvatar: { width: '20%' },
  varsityListContainer: { rowGap: hp(2.5), flexWrap: 'wrap' },
  scrollContent: { paddingBottom: hp(4), marginHorizontal: wp(7) },
  newPlayersListContainer: { rowGap: hp(1.5) },
  newPlayerItemButtonRow: { width: '70%', paddingHorizontal: wp(2) },
  varsityJuniorContainer: {
    paddingHorizontal: wp(2),
    justifyContent: 'flex-end',
    width: '70%',
  },
});
