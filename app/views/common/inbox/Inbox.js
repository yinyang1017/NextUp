import { StyleSheet, View } from 'react-native';
import React, { useMemo } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import TeamItem from '../../../components/common/TeamItem';
import { hp, wp } from '../../../utils/responsive';
import { SearchInput } from '../../../components/common/searchbar';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { customTheme } from '../../../constants';
import InboxChatsList from '../../../components/common/inbox/InboxChatsList';

const InboxTopTabs = createMaterialTopTabNavigator();

const Inbox = () => {
  const tabScreenOptions = useMemo(
    () => ({
      headerShown: true,
      tabBarIndicatorStyle: { backgroundColor: customTheme.colors.light },
      tabBarLabelStyle: styles.tabBarLabel,
      tabBarStyle: styles.tabBar,
      tabBarIndicatorContainerStyle: { height: hp(5) },
    }),
    [],
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerTeamsContainer}>
        <TeamItem
          imageSource={require('../../../assets/crownsimple1.png')}
          name="Road2Pro"
        />
        <TeamItem
          imageSource={require('../../../assets/frame8.png')}
          name="Rotary AAU 17"
        />
        <TeamItem
          imageSource={require('../../../assets/frame9.png')}
          name="O’Dea HS"
          isActive
        />
      </View>
      <SearchInput
        style={styles.searchInput}
        placeholder={'Search Players and Coach'}
      />

      <InboxTopTabs.Navigator screenOptions={tabScreenOptions}>
        <InboxTopTabs.Screen name="Team" component={InboxChatsList} />
        <InboxTopTabs.Screen name="Coaches" component={InboxChatsList} />
      </InboxTopTabs.Navigator>
    </SafeAreaView>
  );
};

export default Inbox;

const styles = StyleSheet.create({
  container: { flex: 1 },
  headerTeamsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp(2),
    paddingHorizontal: wp(4.5),
  },
  searchInput: { marginHorizontal: wp(4), marginTop: hp(2) },
  tabBar: {
    backgroundColor: customTheme.colors.background,
    width: '75%',
    alignSelf: 'center',
    elevation: 0,
  },
  tabBarLabel: {
    color: customTheme.colors.light,
    textTransform: 'capitalize',
  },
});
