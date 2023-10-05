import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { hp, wp } from '../../../utils/responsive';
import { useNavigation } from '@react-navigation/native';
import HeaderGreyComponent from '../../common/HeaderGreyComponent';
import AddButtonWithIcon from '../../common/AddButtonWithIcon';
import { Text } from 'react-native-ui-lib';
import AvatarItem from '../../common/AvatarItem';
import { customTheme } from '../../../constants';

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
    button: 'Reject',
    button2: 'Confirm',
  },
  {
    id: '2',
    name: 'R.Fox',
    source: require('../../../assets/avatar4.png'),
    button: 'Reject',
    button2: 'Confirm',
  },

  {
    id: '3',
    name: 'Cooper',
    source: require('../../../assets/ellipse-7566.png'),
    button: 'VARSITY',
    button2: 'JUNIOR V',
  },
];

export const RoasterComponent = () => {
  const navigation = useNavigation();

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
      <View style={styles.newPlayerItem} key={index}>
        <AvatarItem title={item.name} image={item.source} />
        {item.id === '3' ? (
          <View style={styles.rowCenter}>
            <TouchableOpacity style={styles.varsityButton}>
              <Text small-x-500>{item.button}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.juniorVButton}>
              <Text small-x-500>{item.button2}</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.newPlayerItemButtonRow}>
            <TouchableOpacity style={styles.rejectButtonView}>
              <Text medium-500>{item.button}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.confirmButtonView}>
              <Text medium-500>{item.button2}</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <HeaderGreyComponent title="Varsity" containerStyle={styles.headerGrey} />
      <View style={styles.varsityListContainer}>
        {varsityData.map(renderVarsityItem)}
      </View>
      <HeaderGreyComponent
        containerStyle={styles.headerGrey}
        title="New Players"
        rightContent={renderRightAddButton}
      />
      <View style={styles.newPlayersListContainer}>
        {newPlayersData.map(renderNewPlayerItem)}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  newPlayerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  varsityButton: {
    borderTopLeftRadius: wp(1),
    borderBottomLeftRadius: wp(1),
    paddingHorizontal: wp(4),
    backgroundColor: customTheme.colors.btnBg,
    padding: wp(1.5),
    marginLeft: wp(28),
  },
  juniorVButton: {
    borderTopRightRadius: wp(1),
    borderBottomRightRadius: wp(1),
    backgroundColor: customTheme.colors.gray_400,
    padding: wp(1.5),
    paddingHorizontal: wp(4),
  },
  rejectButtonView: {
    borderRadius: wp(1.5),
    paddingHorizontal: wp(5),
    backgroundColor: '#C30000',
    paddingBottom: wp(0.4),
  },
  confirmButtonView: {
    borderRadius: wp(1.5),
    backgroundColor: '#287504',
    paddingBottom: wp(0.4),
    paddingHorizontal: wp(3),
  },
  headerGrey: { marginTop: hp(3), marginBottom: hp(1.5) },
  varsityAvatar: { width: '20%' },
  varsityListContainer: {
    alignItems: 'center',
    rowGap: hp(2.5),
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  scrollContent: { paddingBottom: hp(4), marginHorizontal: wp(7) },
  newPlayersListContainer: { rowGap: hp(1.5) },
  newPlayerItemButtonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '70%',
    justifyContent: 'space-between',
    paddingHorizontal: wp(2),
  },
  rowCenter: { flexDirection: 'row', alignItems: 'center' },
});
