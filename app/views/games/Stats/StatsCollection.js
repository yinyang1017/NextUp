import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Image, Switch, Text, View } from 'react-native-ui-lib';
import Orientation from 'react-native-orientation-locker';
import { ViewContainer } from '../../../components/common/ViewConatiner';
import { hp, wp } from '../../../utils/responsive';
import Back from '../../../utils/HeaderButtons/Back';
import { customTheme } from '../../../constants';
import { Team } from '../../../components/games/StatsCollection/IconItems';
import ScoreIcon from '../../../components/games/StatsCollection/ScoreIcon';
import { FontSize } from '../../GlobalStyles';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './Main';
import Lineup from './Lineup';
import Substitute from './Substitute';
export default function StatsCollection() {
  const Stack = createNativeStackNavigator();
  useEffect(() => {
    Orientation.lockToLandscapeLeft();
    return () => Orientation.unlockAllOrientations();
  }, []);
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Lineup" component={Lineup} />
      <Stack.Screen name="Substitute" component={Substitute} />
    </Stack.Navigator>
  );
}
