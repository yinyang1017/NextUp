import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import StatsCollection from '../views/games/Stats/StatsCollection';
import LiveGame from '../views/games/LiveGame';
export default function GameStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Game"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Stats" component={StatsCollection} />
      <Stack.Screen name="Game" component={LiveGame} />
    </Stack.Navigator>
  );
}
