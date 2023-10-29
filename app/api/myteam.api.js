import { useMutation } from 'react-query';
import { useClient } from '../hooks/useClient';

export const useAddTeamApi = () => {
  const client = useClient();
  return useMutation(data => client('team/create', { method: 'POST', data }));
};

export const useGetPlayersForInvite = () => {
  const client = useClient();
  return useMutation(({ userId, search }) =>
    client('player/list/' + userId + (search ? `?search=${search}` : '')),
  );
};

export const useInviteOutsidePlayer = () => {
  const client = useClient();
  return useMutation(({ userId, payload }) =>
    client('team/invite/player/' + userId, { method: 'POST', data: payload }),
  );
};
