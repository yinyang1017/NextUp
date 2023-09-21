import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import SplashScreen from 'react-native-splash-screen';
import { PlayerStack } from './PlayerStack';
import WelcomeScreen from '../views/common/welcome/WelcomeScreen';
export default function AppLoadignStack() {
    const Stack = createNativeStackNavigator();
    const userToken = null
    // useEffect(() => {
    //     SplashScreen.hide();
    // }, []);
    return <>
        <Stack.Navigator screenOptions={{
            headerShown: false,
            cardStyle: {
                padding: 20
            }
        }}>
            {
                userToken
                    ? <Stack.Screen name="PlayerStack" component={PlayerStack} />
                    : <Stack.Screen name='Welcome' component={WelcomeScreen} />
            }


        </Stack.Navigator>
    </>
}