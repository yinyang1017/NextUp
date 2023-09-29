import React from 'react';
import {customTheme} from '../constants';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PlayerDashboard from '../views/players/DashBoard.js';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCalendar,
  faDashboard,
  faHome,
  faHomeAlt,
  faMessage,
  faUser,
  faUserFriends,
  faUserSecret,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import ScheduleCalendar from '../views/common/calendar/ScheduleCalendar';
import {Text} from 'react-native-ui-lib';
import {StyleSheet} from 'react-native';
import MyAccount from '../views/common/account/PlayerAccount';
import MyTeamsStack from '../views/players/MyTeams/MyTeamsStack';

const Tab = createBottomTabNavigator();
export function PlayerStack() {
  const tabBarLabel = focused => ({
    color: customTheme.colors.light,
    opacity: focused ? 1 : 0.4,
    fontSize: focused
      ? customTheme.fontSizes.size_8
      : customTheme.fontSizes.size_12,
  });
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: customTheme.colors.background,
        },
      }}>
      <Tab.Screen
        name="DashBoard"
        component={PlayerDashboard}
        options={{
          tabBarLabel: ({focused}) => {
            return <Text style={tabBarLabel(focused)}>DashBoard</Text>;
          },
          tabBarIcon: ({focused}) => {
            return (
              <FontAwesomeIcon
                icon={faHomeAlt}
                color={customTheme.colors.light}
                style={{
                  opacity: focused ? 1 : 0.8,
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
          tabBarLabel: ({focused}) => {
            return <Text style={tabBarLabel(focused)}>Calendar</Text>;
          },
          tabBarIcon: ({focused}) => {
            return (
              <FontAwesomeIcon
                icon={faCalendar}
                color={customTheme.colors.light}
                style={{
                  opacity: focused ? 1 : 0.4,
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="MyTeam"
        component={MyTeamsStack}
        options={{
          tabBarLabel: ({focused}) => {
            return <Text style={tabBarLabel(focused)}>My Teams</Text>;
          },
          tabBarIcon: ({focused}) => {
            return (
              <FontAwesomeIcon
                icon={faUserFriends}
                color={customTheme.colors.light}
                style={{
                  opacity: focused ? 1 : 0.4,
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={ScheduleCalendar}
        options={{
          tabBarLabel: ({focused}) => {
            return <Text style={tabBarLabel(focused)}>Inbox</Text>;
          },
          tabBarIcon: ({focused}) => {
            return (
              <FontAwesomeIcon
                icon={faMessage}
                color={customTheme.colors.light}
                style={{
                  opacity: focused ? 1 : 0.4,
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={MyAccount}
        options={{
          tabBarLabel: ({focused}) => {
            return <Text style={tabBarLabel(focused)}>My Account</Text>;
          },
          tabBarIcon: ({focused}) => {
            return (
              <FontAwesomeIcon
                icon={faUser}
                color={customTheme.colors.light}
                style={{
                  opacity: focused ? 1 : 0.4,
                }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
