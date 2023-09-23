import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import SplashScreen from 'react-native-splash-screen';
import { PlayerStack } from './PlayerStack';

import OnBoardingStack from './OnBoardingStack';
export default function AppLoadignStack() {
    const Stack = createNativeStackNavigator();
    const userToken = null
    return <>

        <Stack.Navigator initialRouteName='OnboadingStack' screenOptions={{
            headerShown: false,
            cardStyle: {
                padding: 20
            }
        }}>

            <Stack.Screen name="PlayerStack" component={PlayerStack} />
            <Stack.Screen name='OnboadingStack' component={OnBoardingStack} />



        </Stack.Navigator>
    </>
}