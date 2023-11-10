import React, { useState, useEffect, createContext } from 'react';
import { StyleSheet } from 'react-native';
import VSCard1 from '../../../components/games/LiveGame/VSCard2';
import Back from '../../../utils/HeaderButtons/Back';
import { SafeAreaView } from 'react-native-safe-area-context';
import { hp, wp } from '../../../utils/responsive';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Overview from './Overview';
import LineUp from './LineUp';
import { Colors } from '../../../constants';
import { FontSize } from '../../GlobalStyles';
import GameHeader from './GameHeader';
export const GAME = {
  BEFORE: 0,
  PLAYING: 1,
  FINISHED: 2,
};
export const LiveGameContext = createContext(null);
export default function LiveGame({}) {
  const [status, setStatus] = useState(GAME.BEFORE);
  const Tab = createMaterialTopTabNavigator();
  const screenOptions = {
    headerShown: true,
    // tabBarScrollEnabled: true,
    tabBarIndicatorStyle: {
      backgroundColor: 'white',
      height: 2,
    },
    tabBarActiveTintColor: '#e91e63',
    tabBarStyle: {
      elevation: 0,
      backgroundColor: Colors.base,
    },
    tabBarLabelStyle: {
      textTransform: 'capitalize',
      fontSize: FontSize.bodyMediumSemibold_size,
      fontWeight: '400',
      color: Colors.light,
    },
  };
  useEffect(() => {
    setTimeout(() => setStatus(GAME.PLAYING), 6000);
    setTimeout(() => setStatus(GAME.FINISHED), 10000);
  }, []);
  return (
    <LiveGameContext.Provider value={status}>
      <SafeAreaView style={styles.container}>
        <Back
          containerStyle={styles.backButtonContainer}
          title={
            status === GAME.BEFORE
              ? 'Upcoming Games'
              : status === GAME.PLAYING
              ? 'Back to Home'
              : 'Game Result'
          }
        />
        <GameHeader />
        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen name="Overview" component={Overview} />
          <Tab.Screen name="LineUp" component={LineUp} />
        </Tab.Navigator>
      </SafeAreaView>
    </LiveGameContext.Provider>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1 },
  backButtonContainer: {
    marginHorizontal: wp(5),
    marginTop: hp(1),
    marginBottom: hp(3),
  },
});
