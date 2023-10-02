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

const data = [
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
const Data = [
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
      <View style={styles.parentView}>
        <Text style={styles.childText}>Varsity</Text>
      </View>
      <View style={styles.childIconView}>
        <FlatList
          data={data}
          numColumns={5}
          bounces={false}
          renderItem={({ item }) => (
            <View style={styles.iconView}>
              <Image style={styles.icon} source={item.source} />
              <Text style={styles.iconText}>{item.name}</Text>
            </View>
          )}
          contentContainerStyle={{ alignItems: 'center' }}
        />
        <View style={styles.childNewView}>
          <Text style={styles.childNewText}>New Players</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('SearchPlayers')}
            style={styles.plusView}>
            <View
              style={{
                borderWidth: 1.5,
                borderColor: '#246BFD',
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                width: wp(5.5),
                height: wp(5.5),
                borderRadius: wp(4),
              }}>
              <Image
                style={styles.childIcon}
                source={require('../../../assets/plus.png')}
                tintColor={'#246BFD'}
              />
            </View>
            <View>
              <Text style={styles.plusText}>Add</Text>
            </View>
          </TouchableOpacity>
        </View>
        <FlatList
          data={Data}
          bounces={false}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.newPlayersRow}>
                <View style={styles.childView}>
                  <Image style={styles.icon2} source={item.source} />
                  <Text style={styles.iconText2}>{item.name}</Text>
                </View>
                {item.id == 3 ? (
                  <>
                    <TouchableOpacity style={styles.btn1View}>
                      <Text style={styles.Butn1Text}>{item.Button}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn2View}>
                      <Text style={styles.Butn2Text}>{item.Button2}</Text>
                    </TouchableOpacity>
                  </>
                ) : (
                  <>
                    <TouchableOpacity style={styles.childBtnView}>
                      <Text style={styles.child1Text}>{item.Button}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.child2View}>
                      <Text style={styles.child2Text}>{item.Button2}</Text>
                    </TouchableOpacity>
                  </>
                )}
              </View>
            );
          }}
        />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  parentView: {
    marginTop: wp(5),
    marginHorizontal: wp(6),
    backgroundColor: Color.gray_500,
    borderRadius: wp(2),
  },
  childText: {
    fontSize: FontSize.size_xl,
    color: MyColors.light,
    fontWeight: 'bold',
    paddingVertical: wp(2),
    paddingLeft: wp(2),
  },
  imgeContainer: {
    height: 0,
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  icon: {
    marginTop: hp(2.5),
    width: wp(12),
    height: wp(12),
    marginHorizontal: wp(2),
  },
  iconView: { alignItems: 'center' },
  iconText: {
    color: MyColors.light,
    paddingHorizontal: wp(2),
    marginTop: hp(0.5),
  },
  childNewView: {
    marginTop: wp(4),
    marginHorizontal: wp(7.5),
    backgroundColor: Color.gray_500,
    borderRadius: wp(2),
  },
  childNewText: {
    color: MyColors.light,
    fontSize: FontSize.size_xl,
    fontWeight: 'bold',
    paddingVertical: wp(4),
    paddingLeft: wp(2),
  },
  childIcon: { width: wp(4), height: wp(4) },
  plusView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    position: 'absolute',
    left: wp(67),
    top: wp(4),
  },
  plusText: {
    color: '#246BFD',
    fontSize: FontSize.bodyLargeBold_size,
    fontWeight: '500',
    position: 'absolute',
    left: wp(2),
    top: wp(0.7),
  },
  newPlayersRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(11),
  },
  childView: { alignItems: 'center' },
  icon2: {
    marginTop: hp(1),
    width: wp(12),
    height: wp(12),
  },
  iconText2: { color: MyColors.light, marginTop: hp(0.4) },
  btn1View: {
    borderTopLeftRadius: wp(1.5),
    borderBottomLeftRadius: wp(1.5),
    paddingHorizontal: wp(4),
    backgroundColor: Color.royalblue,
    padding: wp(2),
    marginLeft: wp(24),
  },
  Butn1Text: { color: MyColors.light },
  Butn2Text: {
    color: MyColors.light,
  },
  btn2View: {
    borderTopRightRadius: wp(1.5),
    borderBottomRightRadius: wp(1.5),
    backgroundColor: Color.gray_400,
    padding: wp(2),
    paddingHorizontal: wp(4),
  },
  childBtnView: {
    borderRadius: wp(1.5),
    paddingHorizontal: wp(4),
    backgroundColor: '#C30000',
    padding: wp(1),
  },
  child1Text: { color: MyColors.light },
  child2Text: {
    color: MyColors.light,
  },
  child2View: {
    borderRadius: wp(1.5),
    backgroundColor: '#287504',
    padding: wp(1),
    paddingHorizontal: wp(2),
  },
});
