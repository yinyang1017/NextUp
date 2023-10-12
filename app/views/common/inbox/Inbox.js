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
import { Text, View } from 'react-native-ui-lib';

const InboxTopTabs = createMaterialTopTabNavigator();

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

  const getConcatedChats = (detailsObj = {}) => {
    return [
      ...(detailsObj?.groupChats
        ? detailsObj?.groupChats?.map(item => ({ ...item, type: 'GROUP' }))
        : []),
      ...(detailsObj?.oneOnOneChats
        ? detailsObj?.oneOnOneChats?.map(item => ({
            ...item,
            type: 'ONE_TO_ONE',
          }))
        : []),
    ];
  };

  const onSuccessGetAllChannelData = data => {
    const firstItem = data.data[0];
    setSelectedTeamId(firstItem?.teamId);
    if (firstItem) {
      setTeamChatList(getConcatedChats(firstItem?.teamDetails));
      setCoachChatList(getConcatedChats(firstItem?.coachDetails));
    }
  };

  useEffect(() => {
    if (isFocus) {
      getAllChatChannels(
        { userId: user?.id },
        { onSuccess: onSuccessGetAllChannelData },
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
      setTeamChatList(getConcatedChats(foundTeam?.teamDetails));
      setCoachChatList(getConcatedChats(foundTeam?.coachDetails));
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
        const listdata = getConcatedChats(foundTeamData?.teamDetails);
        const filterData = listdata?.filter(cItem => {
          if (cItem?.type === 'GROUP') {
            return cItem?.groupName?.toLowerCase()?.includes(searchText);
          } else {
            return cItem?.otherUserName?.toLowerCase()?.includes(searchText);
          }
        });
        setTeamChatList(filterData);
      } else {
        const listdata = getConcatedChats(foundTeamData?.coachDetails);
        const filterData = listdata.filter(cItem => {
          if (cItem?.type === 'GROUP') {
            return cItem?.groupName?.toLowerCase()?.includes(searchText);
          } else {
            return cItem?.otherUserName?.toLowerCase()?.includes(searchText);
          }
        });
        setCoachChatList(filterData);
      }
    } else {
      setChatListData(selectedTeamId);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {allChatChannelsData?.data?.length ? (
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
      ) : (
        <View center height={hp(16)}>
          <Text large-3xl-700>No Teams Found</Text>
        </View>
      )}
      <SearchInput
        style={styles.searchInput}
        placeholder={'Search Players and Coach'}
        onChange={onSearchTextChangeHandler}
      />
      <InboxTopTabs.Navigator screenOptions={tabScreenOptions}>
        <InboxTopTabs.Screen
          name="Team"
          listeners={{ focus: () => setActiveIndex(0) }}>
          {teamInbox}
        </InboxTopTabs.Screen>
        <InboxTopTabs.Screen
          name="Coaches"
          listeners={{ focus: () => setActiveIndex(1) }}>
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
