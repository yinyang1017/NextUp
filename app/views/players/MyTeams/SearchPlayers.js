import { FlatList, Platform, StyleSheet, View } from 'react-native';
import React, { useCallback, useState } from 'react';
import Back from '../../../utils/HeaderButtons/Back';
import { useNavigation } from '@react-navigation/native';
import { hp, wp } from '../../../utils/responsive';
import { SearchInput } from '../../../components/common/searchbar';
import SearchPlayerItem from '../../../components/players/Dashboard/SearchPlayerItem';
import PrimaryButton from '../../../components/common/PrimaryButton';
import Share from 'react-native-share';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import times from 'lodash/times';

const SearchPlayers = () => {
  const navigation = useNavigation();
  const { bottom } = useSafeAreaInsets();

  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const onSearchPlayers = () => {
    // console.log('API Called');
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
    ({ index }) => {
      const isSelected = selectedPlayers.find(i => i === index) !== undefined;

      const onPressCheckBoxHandler = () => {
        let newValues = [...selectedPlayers];
        if (isSelected) {
          newValues = newValues.filter(i => i !== index);
        } else {
          newValues.push(index);
        }
        setSelectedPlayers(newValues);
      };

      return (
        <SearchPlayerItem
          onPress={() => navigation.navigate('CoachViewPlayerDetails')}
          isSelected={isSelected}
          onCheckBoxPress={onPressCheckBoxHandler}
        />
      );
    },
    [navigation, selectedPlayers],
  );

  return (
    <View style={[styles.container, { paddingBottom: bottom }]}>
      <Back containerStyle={styles.backContainer} />
      <SearchInput style={styles.searchInput} onChange={onSearchPlayers} />
      <FlatList
        data={times(10)}
        renderItem={renderPlayerItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={[
          styles.listContentContainer,
          { paddingBottom: bottom + hp(5) },
        ]}
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
  container: { flex: 1 },
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
    gap: hp(2),
  },
  shareButton: { backgroundColor: 'transparent' },
});
