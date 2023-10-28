import React, { useState, useEffect } from 'react';
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
import UpcomingGames from '../../../components/coach/Dashboard/EventsCarousel';
import StatsContainer from '../../../components/coach/Dashboard/StatsContainer';
import MyChallenges from '../../../components/coach/Dashboard/Challenges';
import { Avatar, Button, Colors } from 'react-native-ui-lib';
import { customTheme } from '../../../constants';
import StatisticOverview from '../../../components/coach/Dashboard/StatisticOverview';
import profileImg from '../../../assets/images/avatar.png';
import LastGameSection from '../../../components/coach/Dashboard/LastGame';
import MatchUp from '../../../components/coach/Dashboard/MatchUp';
import { Padding } from '../../GlobalStyles';
import Notification from '../../../components/coach/Dashboard/Notification';
import { useAuth } from '../../../hooks/useAuth';
import useCoachDash from '../../../hooks/useCoachDash';
import Empty from '../../../components/coach/Dashboard/Empty';
import PracticeNotification from '../../../components/coach/Dashboard/PracticeNotification';
export default function CoachDashboard() {
  const navigation = useNavigation();
  const [isNotify, setNotify] = useState(false);
  const [isPracticeNotify, setPracticeNotify] = useState(false);
  const { user } = useAuth();
  const [teamIndex, selectTeam, teams] = useCoachDash(user?.userId);
  useEffect(() => {
    setTimeout(() => setNotify(true), 4000);
  }, []);

  useEffect(() => {
    setTimeout(() => setPracticeNotify(true), 8000);
  }, []);

  function addTeam() {
    navigation.navigate('MyTeam');
  }
  return (
    <>
      <Notification
        containerStyle={{ display: isNotify ? 'flex' : 'none' }}
        close={() => setNotify(false)}
      />
      <PracticeNotification
        isVisible={isPracticeNotify}
        onClick={() => setPracticeNotify(false)}
      />
      <ScrollView
        style={styles.playerDash}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.playerDashScrollViewContent}>
        <View style={[styles.frameParent, styles.frameParentSpaceBlock1]}>
          <DashBoardHeader
            imgSrc={user?.personalInfo?.profilePictureURL}
            name={
              user?.personalInfo?.firstName
                ? `${user?.personalInfo?.firstName} ${user?.personalInfo?.lastName}`
                : null
            }
            onClick={() =>
              navigation.navigate('Account', { screen: 'AccountDetails' })
            }
          />
          {teams.length === 0 ? (
            <Empty onAddTeam={addTeam} />
          ) : (
            <>
              <TeamsBar
                current={teamIndex}
                onSelect={selectTeam}
                teams={teams}
                handleAddTeam={addTeam}
              />
              <UpcomingGames />
              <StatisticOverview />
              <LastGameSection />
              <View style={styles.compareButtonContainer}>
                <Button
                  label={'Compare Teams'}
                  onPress={() => {
                    navigation.navigate('TeamCompare');
                  }}
                  backgroundColor={customTheme.colors.darkYellow}
                  style={{
                    width: Dimensions.get('window').width * 0.9,
                    marginBottom: 20,
                  }}
                />
              </View>
              <MatchUp />
              <MyChallenges />
            </>
          )}
        </View>
      </ScrollView>
    </>
  );
}

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
    // paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  frameParent: {
    // alignItems: "center",
    position: 'relative',
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
