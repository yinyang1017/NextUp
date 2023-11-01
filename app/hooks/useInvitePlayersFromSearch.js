import { useCallback, useEffect, useState } from 'react';
import {
  useGetPlayersForInvite,
  useInvitePlayerToTeam,
} from '../api/myteam.api';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useAuth } from './useAuth';
import { Platform } from 'react-native';
import Share from 'react-native-share';
import { getInvitePlayerDynamicLink } from '../utils/helper';
import { errorToast } from '../utils/toast';

const useInvitePlayersFromSearch = () => {
  const navigation = useNavigation();
  const { user } = useAuth();
  const isFocused = useIsFocused();
  const {
    mutateAsync: getPlayersForInvite,
    data: playersListData,
    isLoading: isLoadingPlayersList,
  } = useGetPlayersForInvite();
  const { mutateAsync: invitePlayerToTeamMutation } = useInvitePlayerToTeam();

  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  const onPressShareHandler = async () => {
    try {
      const url = await getInvitePlayerDynamicLink(user?.id);
      const title = 'Nextup';
      const subTitle = 'Invite friend';
      const options = Platform.select({
        ios: {
          activityItemSources: [
            {
              placeholderItem: { type: 'url', content: subTitle },
              item: { default: { type: 'text', content: url } },
              linkMetadata: { title },
            },
          ],
        },
        default: { title, subject: title, message: url },
      });
      Share.open(options);
    } catch (error) {
      console.log('Error====>', error);
    }
  };

  const onPressCheckBoxHandler = useCallback(
    (isSelected, item) => {
      let newValues = [...selectedPlayers];
      if (isSelected) {
        newValues = newValues.filter(i => i?.id !== item?.id);
      } else {
        newValues.push(item);
      }
      setSelectedPlayers(newValues);
    },
    [selectedPlayers],
  );

  const onPressInviteHandler = async () => {
    try {
      if (selectedPlayers.length) {
        setIsLoading(true);
        const addedTime = Date.now();

        const payload = selectedPlayers.map(item => ({
          playerName: item.name,
          playerId: item.id,
          playerProfilePictureUrl: item.profilePictureUrl,
          positions: 'DEFAULT',
          addedAt: addedTime,
        }));

        const response = await invitePlayerToTeamMutation({
          teamId: 169830832415901,
          season: '2023-24',
          payload,
        });

        if (!response.error && response.success) {
          navigation.goBack();
        } else {
          throw new Error('Fail');
        }
        setIsLoading(false);
      } else {
        navigation.navigate('InvitePlayers');
      }
    } catch (error) {
      setIsLoading(false);
      errorToast({
        title: 'Error',
        body: 'Failed to invite players! Please try again after some time',
      });
    }
  };

  return {
    selectedPlayers,
    navigation,
    isLoadingPlayersList,
    onSearchPlayers,
    playersListData,
    onPressShareHandler,
    onPressInviteHandler,
    onPressCheckBoxHandler,
    isLoading,
  };
};

export default useInvitePlayersFromSearch;
