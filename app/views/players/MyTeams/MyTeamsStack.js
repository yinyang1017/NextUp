import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { customTheme } from '../../../constants';
import Games from './Games';
import { TeamsBar } from '../../../components/players/Dashboard/MyTeams';
import Roaster from './Roaster';
import PlayerStats from './Stats';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native-ui-lib';
import { Color, FontSize } from '../../GlobalStyles';
import { MyColors } from '../../../constants/colors';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { hp, wp } from '../../../utils/responsive';

const TopTab = createMaterialTopTabNavigator();

const CustomTabView = props => {
  const routeNames = props.navigationState.routeNames || [];

  const onPressTabhandler = (route, isFocused) => {
    const event = props.navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });
    if (!isFocused && !event.defaultPrevented) {
      // The `merge: true` option makes sure that the params inside the tab screen are preserved
      props.navigation.navigate({ name: route.name, merge: true });
    }
  };

  return (
    <View style={styles.tabContainer}>
      {routeNames.map((item, index) => {
        const isActive = props.navigationState.index === index;
        return (
          <TouchableOpacity
            key={index}
            activeOpacity={0.5}
            onPress={() =>
              onPressTabhandler(props.state.routes[index], isActive)
            }>
            <Text
              numberOfLines={1}
              style={[styles.tabItemText, isActive && styles.activeTabItemtext]}
              key={index}>
              {item}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const tabScreenOptions = { headerShown: true };

export default function MyTeamsStack() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top']}>
      <View style={{ paddingHorizontal: customTheme.spacings.spacing_16 }}>
        <TeamsBar />
      </View>
      <TopTab.Navigator tabBar={CustomTabView} screenOptions={tabScreenOptions}>
        <TopTab.Screen name="Roaster" component={Roaster} />
        <TopTab.Screen name="Games" component={Games} />
        <TopTab.Screen name="Stats" component={PlayerStats} />
        <TopTab.Screen name="Lineup" component={PlayerStats} />
        <TopTab.Screen name="Coaches" component={PlayerStats} />
      </TopTab.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
    marginTop: hp(2),
  },
  tabItemText: {
    textTransform: 'capitalize',
    fontSize: FontSize.bodyMediumSemibold_size,
    fontWeight: '400',
    color: Color.darkgray_100,
  },
  activeTabItemtext: { color: MyColors.light, fontWeight: '600' },
});
