import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoardingStack from './OnBoardingStack';
import { useAuth } from '../hooks/useAuth';
import WelcomeScreen from '../views/common/welcome/WelcomeScreen';
import CoachStack from './CoachStack';
import ChatScreen from '../views/common/inbox/ChatScreen';

export default function AppLoadignStack() {
  const Stack = createNativeStackNavigator();
  const { user, isAuthenticated, onBoardingDone } = useAuth();
  return (
    <>
      <Stack.Navigator
        initialRouteName="OnboadingStack"
        screenOptions={{
          headerShown: false,
          cardStyle: { padding: 20 },
        }}>
        {!isAuthenticated && (
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
        )}
        {isAuthenticated && !onBoardingDone && (
          <Stack.Screen name="OnboadingStack" component={OnBoardingStack} />
        )}
        {isAuthenticated && onBoardingDone && (
          <Stack.Group>
            <Stack.Screen name="CoachStack" component={CoachStack} />
            <Stack.Screen name="ChatScreen" component={ChatScreen} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </>
  );
}
