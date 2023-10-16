import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '../hooks/useAuth';
import PlayerAccount from '../views/common/account/PlayerAccount';

import PlayerAccountDetails from '../views/players/PlayerProfile/PlayerAccountDetails';
import EditProfile from '../views/common/account/EditProfile';

export default function MyAccountStack() {

    const Stack = createNativeStackNavigator();
    const _renderPlayerStack = () => (<Stack.Navigator
        initialRouteName="TellUsMore"
        screenOptions={{
            headerShown: false,
            cardStyle: {
                padding: 20,
            },
        }}>
        <Stack.Screen name='PlayerAccount' component={PlayerAccount} />
        <Stack.Screen name='PlayerAccountDetails' component={PlayerAccountDetails} />
        <Stack.Screen name='EditProfile' component={EditProfile} />
    </Stack.Navigator>)
    return _renderPlayerStack();
}
