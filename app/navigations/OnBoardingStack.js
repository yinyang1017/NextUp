import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../views/common/welcome/WelcomeScreen';
import TellUsMore from '../views/common/on-boarding/TellUsMore';
import PlayerDetails from '../views/common/on-boarding/PlayerDetails';
import PlayerStyle from '../views/common/on-boarding/PlayerStyle';
import PhotoUpload from '../views/common/on-boarding/PhotoUpload';
import OnBoardingProvider from '../context/OnBoardingProviider';
export default function OnBoardingStack() {
  const Stack = createNativeStackNavigator();
  return (
    <OnBoardingProvider>
      <Stack.Navigator
        initialRouteName="TellUsMore"
        screenOptions={{
          headerShown: false,
          cardStyle: {
            padding: 20,
          },
        }}>
        {/* <Stack.Screen name='Welcome' component={WelcomeScreen} /> */}
        <Stack.Screen name="TellUsMore" component={TellUsMore} />
        <Stack.Screen name="PlayerDetails" component={PlayerDetails} />
        <Stack.Screen name="PlayerStyle" component={PlayerStyle} />
        <Stack.Screen name="PhotoUpload" component={PhotoUpload} />
      </Stack.Navigator>
    </OnBoardingProvider>
  );
}
