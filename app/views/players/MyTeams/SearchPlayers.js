import { ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import React, { useCallback, useMemo } from 'react';
import Back from '../../../utils/HeaderButtons/Back';
import { hp, wp } from '../../../utils/responsive';
import { SearchInput } from '../../../components/common/searchbar';
import SearchPlayerItem from '../../../components/players/Dashboard/SearchPlayerItem';
import PrimaryButton from '../../../components/common/PrimaryButton';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text, View } from 'react-native-ui-lib';
import { customTheme } from '../../../constants';
import useInvitePlayersFromSearch from '../../../hooks/useInvitePlayersFromSearch';
import AppLoader from '../../../utils/Apploader';

const SearchPlayers = () => {
  const { bottom } = useSafeAreaInsets();
  const {
    selectedPlayers,
    navigation,
    isLoadingPlayersList,
    onSearchPlayers,
    onPressInviteHandler,
    onPressShareHandler,
    playersListData,
    onPressCheckBoxHandler,
    isLoading,
  } = useInvitePlayersFromSearch();

  const renderPlayerItem = useCallback(
    ({ item }) => {
      const isSelected = !!selectedPlayers.find(i => i?.id === item?.id);
      return (
        <SearchPlayerItem
          onPress={() => navigation.navigate('CoachViewPlayerDetails')}
          isSelected={isSelected}
          onCheckBoxPress={() => onPressCheckBoxHandler(isSelected, item)}
          data={item}
        />
      );
    },
    [navigation, selectedPlayers, onPressCheckBoxHandler],
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
      {isLoading && <AppLoader />}
      <Back containerStyle={styles.backContainer} />
      <View>
        <SearchInput style={styles.searchInput} onChange={onSearchPlayers} />
        <Text medium-700 style={styles.selectedPlayersText}>
          {selectedPlayers.length} Players Selected
        </Text>
      </View>
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
  searchInput: { alignSelf: 'center', width: wp(86), marginTop: hp(2) },
  listContentContainer: { paddingHorizontal: wp(5), gap: hp(2) },
  footer: {
    marginTop: 'auto',
    marginHorizontal: wp(10),
    marginBottom: hp(2),
    gap: hp(1),
  },
  shareButton: { backgroundColor: 'transparent' },
  selectedPlayersText: {
    marginVertical: hp(2),
    alignSelf: 'flex-end',
    marginHorizontal: wp(7),
  },
});
