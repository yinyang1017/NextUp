import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import TeamItem from '../../../components/common/TeamItem';
import {Colors, customTheme} from '../../../constants';
import {FontSize, Color} from '../../GlobalStyles';
import HeaderGreyComponent from '../../../components/common/HeaderGreyComponent';
import AvatarItem from '../../../components/common/AvatarItem';
import {hp, wp} from '../../../utils/responsive';
import {useNavigation} from '@react-navigation/native';
const pendingPlayers = [
  {
    id: '1',
    name: 'A.McCoy',
    source: require('../../../assets/ellipse-691.png'),
  },
  {id: '2', name: 'R.Fox', source: require('../../../assets/avatar4.png')},
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
  {id: '7', name: 'R.Fox', source: require('../../../assets/avatar3.png')},
  {id: '8', name: 'Cooper', source: require('../../../assets/group-6.png')},
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
const existingRoster = [
  {
    id: '1',
    name: 'A.McCoy',
    source: require('../../../assets/ellipse-691.png'),
  },
  {id: '2', name: 'R.Fox', source: require('../../../assets/avatar4.png')},
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
];
const coachData = [
  {
    id: '10',
    name: 'E.Howard',
    source: require('../../../assets/ellipse-7576.png'),
  },
];

export default function RosterTab() {
  const navigation = useNavigation();
  const renderSeeAllButton = () => (
    <TouchableOpacity
      style={[styles.seeAllParent, styles.parentFlexBox]}
      onPress={() => navigation.navigate('Teams')}>
      <Text style={[styles.seeAll, styles.textTypo1]}>See All</Text>
      <Image
        style={[styles.chevronDownIcon, styles.chevronIconLayout]}
        resizeMode="cover"
        source={require('../../../assets/chevrondown4.png')}
      />
    </TouchableOpacity>
  );

  const renderPlayerList = (item, index) => (
    <AvatarItem
      key={index}
      title={item.name}
      image={item.source}
      titleStyle={styles.whiteText}
      containerStyle={styles.varsityAvatar}
    />
  );

  return (
    <ScrollView containerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <TeamItem
          containerStyle={styles.teamItemContainer}
          imageSource={require('../../../assets/frame8.png')}
          name="Rotary AAU 17"
        />
        <TeamItem
          containerStyle={styles.teamItemContainer}
          imageSource={require('../../../assets/frame9.png')}
          name="O’Dea HS"
          isActive
        />
      </View>
      <Text style={styles.playerLabel}>Players</Text>
      <View style={styles.playerContainer}>
        <HeaderGreyComponent
          title="Pending Players"
          titleStyle={styles.titleContent}
          containerStyle={styles.headerGrey}
          rightContent={renderSeeAllButton}
        />

        <View style={styles.varsityListContainer}>
          {pendingPlayers.map(renderPlayerList)}
        </View>

        <HeaderGreyComponent
          title="Existing Rosters"
          titleStyle={styles.titleContent}
          containerStyle={styles.headerGrey}
        />
        <View style={styles.varsityListContainer}>
          {existingRoster.map(renderPlayerList)}
        </View>

        <HeaderGreyComponent
          titleStyle={styles.titleContent}
          containerStyle={styles.headerGrey}
          title="Coach"
        />
        <View style={styles.varsityListContainer}>
          {coachData.map(renderPlayerList)}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-start',
    marginTop: hp(2),
    paddingHorizontal: wp(8),
  },
  titleContent: {
    color: Colors.white_08,
    fontSize: 16,
    fontWeight: 500,
  },
  whiteText: {color: customTheme.colors.white},
  playerLabel: {
    color: customTheme.colors.white,
    fontSize: 22,
    fontWeight: 'bold',
    paddingLeft: wp(4),
    marginTop: hp(3),
  },
  playerContainer: {
    paddingHorizontal: wp(2),
  },
  teamItemContainer: {
    marginHorizontal: wp(3),
  },
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
    backgroundColor: customTheme.colors.darkGray,
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
  headerGrey: {marginTop: hp(3), marginBottom: hp(1.5)},
  varsityAvatar: {width: '20%'},
  varsityListContainer: {
    alignItems: 'center',
    rowGap: hp(2.5),
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: wp(2),
  },
  scrollContent: {paddingBottom: hp(4), marginHorizontal: wp(7)},
  newPlayersListContainer: {rowGap: hp(1.5), paddingHorizontal: wp(4)},
  newPlayerItemButtonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
    justifyContent: 'space-between',
    paddingHorizontal: wp(2),
  },
  rowCenter: {flexDirection: 'row', alignItems: 'center'},
  seeAll: {
    color: Color.royalblue,
    textAlign: 'left',
    fontSize: FontSize.bodyMediumSemibold_size,
  },
  chevronDownIcon: {
    marginLeft: 2,
  },
  chevronIconLayout: {
    height: 14,
    width: 14,
    overflow: 'hidden',
  },
  seeAllParent: {
    width: 60,
    height: 16,
  },
  parentFlexBox: {
    height: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
