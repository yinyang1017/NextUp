import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import SplashScreen from 'react-native-splash-screen';
import { PlayerStack } from './PlayerStack';
export default function AppLoadignStack() {
    const Stack = createNativeStackNavigator();
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
            <Stack.Screen name="PlayerStack" component={PlayerStack} />
        </Stack.Navigator>
    </>
}