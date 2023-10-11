import { StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect, useMemo, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import TeamItem from '../../../components/common/TeamItem';
import { hp, wp } from '../../../utils/responsive';
import { SearchInput } from '../../../components/common/searchbar';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { customTheme } from '../../../constants';
import InboxChatsList from '../../../components/common/inbox/InboxChatsList';
import { useIsFocused } from '@react-navigation/native';
import { useAuth } from '../../../hooks/useAuth';
import { useGetAllChatChannels } from '../../../api/chat.api';
import { View } from 'react-native-ui-lib';

const InboxTopTabs = createMaterialTopTabNavigator();

const staticData = {
  teamId: 2001,
  teamName: 'Hardcoded TeamName',
  teamLogoUrl: 'https://example.com/hardcoded-logo.png',
  teamDetails: {
    teamId: 2001,
    teamName: 'Hardcoded TeamName',
    teamLogoUrl: 'https://example.com/hardcoded-logo.png',
    groupChats: [
      {
        channelId: 169633689373204,
        recentMessage: 'Dsdsdsds',
        groupName: 'Hardcoded GroupName',
        groupLogoUrl: 'https://example.com/hardcoded-group-logo.png',
        createdAt: null,
        recentSenderId: '80f16748-00d8-4bde-be0c-66c17eebb7ea',
        recentMessageType: null,
      },
    ],
    oneOnOneChats: [],
  },
  coachDetails: {
    teamId: 2001,
    teamName: 'Hardcoded CoachName',
    teamLogoUrl: 'https://example.com/hardcoded-coach-logo.png',
    groupChats: [
      {
        channelId: 169633686729003,
        recentMessage: 'Hello',
        groupName: 'Hardcoded CoachGroupName',
        groupLogoUrl: 'https://example.com/hardcoded-coach-group-logo.png',
        createdAt: null,
        recentSenderId: '7e0f87b2-fc79-4ba2-bd44-ac11af0fe9af',
        recentMessageType: null,
      },
    ],
    oneOnOneChats: [],
  },
};

const Inbox = () => {
  const { user } = useAuth();
  const { mutate: getAllChatChannels, data: allChatChannelsData } =
    useGetAllChatChannels();

  const [selectedTeamId, setSelectedTeamId] = useState(0);
  const [teamChatList, setTeamChatList] = useState([]);
  const [coachChatList, setCoachChatList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const tabScreenOptions = useMemo(
    () => ({
      headerShown: true,
      tabBarIndicatorStyle: { backgroundColor: customTheme.colors.light },
      tabBarLabelStyle: styles.tabBarLabel,
      tabBarStyle: styles.tabBar,
    }),
    [],
  );

  const isFocus = useIsFocused();

  useEffect(() => {
    if (isFocus) {
      getAllChatChannels(
        { userId: user?.id || 1013 },
        {
          onSuccess: data => {
            const firstItem = data.data[0];
            setSelectedTeamId(firstItem?.teamId);
            if (firstItem) {
              setTeamChatList([
                ...(firstItem?.teamDetails?.groupChats || []),
                ...(firstItem?.teamDetails?.oneOnOneChats || []),
              ]);
              setCoachChatList([
                ...(firstItem?.coachDetails?.groupChats || []),
                ...(firstItem?.coachDetails?.oneOnOneChats || []),
              ]);
            } else {
              setTeamChatList([
                ...staticData.teamDetails.groupChats,
                ...staticData.teamDetails.oneOnOneChats,
              ]);
              setCoachChatList([
                ...staticData.coachDetails.groupChats,
                ...staticData.coachDetails.oneOnOneChats,
              ]);
            }
          },
        },
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocus]);

  const teamInbox = useMemo(
    // eslint-disable-next-line react/no-unstable-nested-components
    () => () => <InboxChatsList channelData={teamChatList} />,
    [teamChatList],
  );

  const coachInbox = useMemo(
    // eslint-disable-next-line react/no-unstable-nested-components
    () => () => <InboxChatsList channelData={coachChatList} />,
    [coachChatList],
  );

  const setChatListData = id => {
    const foundTeam = allChatChannelsData?.data?.find(
      cItem => cItem?.teamId === id,
    );
    if (foundTeam) {
      setTeamChatList([
        ...(foundTeam?.teamDetails?.groupChats || []),
        ...(foundTeam?.teamDetails?.oneOnOneChats || []),
      ]);
      setCoachChatList([
        ...(foundTeam?.coachDetails?.groupChats || []),
        ...(foundTeam?.coachDetails?.oneOnOneChats || []),
      ]);
    }
  };

  const onChangeTeamHandler = item => {
    setSelectedTeamId(item?.teamId);
    setChatListData(item?.teamId);
  };

  const onSearchTextChangeHandler = text => {
    const searchText = text?.trim().toLowerCase();

    if (searchText) {
      const foundTeamData = allChatChannelsData?.data?.find(
        cItem => cItem?.teamId === selectedTeamId,
      );
      if (activeIndex === 0) {
        const listdata = [
          ...(foundTeamData?.teamDetails?.groupChats || []),
          ...(foundTeamData?.teamDetails?.oneOnOneChats || []),
        ];

        const filterData = listdata?.filter(cItem =>
          cItem?.groupName?.toLowerCase()?.includes(searchText),
        );

        setTeamChatList(filterData);
      } else {
        const listdata = [
          ...(foundTeamData?.coachDetails?.groupChats || []),
          ...(foundTeamData?.coachDetails?.oneOnOneChats || []),
        ];

        const filterData = listdata.filter(cItem =>
          cItem?.groupName?.toLowerCase()?.includes(searchText),
        );

        setCoachChatList(filterData);
      }
    } else {
      setChatListData(selectedTeamId);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerTeamsContainer}>
        {allChatChannelsData?.data?.map(item => (
          <TouchableOpacity
            key={item?.teamId}
            onPress={() => onChangeTeamHandler(item)}>
            <TeamItem
              imageSource={{ uri: item?.teamLogoUrl }}
              name={item.teamName}
              isActive={item?.teamId === selectedTeamId}
            />
          </TouchableOpacity>
        ))}
      </View>
      <SearchInput
        style={styles.searchInput}
        placeholder={'Search Players and Coach'}
        onChange={onSearchTextChangeHandler}
      />
      <InboxTopTabs.Navigator screenOptions={tabScreenOptions}>
        <InboxTopTabs.Screen
          name="Team"
          listeners={{
            focus: () => {
              setActiveIndex(0);
            },
          }}>
          {teamInbox}
        </InboxTopTabs.Screen>
        <InboxTopTabs.Screen
          name="Coaches"
          listeners={{
            focus: () => {
              setActiveIndex(1);
            },
          }}>
          {coachInbox}
        </InboxTopTabs.Screen>
      </InboxTopTabs.Navigator>
    </SafeAreaView>
  );
};

export default Inbox;

const styles = StyleSheet.create({
  container: { flex: 1 },
  headerTeamsContainer: {
    marginTop: hp(2),
    paddingHorizontal: wp(4.5),
    alignSelf: 'center',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: wp(9),
  },
  searchInput: { marginHorizontal: wp(4), marginTop: hp(2) },
  tabBar: {
    backgroundColor: customTheme.colors.background,
    width: '75%',
    alignSelf: 'center',
    elevation: 0,
  },
  tabBarLabel: { color: customTheme.colors.light, textTransform: 'capitalize' },
});
