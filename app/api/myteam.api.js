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

export const useGetGameTabForTeam = () => {
  const client = useClient();
  return useMutation(({ userId, teamId, season }) =>
    client(`team/game/${userId}/${teamId}/${teamId}?season=${season}`),
  );
};

export const useInvitePlayerToTeam = () => {
  const client = useClient();
  return useMutation(({ teamId, season, payload }) =>
    client(`team/update/team/members/${teamId}/${season}`, {
      method: 'POST',
      data: payload,
    }),
  );
};

export const useGetScheduleListForTeam = () => {
  const client = useClient();
  return useMutation(({ teamId, season }) =>
    client(`team/practice/list/${teamId}?season=${season}`),
  );
};

export const useGetTeamPlayerPage = () => {
  const client = useClient();
  return useMutation(({ teamId, season }) =>
    client(`team/player/${teamId}?season=${season}`),
  );
};

export const useGetTeamInfoForCoach = () => {
  const client = useClient();
  return useMutation(({ teamId }) => client(`coach/team/${teamId}`));
};

export const useGetRoleTabData = () => {
  const client = useClient();
  return useMutation(({ teamId, userId, season }) =>
    client(`team/roles/${userId}/${teamId}?season=${season}`),
  );
};

export const useCreatePractice = () => {
  const client = useClient();
  return useMutation(({ teamId, season }) =>
    client(`team/practice/create/${teamId}?season=${season}`),
  );
};
