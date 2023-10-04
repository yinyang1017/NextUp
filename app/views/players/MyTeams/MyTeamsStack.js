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
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { hp, wp } from '../../../utils/responsive';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AdvanceStats from './AdvanceStats';
import Roles from './Roles';
import Lineup from './Lineup';
import { Challenges } from './Challenges';
import Schedule from './Schedule';

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
    <View>
      <ScrollView
        contentContainerStyle={styles.tabContainer}
        horizontal
        showsHorizontalScrollIndicator={false}>
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
                style={[
                  styles.tabItemText,
                  isActive && styles.activeTabItemtext,
                ]}
                key={index}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const tabScreenOptions = { headerShown: true };

const Stack = createNativeStackNavigator();

export const NewMyTeamsStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MyTeams" component={MyTeamsStack} />
      <Stack.Screen name="AdvanceStats" component={AdvanceStats} />
    </Stack.Navigator>
  );
};

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
        <TopTab.Screen name="Lineup" component={Lineup} />
        <TopTab.Screen name="Staff" component={Roles} />
        <TopTab.Screen name="Schedule" component={Schedule} />
        <TopTab.Screen name="Challenges" component={Challenges} />
      </TopTab.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(4),
    marginTop: hp(2),
    gap: wp(10),
  },
  tabItemText: {
    textTransform: 'capitalize',
    fontSize: FontSize.bodyMediumSemibold_size,
    fontWeight: '400',
    color: Color.darkgray_100,
  },
  activeTabItemtext: { color: MyColors.light, fontWeight: '600' },
});
