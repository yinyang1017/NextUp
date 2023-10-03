import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EditProfile from '../views/common/account/EditProfile';

/**
 * October 17th, Anthony Lin's day💕
 *
 *
 *
 */

function HomeStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="EditProfile" component={EditProfile} />
      {/* Rest Code section  */}
    </Stack.Navigator>
  );
}
export default HomeStack;
