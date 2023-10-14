import * as React from 'react';
import { ScrollView, StyleSheet, View, Dimensions, Alert } from 'react-native';
import DashBoardHeader from '../../components/common/DashBoardHeader';
import { TeamsBar } from '../../components/players/Dashboard/MyTeams';
import { EventCarousel } from '../../components/players/Dashboard/EventsCarousel';
import StatsContainer from '../../components/players/Dashboard/StatsContainer.js';
import { MyChallenges } from '../../components/players/Dashboard/Challenges.js';
import { Button } from 'react-native-ui-lib';
import { customTheme } from '../../constants';
import { useAuth } from '../../hooks/useAuth';
import { ScrollViewContainer } from '../../components/common/SrollViewContainer';
const PlayerDashboard = () => {
  //   const navigation = useNavigation();
  const { user } = useAuth();


  return (
    <ScrollViewContainer>
      <>
        <DashBoardHeader name={user?.personalInfo?.firstName} imgSrc={user?.personalInfo?.profilePictureURL} />
        <TeamsBar />
        <EventCarousel />
        <StatsContainer />
        <MyChallenges />
        <Button
          centerH
          label={'Add Player Match Up'}
          onPress={() => {
            Alert.alert('player match up');
          }}

        />
      </>
    </ScrollViewContainer>
  );
};

const styles = StyleSheet.create({
  playerDash: {
    maxWidth: '100%',
    overflow: 'hidden',
    width: '100%',
    flex: 1,
    backgroundColor: customTheme.colors.light.background,
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
});

export default PlayerDashboard;
