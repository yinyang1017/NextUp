import {
  ActivityIndicator,
  FlatList,
  Platform,
  StyleSheet,
} from 'react-native';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Back from '../../../utils/HeaderButtons/Back';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { hp, wp } from '../../../utils/responsive';
import { SearchInput } from '../../../components/common/searchbar';
import SearchPlayerItem from '../../../components/players/Dashboard/SearchPlayerItem';
import PrimaryButton from '../../../components/common/PrimaryButton';
import Share from 'react-native-share';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useGetPlayersForInvite } from '../../../api/myteam.api';
import { Text, View } from 'react-native-ui-lib';
import { customTheme } from '../../../constants';
import { useAuth } from '../../../hooks/useAuth';

const SearchPlayers = () => {
  const navigation = useNavigation();
  const { bottom } = useSafeAreaInsets();
  const { user } = useAuth();
  const isFocused = useIsFocused();
  const {
    mutateAsync: getPlayersForInvite,
    data: playersListData,
    isLoading: isLoadingPlayersList,
  } = useGetPlayersForInvite();

  const [selectedPlayers, setSelectedPlayers] = useState([]);

  useEffect(() => {
    if (isFocused) {
      getPlayersForInvite({ userId: user?.id });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);

  const onSearchPlayers = async (searchText = '') => {
    try {
      getPlayersForInvite({ userId: user?.id, search: searchText });
    } catch (error) {}
  };

  const onPressShareHandler = () => {
    const url = 'https://awesome.contents.com/';
    const title = 'Nextup';
    const subTitle = 'Invite friend';
    const options = Platform.select({
      ios: {
        activityItemSources: [
          {
            // For using custom icon instead of default text icon at share preview when sharing with message.
            placeholderItem: {
              type: 'url',
              content: subTitle,
            },
            item: {
              default: {
                type: 'text',
                content: url,
              },
            },
            linkMetadata: {
              title: title,
              // icon: icon,
            },
          },
        ],
      },
      default: {
        title,
        subject: title,
        message: `${url}`,
      },
    });
    try {
      Share.open(options);
    } catch (error) {}
  };

  const onPressInviteHandler = () => {
    navigation.navigate('InvitePlayers');
  };

  const renderPlayerItem = useCallback(
    ({ item }) => {
      const isSelected = !!selectedPlayers.find(i => i === item?.id);
      const onPressCheckBoxHandler = () => {
        let newValues = [...selectedPlayers];
        if (isSelected) {
          newValues = newValues.filter(i => i !== item?.id);
        } else {
          newValues.push(item?.id);
        }
        setSelectedPlayers(newValues);
      };
      return (
        <SearchPlayerItem
          onPress={() => navigation.navigate('CoachViewPlayerDetails')}
          isSelected={isSelected}
          onCheckBoxPress={onPressCheckBoxHandler}
          data={item}
        />
      );
    },
    [navigation, selectedPlayers],
  );

  const ListEmptyComponent = useMemo(
    () => (
      <View center height={hp(52)}>
        {isLoadingPlayersList ? (
          <ActivityIndicator size={'small'} color={customTheme.colors.light} />
        ) : (
          <Text large-3xl-700>No Players Found</Text>
        )}
      </View>
    ),
    [isLoadingPlayersList],
  );

  return (
    <View flex style={{ paddingBottom: bottom }}>
      <Back containerStyle={styles.backContainer} />
      <SearchInput style={styles.searchInput} onChange={onSearchPlayers} />
      <FlatList
        data={playersListData?.data || []}
        renderItem={renderPlayerItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={[
          styles.listContentContainer,
          { paddingBottom: bottom + hp(5) },
        ]}
        ListEmptyComponent={ListEmptyComponent}
      />
      <View style={styles.footer}>
        <PrimaryButton
          title={'Share'}
          style={styles.shareButton}
          onPress={onPressShareHandler}
        />
        <PrimaryButton title={'Invite'} onPress={onPressInviteHandler} />
      </View>
    </View>
  );
};

export default SearchPlayers;

const styles = StyleSheet.create({
  backContainer: { marginHorizontal: wp(7), marginTop: hp(3) },
  searchInput: {
    alignSelf: 'center',
    width: wp(86),
    marginTop: hp(2),
  },
  listContentContainer: {
    paddingHorizontal: wp(5),
    marginTop: hp(4),
    gap: hp(2),
  },
  footer: {
    marginTop: 'auto',
    marginHorizontal: wp(10),
    marginBottom: hp(2),
    gap: hp(1),
  },
  shareButton: { backgroundColor: 'transparent' },
});
