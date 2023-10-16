import * as React from 'react';
import {
  ScrollView,
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import DashBoardHeader from '../../../components/common/DashBoardHeader';
import { MyTeams, TeamsBar } from '../../../components/coach/Dashboard/MyTeams';
import { UpcomingGames } from '../../../components/coach/Dashboard/EventsCarousel';
import StatsContainer from '../../../components/coach/Dashboard/StatsContainer';
import { MyChallenges } from '../../../components/coach/Dashboard/Challenges';
import { Button, Colors } from 'react-native-ui-lib';
import { customTheme } from '../../../constants';
import StatisticOverview from '../../../components/coach/Dashboard/StatisticOverview';
import profileImg from '../../../assets/images/avatar.png';
import LastGameSection from '../../../components/coach/Dashboard/LastGame';
import MatchUp from '../../../components/coach/Dashboard/MatchUp';
import { Padding } from '../../GlobalStyles';

const CoachDashboard = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.playerDash}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={true}
      contentContainerStyle={styles.playerDashScrollViewContent}>
      <View style={[styles.frameParent, styles.frameParentSpaceBlock1]}>
        <DashBoardHeader imgSrc={profileImg} />
        <TeamsBar />
        <UpcomingGames />
        <StatisticOverview />
        <LastGameSection />
        {/* <StatsContainer /> */}
        {/* <MyChallenges /> */}
      </View>
      <View style={styles.compareButtonContainer}>
        <Button
          label={'Compare Teams'}
          onPress={() => {
            navigation.navigate('Home', {
              screen: 'TeamCompare',
            });
          }}
          backgroundColor={customTheme.colors.darkYellow}
          style={{
            width: Dimensions.get('window').width * 0.9,
            marginBottom: 20,
          }}
        />
      </View>
      <MatchUp />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  playerDash: {
    maxWidth: '100%',
    overflow: 'hidden',
    width: '100%',
    flex: 1,
    backgroundColor: customTheme.colors.base,
  },
  playerDashScrollViewContent: {
    flexDirection: 'column',
    paddingTop: 48,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  frameParent: {
    // alignItems: "center",
    paddingVertical: 0,
    alignSelf: 'stretch',
  },
  frameParentSpaceBlock1: {
    paddingHorizontal: customTheme.spacings.spacing_16,
    paddingVertical: 0,
  },
  compareButtonContainer: {
    marginVertical: Padding.p_base,
  },
});

export default CoachDashboard;
