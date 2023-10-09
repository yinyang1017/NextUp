import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoardingStack from './OnBoardingStack';
import { useAuth } from '../hooks/useAuth';
import WelcomeScreen from '../views/common/welcome/WelcomeScreen';
import CoachStack from './CoachStack';
import ChatScreen from '../views/common/inbox/ChatScreen';
import AddNewTeam from '../views/team/AddNewTeam';
import SearchPlayers from '../views/players/MyTeams/SearchPlayers';
import InvitePlayers from '../views/players/MyTeams/InvitePlayers';
import AllStandings from '../views/players/MyTeams/AllStandings';
import GameStatistics from '../views/players/MyTeams/GameStatistics';
import AdvanceStats from '../views/players/MyTeams/AdvanceStats';
import AddLineup from '../views/players/MyTeams/AddLineup';
import LineupDetails from '../views/players/MyTeams/LineupDetails';
import { CreatePractice } from '../views/players/MyTeams/CreatePractice';
import { PlayerStack } from './PlayerStack';

export default function AppLoadignStack() {
  const Stack = createNativeStackNavigator();
  const { isAuthenticated, onBoardingDone, isCoach, isPlayer } = useAuth();

  return (
    <Stack.Navigator
      initialRouteName="OnboadingStack"
      screenOptions={{ headerShown: false, cardStyle: { padding: 20 } }}>
      {/* {isAuthenticated && (
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
      )}
      {!isAuthenticated && !onBoardingDone && (
        <Stack.Screen name="OnboadingStack" component={OnBoardingStack} />
      )} */}
      {isAuthenticated && onBoardingDone && isCoach && (
        <Stack.Group>
          <Stack.Screen name="CoachStack" component={CoachStack} />
          <Stack.Screen name="ChatScreen" component={ChatScreen} />
          <Stack.Screen name="AddNewTeam" component={AddNewTeam} />
          <Stack.Screen name="SearchPlayers" component={SearchPlayers} />
          <Stack.Screen name="InvitePlayers" component={InvitePlayers} />
          <Stack.Screen name="AllStandings" component={AllStandings} />
          <Stack.Screen name="GameStatistics" component={GameStatistics} />
          <Stack.Screen name="AdvanceStats" component={AdvanceStats} />
          <Stack.Screen name="AddLineup" component={AddLineup} />
          <Stack.Screen name="LineupDetails" component={LineupDetails} />
          <Stack.Screen name="CreatePractice" component={CreatePractice} />
        </Stack.Group>
      )}
      {/* {isAuthenticated && onBoardingDone && isPlayer && ( */}
      <Stack.Group>
        <Stack.Screen name="CoachStack" component={PlayerStack} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="AddNewTeam" component={AddNewTeam} />
        <Stack.Screen name="SearchPlayers" component={SearchPlayers} />
        <Stack.Screen name="InvitePlayers" component={InvitePlayers} />
        <Stack.Screen name="AllStandings" component={AllStandings} />
        <Stack.Screen name="GameStatistics" component={GameStatistics} />
        <Stack.Screen name="AdvanceStats" component={AdvanceStats} />
        <Stack.Screen name="AddLineup" component={AddLineup} />
        <Stack.Screen name="LineupDetails" component={LineupDetails} />
        <Stack.Screen name="CreatePractice" component={CreatePractice} />
      </Stack.Group>
      {/* )} */}
    </Stack.Navigator>
  );
}
