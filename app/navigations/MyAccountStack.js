import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '../hooks/useAuth';
import PlayerAccount from '../views/common/account/PlayerAccount';

import PlayerAccountDetails from '../views/players/PlayerProfile/PlayerAccountDetails';
import EditProfile from '../views/common/account/EditProfile';
import CoachProfile from '../views/coach/Profile';
export default function MyAccountStack() {
  const { isCoach } = useAuth();
  useEffect(() => {
    console.log('MyAccountStack');
  }, []);
  const Stack = createNativeStackNavigator();
  const _renderPlayerStack = () => (
    <Stack.Navigator
      initialRouteName="Account"
      screenOptions={{
        headerShown: false,
        cardStyle: {
          padding: 20,
        },
      }}>
      <Stack.Screen
        name="Account"
        component={PlayerAccount}
        initialParams={{ initialRoute: 'Account' }}
      />
      <Stack.Screen
        name="AccountDetails"
        component={isCoach ? CoachProfile : PlayerAccountDetails}
      />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
  return _renderPlayerStack();
}
