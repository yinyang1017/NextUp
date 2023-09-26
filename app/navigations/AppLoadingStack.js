import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import SplashScreen from 'react-native-splash-screen';
import { PlayerStack } from './PlayerStack';

import OnBoardingStack from './OnBoardingStack';
import { useAuth } from '../hooks/useAuth';
import WelcomeScreen from '../views/common/welcome/WelcomeScreen';
export default function AppLoadignStack() {
    const Stack = createNativeStackNavigator();
    const { user, isAuthenticated, onBoardingDone } = useAuth()
    console.log(isAuthenticated, 'user')
    console.log(onBoardingDone, 'onBoardingDone')
    console.log(user, 'user')
    return <>

        <Stack.Navigator initialRouteName='OnboadingStack' screenOptions={{
            headerShown: false,
            cardStyle: {
                padding: 20
            }
        }}>
            {/* <Stack.Screen name='OnboadingStack' component={OnBoardingStack} /> */}
            {
                !isAuthenticated && <Stack.Screen name='Welcome' component={WelcomeScreen} />
            }
            {
                isAuthenticated && !onBoardingDone && <Stack.Screen name='OnboadingStack' component={OnBoardingStack} />
            }
            {
                isAuthenticated && onBoardingDone && <Stack.Screen name='PlayerStack' component={PlayerStack} />
            }
        </Stack.Navigator>
    </>
}