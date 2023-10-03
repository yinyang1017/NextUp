import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Color, FontSize } from '../../../views/GlobalStyles';
import { hp, wp } from '../../../utils/responsive';
import { MyColors } from '../../../constants/colors';
import { useNavigation } from '@react-navigation/native';
import { customTheme } from '../../../constants';
import HeaderGreyComponent from '../../common/HeaderGreyComponet';
import AddButtonWithIcon from '../../common/AddButtonWithIcon';

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
    Button: 'Reject',
    Button2: 'Confirm',
  },
  {
    id: '2',
    name: 'R.Fox',
    source: require('../../../assets/avatar4.png'),
    Button: 'Reject',
    Button2: 'Confirm',
  },

  {
    id: '3',
    name: 'Cooper',
    source: require('../../../assets/ellipse-7566.png'),
    Button: 'VARSITY',
    Button2: 'JUNIOR V',
  },
];

export const RoasterComponet = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: hp(4) }}>
      <HeaderGreyComponent title="Varsity" containerStyle={styles.headerGrey} />
      <FlatList
        data={varsityData}
        numColumns={5}
        bounces={false}
        renderItem={({ item }) => (
          <View style={styles.varsityIconsView}>
            <Image style={styles.iconList} source={item.source} />
            <Text style={styles.iconListText}>{item.name}</Text>
          </View>
        )}
        contentContainerStyle={{ alignItems: 'center' }}
      />
      <HeaderGreyComponent
        containerStyle={styles.headerGrey}
        title="NewPlayers"
        rightContent={() => (
          <AddButtonWithIcon
            onPress={() => navigation.navigate('SearchPlayers')}
          />
        )}
      />
      <FlatList
        data={newPlayersData}
        bounces={false}
        renderItem={({ item }) => {
          return (
            <View style={styles.newPlayersRow}>
              <View style={styles.newPlayerChildView}>
                <Image style={styles.userIcon} source={item.source} />
                <Text style={styles.userIconText}>{item.name}</Text>
              </View>
              {item.id === '3' ? (
                <>
                  <TouchableOpacity style={styles.varsityButtonView}>
                    <Text style={styles.varsityButtonText}>{item.Button}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.juniorVButtonView}>
                    <Text style={styles.juniorVButtonText}>{item.Button2}</Text>
                  </TouchableOpacity>
                </>
              ) : (
                <>
                  <TouchableOpacity style={styles.rejectButtonView}>
                    <Text style={styles.rejectButtonText}>{item.Button}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.confirmButtonView}>
                    <Text style={styles.confirmButtonText}>{item.Button2}</Text>
                  </TouchableOpacity>
                </>
              )}
            </View>
          );
        }}
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  iconList: {
    marginTop: hp(2.3),
    width: wp(12),
    height: wp(12),
    marginHorizontal: wp(2),
  },
  varsityIconsView: { alignItems: 'center' },
  iconListText: {
    color: MyColors.light,
    paddingHorizontal: wp(4),
    marginTop: hp(0.5),
    fontSize: FontSize.size_3xs,
    fontWeight: '600',
  },
  newPlayerView: {
    marginTop: wp(4),
    marginHorizontal: wp(7.5),
    backgroundColor: Color.gray_500,
    borderRadius: wp(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  newPlayerText: {
    color: MyColors.light,
    fontSize: FontSize.size_mini,
    fontWeight: '600',
    paddingVertical: wp(2.5),
    marginRight: wp(39),
  },
  plusIcon: { width: wp(3.5), height: wp(3.5) },
  addPlusIconParentView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: wp(4),
  },
  plusIconChildView: {
    borderWidth: 1.5,
    borderColor: customTheme.colors.btnBg,
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(5.3),
    height: wp(5.3),
    borderRadius: wp(4),
    marginRight: wp(1.5),
  },
  plusIconAddText: {
    color: customTheme.colors.btnBg,
    fontSize: FontSize.size_smi,
    fontWeight: '600',
  },
  newPlayersRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(9.7),
  },
  newPlayerChildView: { alignItems: 'center' },
  userIcon: {
    marginTop: hp(1),
    width: wp(12),
    height: wp(12),
  },
  userIconText: {
    color: MyColors.light,
    marginTop: hp(0.4),
    fontSize: FontSize.size_3xs,
  },
  varsityButtonView: {
    borderTopLeftRadius: wp(1),
    borderBottomLeftRadius: wp(1),
    paddingHorizontal: wp(4),
    backgroundColor: Color.royalblue,
    padding: wp(1.5),
    marginLeft: wp(28),
  },
  varsityButtonText: { color: MyColors.light, fontSize: FontSize.size_xs },
  juniorVButtonText: {
    color: MyColors.light,
    fontSize: FontSize.size_xs,
  },
  juniorVButtonView: {
    borderTopRightRadius: wp(1),
    borderBottomRightRadius: wp(1),
    backgroundColor: Color.gray_400,
    padding: wp(1.5),
    paddingHorizontal: wp(4),
  },
  rejectButtonView: {
    borderRadius: wp(1.5),
    paddingHorizontal: wp(5),
    backgroundColor: '#C30000',
    paddingBottom: wp(0.4),
  },
  rejectButtonText: { color: MyColors.light },
  confirmButtonText: {
    color: MyColors.light,
  },
  confirmButtonView: {
    borderRadius: wp(1.5),
    backgroundColor: '#287504',
    paddingBottom: wp(0.3),
    paddingHorizontal: wp(3),
  },
  headerGrey: { marginTop: wp(7), marginHorizontal: wp(7) },
});
