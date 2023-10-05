import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {ProfileHeader} from './ProfileHeader';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Color, FontSize} from '../../GlobalStyles';
import {Colors} from '../../../constants';
import AboutTab from './AboutTab';
import RosterTab from './RosterTab';
import coachImg from '../../../assets/images/coachPublicImage.png';

export default function CoachDashboard() {
  const Tab = createMaterialTopTabNavigator();
  const screenOptions = {
    headerShown: true,
    // tabBarScrollEnabled: true,
    tabBarIndicatorStyle: {
      backgroundColor: 'white',
      height: 2,
    },
    tabBarStyle: {
      backgroundColor: Colors.base,
      // height: 34,
    },
    tabBarLabelStyle: {
      textTransform: 'capitalize',
      fontSize: FontSize.bodyMediumSemibold_size,
      fontWeight: '400',
      color: Color.darkgray_100,
    },
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      bounces={false}
      contentContainerStyle={styles.container}>
      <ProfileHeader
        name={'Albert Flores'}
        experience={'5 Years'}
        position={'Head Coach'}
        record={'18-8'}
        coachImg={coachImg}
      />
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="About" component={AboutTab} />
        <Tab.Screen name="Roster" component={RosterTab} />
      </Tab.Navigator>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // minHeight: isNotch ? Layout.height - 100 : Layout.height - 80,
    paddingBottom: 20,
    // backgroundColor: "green",
  },
});
