import React from 'react';
import { View, Text, Image } from 'react-native-ui-lib';
import { StyleSheet, Pressable } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import {
  Padding,
  FontSize,
  FontFamily,
  Color,
  Border,
} from '../../../views/GlobalStyles';
import TeamItem from '../../common/TeamItem';

export const TeamsBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.myTeamsParent}>
      <Text style={[styles.myTeams, styles.vamTypo1]}>My Teams</Text>
      <View style={styles.teamNamesRow}>
        <TeamItem
          imageSource={require('../../../assets/frame8.png')}
          name="Rotary AAU 17"
        />
        <TeamItem
          imageSource={require('../../../assets/frame9.png')}
          name="O’Dea HS"
        />
        <View style={styles.frameContainer}>
          <View>
            <Pressable onPress={() => navigation.navigate('AddNewTeam')}>
              <LinearGradient
                style={styles.addButtonChild}
                locations={[0, 1]}
                colors={['#3f424d', '#323640']}
                useAngle={true}
                angle={223.47}
              />
              <Image
                style={styles.addButtonItem}
                resizeMode="cover"
                source={require('../../../assets/ellipse-685.png')}
              />
              <Image
                style={[styles.addButtonInner, styles.text1Position]}
                resizeMode="cover"
                source={require('../../../assets/ellipse-686.png')}
              />
              <Image
                style={[styles.plusIcon, styles.plusIconPosition]}
                resizeMode="cover"
                source={require('../../../assets/plus.png')}
              />
            </Pressable>
          </View>
          <Text style={[styles.highSchoolTeam1, styles.highTypo]}>
            Add Team
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameScrollViewContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  playerDashScrollViewContent: {
    flexDirection: 'column',
    paddingTop: 48,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  frameParentSpaceBlock1: {
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
  },
  aauTeamTypo: {
    lineHeight: 14,
    textAlign: 'left',
    fontSize: FontSize.bodyMediumSemibold_size,
  },
  vamTypo1: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: '600',
  },
  iconLayout3: {
    width: 42,
    height: 42,
  },
  nameTypo: {
    display: 'none',
    fontFamily: FontFamily.bodyMediumSemibold,
    lineHeight: 20,
    letterSpacing: 0,
    marginTop: 4,
    textAlign: 'center',
    fontWeight: '600',
    fontSize: FontSize.bodyMediumSemibold_size,
    alignSelf: 'stretch',
  },
  highTypo: {
    color: Color.darkgray_100,
    textAlign: 'center',
    fontFamily: FontFamily.robotoBold,
    fontWeight: '600',
    lineHeight: 14,
    fontSize: FontSize.bodyMediumSemibold_size,
  },
  text1Position: {
    left: 38,
    position: 'absolute',
  },
  plusIconPosition: {
    zIndex: 3,
    position: 'absolute',
  },
  parentFlexBox: {
    height: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textTypo1: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: '500',
  },
  chevronIconLayout: {
    height: 14,
    width: 14,
    overflow: 'hidden',
  },
  iconLayout1: {
    height: 52,
    width: 180,
  },
  maskGroupPosition: {
    top: 0,
    position: 'absolute',
  },
  frameLayout: {
    width: 50,
    top: 25,
    height: 50,
    position: 'absolute',
  },
  ellipseIconLayout: {
    height: 40,
    top: 30,
    width: 40,
    position: 'absolute',
  },
  subtractShadowBox: {
    height: 101,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: 'rgba(0, 0, 0, 0.06)',
    width: 180,
    backgroundColor: Color.lighterDark,
    borderRadius: Border.br_5xs,
  },
  iconLayout2: {
    height: 50,
    width: 180,
  },
  kWrapperShadowBox: {
    elevation: 18,
    shadowRadius: 18,
    shadowColor: 'rgba(0, 0, 0, 0.08)',
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  vsTypo: {
    opacity: 0.5,
    fontFamily: FontFamily.robotoRegular,
    color: Color.othersWhite,
  },
  lineViewBorder: {
    borderColor: '#fff',
    borderStyle: 'solid',
  },
  groupLayout: {
    height: 76,
    width: 175,
    justifyContent: 'center',
    alignItems: 'center',
  },
  frameChildPosition: {
    height: 131,
    left: 28,
    top: 26,
    position: 'absolute',
  },
  astPosition: {
    height: 35,
    top: 0,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  astTypo: {
    color: Color.gray_100,
    fontSize: FontSize.size_xs,
    display: 'flex',
    fontFamily: FontFamily.robotoMedium,
    fontWeight: '500',
    textAlign: 'left',
    alignItems: 'center',
  },
  textTypo: {
    marginTop: 3,
    lineHeight: 18,
    fontSize: FontSize.bodyLargeBold_size,
    display: 'flex',
    color: Color.othersWhite,
    fontFamily: FontFamily.robotoBold,
    fontWeight: '600',
    textAlign: 'left',
    alignItems: 'center',
  },
  frameChildLayout4: {
    height: 2,
    borderTopWidth: 2,
    backgroundColor: Color.goldenrod_300,
    width: 32,
    borderStyle: 'solid',
  },
  ptsTypo: {
    marginLeft: 12,
    lineHeight: 16,
    fontSize: FontSize.bodyLargeBold_size,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: '500',
    textAlign: 'left',
  },
  frameParentSpaceBlock: {
    padding: Padding.p_xl,
    alignSelf: 'stretch',
  },
  ppgTypo: {
    fontWeight: '700',
    fontFamily: FontFamily.robotoBold,
  },
  wrapperLayout: {
    borderRadius: Border.br_16xl,
    width: 38,
    justifyContent: 'center',
    height: 38,
    alignItems: 'center',
  },
  kTypo: {
    fontSize: FontSize.bodyLargeBold_size,
    color: Color.othersWhite,
    textAlign: 'left',
  },
  kalumetTypo: {
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.robotoLight,
    fontWeight: '300',
  },
  text14Clr: {
    color: Color.blueTeam,
    textAlign: 'left',
  },
  parentLayout1: {
    width: 115,
    flexDirection: 'row',
  },
  falconsTypo: {
    textAlign: 'right',
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.robotoLight,
    fontWeight: '300',
  },
  teamStatsLayout: {
    lineHeight: 20,
    color: Color.othersWhite,
  },
  rectangleGroupLayout: {
    height: 12,
    alignItems: 'center',
  },
  vamLayout: {
    lineHeight: 12,
    textAlign: 'left',
  },
  frameChildTransform: {
    transform: [
      {
        rotate: '180deg',
      },
    ],
    backgroundColor: Color.dimgray_200,
    height: 11,
  },
  vamTypo: {
    color: Color.mediumaquamarine,
    lineHeight: 12,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.robotoRegular,
    textAlign: 'left',
  },
  frameChildLayout1: {
    width: 36,
    backgroundColor: Color.dimgray_200,
    height: 12,
  },
  frameChildLayout2: {
    width: 130,
    backgroundColor: Color.mediumaquamarine,
    height: 11,
  },
  continueFlexBox: {
    paddingVertical: Padding.p_base,
    borderRadius: Border.br_5xl,
    paddingHorizontal: 0,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  frameChildLayout: {
    height: 81,
    width: 81,
    top: 41,
    position: 'absolute',
  },
  iconLayout: {
    height: '100%',
    borderRadius: Border.br_mini,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    paddingVertical: 0,
    paddingHorizontal: Padding.p_xl,
    alignSelf: 'stretch',
  },
  frameChild: {
    width: 61,
    height: 61,
  },
  text: {
    fontFamily: FontFamily.robotoLight,
    fontWeight: '300',
  },
  vaibhavChibbar: {
    color: Color.gray_200,
    textAlign: 'left',
  },
  vaibhavChibbar1: {
    fontSize: FontSize.size_lg,
    marginTop: 2,
    color: Color.othersWhite,
    lineHeight: 22,
    textAlign: 'left',
  },
  vaibhavChibbarParent: {
    width: 132,
    marginLeft: 20,
    height: 38,
  },
  ellipseParent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  trophyIcon: {
    height: 42,
  },
  magnifyingglassIcon: {
    marginLeft: 10,
    height: 42,
  },
  trophyParent: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  frameGroup: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  myTeams: {
    fontSize: FontSize.size_3xl,
    color: Color.othersWhite,
    lineHeight: 22,
    textAlign: 'left',
  },
  frameIcon: {
    width: 80,
    height: 80,
  },
  name: {
    marginTop: 4,
    color: Color.othersWhite,
  },
  typenotSeenStoryComponent: {
    height: 80,
    width: 84,
    alignItems: 'center',
  },
  aauTeam: {
    width: 99,
    display: 'flex',
    fontFamily: FontFamily.robotoRegular,
    color: Color.othersWhite,
    textAlign: 'left',
    alignItems: 'center',
  },
  aauTeamWrapper: {
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: 0,
    alignItems: 'center',
  },
  typenotSeenStoryComponentParent: {
    alignItems: 'center',
    alignSelf: 'stretch',
    flex: 1,
  },
  name1: {
    color: Color.greyscale300,
    marginTop: 4,
  },
  typeseenStoryComponentsto: {
    alignItems: 'center',
  },
  highSchoolTeam: {
    marginTop: 5,
    width: 62,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonChild: {
    borderRadius: 20,
    width: 82,
    height: 79,
    zIndex: 0,
    backgroundColor: 'transparent',
  },
  addButtonItem: {
    top: -5,
    left: -5,
    zIndex: 1,
    opacity: 0.14,
    width: 43,
    position: 'absolute',
    height: 42,
  },
  addButtonInner: {
    width: 45,
    height: 45,
    zIndex: 2,
    top: 38,
    opacity: 0.14,
  },
  plusIcon: {
    top: 21,
    left: 22,
    height: 37,
    width: 38,
    overflow: 'hidden',
  },
  highSchoolTeam1: {
    marginTop: 10,
    alignSelf: 'stretch',
  },
  frameContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  teamNamesRow: {
    marginTop: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  myTeamsParent: {
    marginTop: 20,
    alignSelf: 'stretch',
  },
  seeAll: {
    color: Color.royalblue,
    textAlign: 'left',
    fontSize: FontSize.bodyMediumSemibold_size,
  },
  chevronDownIcon: {
    marginLeft: 2,
  },
  seeAllParent: {
    width: 60,
    height: 16,
  },
  upcomingGamesParent: {
    marginTop: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  subtractIcon: {
    borderRadius: Border.br_9xs,
  },
  maskGroupIcon: {
    left: 0,
    height: 52,
    width: 180,
  },
  frameItem: {
    left: 20,
    height: 50,
  },
  frameInner: {
    left: 110,
    height: 50,
  },
  ellipseIcon: {
    left: 25,
  },
  frameChild1: {
    left: 115,
  },
  text1: {
    top: 81,
    lineHeight: 15,
    fontSize: FontSize.size_xs,
    textAlign: 'center',
    color: Color.othersWhite,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: '500',
  },
  chicagoBullsLogoIcon: {
    top: 39,
    left: 32,
    width: 26,
    height: 26,
    position: 'absolute',
  },
  losAngelesLakersLogoIcon: {
    left: 116,
    height: 23,
    width: 38,
    top: 38,
    position: 'absolute',
  },
  subtractGroup: {
    marginLeft: 10,
  },
  subtractIcon2: {
    height: 50,
    borderRadius: Border.br_9xs,
  },
  maskGroupIcon2: {
    height: 50,
    left: 0,
    width: 180,
  },
  subtractContainer: {
    marginLeft: 10,
  },
  frameScrollview: {
    marginTop: 20,
    alignSelf: 'stretch',
    width: '100%',
  },
  text4: {
    color: '#bdbdbd',
    textAlign: 'left',
    fontSize: FontSize.bodyMediumSemibold_size,
  },
  chevronDownIcon1: {
    marginLeft: 4,
  },
  parent: {
    width: 71,
  },
  text5: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.robotoRegular,
    textAlign: 'center',
    color: Color.othersWhite,
  },
  homeRecord: {
    marginTop: 4,
    textAlign: 'center',
    fontSize: FontSize.bodyMediumSemibold_size,
  },
  lineView: {
    borderRightWidth: 1,
    width: 1,
    opacity: 0.05,
    marginLeft: 11,
    height: 61,
  },
  container: {
    marginLeft: 11,
  },
  frameParent1: {
    backgroundColor: Color.lighterDark,
    borderRadius: Border.br_5xs,
    shadowRadius: 18,
    shadowColor: 'rgba(0, 0, 0, 0.08)',
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },
  text7: {
    fontSize: 26,
    lineHeight: 26,
    width: 17,
    textAlign: 'center',
    color: Color.othersWhite,
  },
  totalGame: {
    fontSize: 11,
    lineHeight: 13,
    width: 31,
    textAlign: 'center',
    color: Color.othersWhite,
  },
  parent1: {
    top: 66,
    left: 84,
    height: 53,
    width: 31,
    position: 'absolute',
    alignItems: 'center',
  },
  frameChild10: {
    width: 142,
  },
  frameChild11: {
    width: 113,
  },
  frameParent3: {
    width: 198,
    height: 183,
  },
  ast: {
    width: 65,
  },
  text8: {
    width: 11,
  },
  astParent: {
    width: 65,
    left: 0,
  },
  ast1: {
    width: 43,
  },
  text9: {
    width: 31,
  },
  astGroup: {
    left: 103,
    width: 43,
  },
  frameChild12: {
    borderColor: '#246bfd',
  },
  pts: {
    width: 53,
    color: Color.royalblue,
  },
  lineParent: {
    width: 96,
  },
  frameChild13: {
    borderColor: '#ce1141',
  },
  pts1: {
    color: Color.crimson,
    width: 70,
  },
  lineGroup: {
    width: 114,
    marginTop: 4,
  },
  frameParent5: {
    left: 191,
    width: 114,
    height: 36,
  },
  frameParent4: {
    height: 36,
    width: 304,
  },
  frameParent2: {
    width: 304,
    alignItems: 'center',
  },
  frameView: {
    width: 372,
    justifyContent: 'flex-end',
    marginTop: 20,
    alignItems: 'center',
  },
  frameParent: {
    height: 783,
    alignItems: 'center',
    paddingVertical: 0,
    alignSelf: 'stretch',
  },
  lastGameWrapper: {
    flexDirection: 'row',
    paddingVertical: 0,
  },
  playerSummary: {
    fontSize: FontSize.bodyLargeBold_size,
    color: Color.othersWhite,
    textAlign: 'left',
    lineHeight: 22,
  },
  k: {
    fontFamily: FontFamily.robotoRegular,
  },
  kWrapper: {
    backgroundColor: Color.blueTeam,
    padding: 8,
    elevation: 18,
    shadowRadius: 18,
    shadowColor: 'rgba(0, 0, 0, 0.08)',
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  kalumet: {
    color: Color.othersWhite,
    textAlign: 'left',
  },
  copperKings: {
    marginTop: 1,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.robotoLight,
    fontWeight: '300',
  },
  kalumetParent: {
    width: 77,
    height: 31,
    marginLeft: 10,
  },
  frameParent9: {
    width: 125,
    height: 38,
    flexDirection: 'row',
    alignItems: 'center',
  },
  vs: {
    textAlign: 'left',
    fontSize: FontSize.bodyMediumSemibold_size,
  },
  divineChild: {
    color: Color.othersWhite,
  },
  falcons: {
    color: Color.redTeam,
    marginTop: 1,
  },
  divineChildParent: {
    width: 67,
    height: 31,
    alignItems: 'flex-end',
  },
  dWrapper: {
    backgroundColor: Color.redTeam,
    padding: Padding.p_9xs,
    marginLeft: 10,
  },
  frameParent10: {
    height: 38,
    alignItems: 'center',
  },
  frameParent8: {
    borderRadius: Border.br_mini,
    padding: Padding.p_xl,
    marginTop: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: Color.gray_600,
  },
  playerSummaryParent: {
    alignSelf: 'stretch',
  },
  team: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    textAlign: 'center',
    color: Color.othersWhite,
    flex: 1,
  },
  teamWrapper: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  text10: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    color: Color.othersWhite,
    textAlign: 'left',
  },
  t: {
    fontSize: FontSize.size_xs,
    color: Color.royalblue,
    fontFamily: FontFamily.robotoRegular,
    textAlign: 'left',
  },
  parent2: {
    marginLeft: 8,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  frameParent12: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 0,
    alignSelf: 'stretch',
  },
  copperKings1: {
    color: '#7fa5f2',
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    textAlign: 'center',
    flex: 1,
  },
  text14: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
  },
  text19: {
    fontSize: FontSize.size_xs,
    textAlign: 'left',
  },
  frameParent11: {
    height: 82,
    marginTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 0,
    alignSelf: 'stretch',
  },
  frameChild14: {
    borderTopWidth: 1,
    height: 1,
    opacity: 0.2,
    marginTop: 20,
    alignSelf: 'stretch',
  },
  chicagoBullsLogoIcon3: {
    height: 32,
    width: 32,
  },
  teamStats: {
    width: 295,
    height: 20,
    display: 'flex',
    fontFamily: FontFamily.robotoRegular,
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: FontSize.bodyMediumSemibold_size,
    alignItems: 'center',
  },
  losAngelesLakersLogoIcon3: {
    height: 24,
    width: 40,
  },
  chicagoBullsLogoParent: {
    paddingHorizontal: Padding.p_11xl,
    marginTop: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 0,
    alignSelf: 'stretch',
  },
  vamRondaCopy: {
    color: Color.goldenrod_200,
    width: 22,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.robotoBold,
    fontWeight: '600',
  },
  rectangleView: {
    backgroundColor: Color.goldenrod_200,
    height: 11,
    width: 133,
    marginLeft: 10,
  },
  vamRondaCopy26Parent: {
    width: 163,
    height: 12,
    flexDirection: 'row',
  },
  ppg: {
    width: 20,
    fontSize: FontSize.size_3xs,
    fontWeight: '700',
    fontFamily: FontFamily.robotoBold,
    display: 'flex',
    textAlign: 'center',
    marginLeft: 10,
    justifyContent: 'center',
    color: Color.othersWhite,
  },
  frameChild15: {
    width: 101,
    transform: [
      {
        rotate: '180deg',
      },
    ],
    backgroundColor: Color.dimgray_200,
  },
  vamRondaCopy1: {
    width: 22,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.robotoRegular,
    marginLeft: 10,
    color: Color.othersWhite,
  },
  rectangleParent: {
    paddingRight: 30,
    width: 163,
    height: 12,
    flexDirection: 'row',
    marginLeft: 10,
  },
  frameParent16: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  vamRondaCopy2: {
    width: 22,
    fontSize: FontSize.size_3xs,
    color: Color.othersWhite,
    fontFamily: FontFamily.robotoBold,
    fontWeight: '600',
  },
  frameChild16: {
    marginLeft: 9,
    transform: [
      {
        rotate: '180deg',
      },
    ],
    backgroundColor: Color.dimgray_200,
    width: 84,
  },
  vamRondaCopy28Parent: {
    width: 115,
    flexDirection: 'row',
  },
  apg: {
    width: 21,
    fontSize: FontSize.size_3xs,
    display: 'flex',
    marginLeft: 10,
    color: Color.othersWhite,
    textAlign: 'left',
    alignItems: 'center',
  },
  vamRondaCopy3: {
    width: 22,
    marginLeft: 10,
  },
  rectangleGroup: {
    width: 162,
    marginLeft: 10,
    flexDirection: 'row',
  },
  vamRondaCopy26Group: {
    width: 164,
    flexDirection: 'row',
  },
  ppg1: {
    width: 22,
    fontSize: FontSize.size_3xs,
    display: 'flex',
    marginLeft: 10,
    color: Color.othersWhite,
    textAlign: 'left',
    alignItems: 'center',
  },
  frameChild19: {
    width: 101,
    transform: [
      {
        rotate: '180deg',
      },
    ],
    backgroundColor: Color.dimgray_200,
  },
  vamRondaCopy5: {
    marginLeft: 9,
    width: 22,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.robotoRegular,
    color: Color.othersWhite,
  },
  rectangleContainer: {
    width: 133,
    height: 12,
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  vamRondaCopy6: {
    width: 16,
    fontSize: FontSize.size_3xs,
    color: Color.othersWhite,
    fontFamily: FontFamily.robotoBold,
    fontWeight: '600',
  },
  frameChild20: {
    marginLeft: 10,
  },
  vamRondaCopy27Parent: {
    width: 62,
    flexDirection: 'row',
  },
  rpg: {
    width: 20,
    fontSize: FontSize.size_3xs,
    display: 'flex',
    marginLeft: 10,
    color: Color.othersWhite,
    textAlign: 'left',
    alignItems: 'center',
  },
  frameChild21: {
    backgroundColor: Color.mediumaquamarine,
    height: 12,
    width: 60,
  },
  vamRondaCopy7: {
    width: 15,
    marginLeft: 9,
  },
  rectangleParent1: {
    width: 85,
    marginLeft: 10,
    flexDirection: 'row',
  },
  frameChild22: {
    transform: [
      {
        rotate: '180deg',
      },
    ],
    backgroundColor: Color.dimgray_200,
    width: 84,
    marginLeft: 10,
  },
  frameChild23: {
    marginLeft: 10,
  },
  frameChild24: {
    marginLeft: 9,
  },
  frameChild26: {
    marginLeft: 9,
    transform: [
      {
        rotate: '180deg',
      },
    ],
    backgroundColor: Color.dimgray_200,
    width: 84,
  },
  frameParent15: {
    height: 152,
    marginTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  frameParent7: {
    backgroundColor: Color.lighterDark,
    marginTop: 10,
  },
  continue: {
    lineHeight: 16,
    fontWeight: '700',
    textAlign: 'center',
    color: Color.othersWhite,
    fontSize: FontSize.bodyMediumSemibold_size,
    flex: 1,
  },
  continueWrapper: {
    backgroundColor: '#b1831f',
    marginTop: 10,
  },
  frameParent6: {
    paddingVertical: Padding.p_xl,
    paddingHorizontal: 0,
    alignSelf: 'stretch',
  },
  groupIcon: {
    width: 293,
    height: 165,
    zIndex: 0,
  },
  frameChild30: {
    left: 35,
    zIndex: 1,
  },
  frameChild31: {
    left: 180,
    zIndex: 2,
  },
  playerA: {
    fontSize: FontSize.size_lgi_4,
    lineHeight: 24,
    textAlign: 'center',
    color: Color.othersWhite,
  },
  playerAParent: {
    top: 135,
    left: 39,
    width: 227,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  groupParent: {
    marginTop: 20,
    alignSelf: 'stretch',
  },
  frameParent24: {
    height: 205,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  shootingChallenge: {
    fontSize: FontSize.size_mid,
    width: 141,
    fontWeight: '700',
    fontFamily: FontFamily.robotoBold,
    textAlign: 'left',
  },
  activityIcon: {
    width: 20,
    height: 20,
    marginLeft: 20,
  },
  shootingChallengeParent: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  frameChild32: {
    width: 33,
    height: 28,
  },
  ellipseGroup: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  icon: {
    overflow: 'hidden',
  },
  wrapper: {
    height: 113,
    marginTop: 20,
  },
  daysLeft: {
    color: Color.orange,
    fontSize: FontSize.size_xs,
    marginTop: 10,
    fontFamily: FontFamily.robotoBold,
    fontWeight: '600',
  },
  ellipseContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  continueContainer: {
    backgroundColor: Color.royalblue,
    marginTop: 20,
  },
  frameParent23: {
    alignItems: 'center',
  },
  playerDash: {
    maxWidth: '100%',
    overflow: 'hidden',
    width: '100%',
    flex: 1,
    backgroundColor: Color.gray_600,
  },
});
