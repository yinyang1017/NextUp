import React from 'react';
import { StyleSheet } from 'react-native';
import VSCard1 from '../../../components/games/LiveGame/VSCard1';
import Back from '../../../utils/HeaderButtons/Back';
import { SafeAreaView } from 'react-native-safe-area-context';
import { hp, wp } from '../../../utils/responsive';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Overview from './Overview';
import LineUp from './LineUp';
import { Colors } from '../../../constants'; 
import { FontSize } from '../../GlobalStyles';
export default function LiveGame({}) {
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
  return (
    <SafeAreaView style={styles.container}>
      <Back
        containerStyle={styles.backButtonContainer}
        title="Upcoming Games"
      />
      <VSCard1 title="MPL D-League Aug 09,13:03" />
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Overview" component={Overview} />
        <Tab.Screen name="LineUp" component={LineUp} />
      </Tab.Navigator>
    </SafeAreaView>
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
