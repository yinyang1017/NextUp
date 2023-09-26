/* eslint-disable react/no-unstable-nested-components */
import { StyleSheet, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { customTheme } from '../constants';
import PlayerDashboard from '../views/players/DashBoard';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faCalendar,
  faHomeAlt,
  faUser,
  faUserFriends,
} from '@fortawesome/free-solid-svg-icons';
import ScheduleCalendar from '../views/common/calendar/ScheduleCalendar';
import MyTeamsStack from '../views/players/MyTeams/MyTeamsStack';
import Inbox from '../views/common/inbox/Inbox';
import MyAccount from '../views/common/account/PlayerAccount';
import { wp } from '../utils/responsive';
import { Image } from 'react-native-ui-lib';

const Tab = createBottomTabNavigator();

const CoachStack = () => {
  const tabBarLabel = focused => ({
    color: customTheme.colors.light,
    opacity: focused ? 1 : 0.4,
    fontSize: customTheme.fontSizes.size_12,
  });

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: customTheme.colors.background,
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen
        name="DashBoard"
        component={PlayerDashboard}
        options={{
          tabBarLabel: ({ focused }) => {
            return <Text style={tabBarLabel(focused)}>Dashboard</Text>;
          },
          tabBarIcon: ({ focused }) => {
            return (
              <FontAwesomeIcon
                icon={faHomeAlt}
                color={customTheme.colors.light}
                style={{ opacity: focused ? 1 : 0.8 }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
          tabBarBadge: 2,
          tabBarBadgeStyle: { fontSize: 10 },
          tabBarLabel: ({ focused }) => {
            return <Text style={tabBarLabel(focused)}>Message</Text>;
          },
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={require('../assets/chatteardroptext.png')}
                style={{
                  height: wp(5.5),
                  width: wp(5.5),
                  tintColor: customTheme.colors.light,
                  opacity: focused ? 1 : 0.4,
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={ScheduleCalendar}
        options={{
          tabBarLabel: ({ focused }) => {
            return <Text style={tabBarLabel(focused)}>Calendar</Text>;
          },
          tabBarIcon: ({ focused }) => {
            return (
              <FontAwesomeIcon
                icon={faCalendar}
                color={customTheme.colors.light}
                style={{ opacity: focused ? 1 : 0.4 }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="MyTeam"
        component={MyTeamsStack}
        options={{
          tabBarLabel: ({ focused }) => {
            return <Text style={tabBarLabel(focused)}>My Team</Text>;
          },
          tabBarIcon: ({ focused }) => {
            return (
              <FontAwesomeIcon
                icon={faUserFriends}
                color={customTheme.colors.light}
                style={{ opacity: focused ? 1 : 0.4 }}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Account"
        component={MyAccount}
        options={{
          tabBarLabel: ({ focused }) => {
            return <Text style={tabBarLabel(focused)}>Account</Text>;
          },
          tabBarIcon: ({ focused }) => {
            return (
              <FontAwesomeIcon
                icon={faUser}
                color={customTheme.colors.light}
                style={{ opacity: focused ? 1 : 0.4 }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default CoachStack;

const styles = StyleSheet.create({});
