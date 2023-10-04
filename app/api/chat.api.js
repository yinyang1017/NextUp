import { useMutation } from 'react-query';
import { useClient } from '../hooks/useClient';

export const useGetChatMessagesByChannelId = () => {
  const client = useClient();
  return useMutation(data =>
    client(`message/stream/${data.channelId}`, { method: 'GET' }),
  );
};

export const useGetAllChatChannels = () => {
  const client = useClient();
  return useMutation(data =>
    client(`message/user/${data.userId}`, { method: 'GET' }),
  );
};

export const useSendChatMessage = () => {
  const client = useClient();
  return useMutation(data => client('message/send', { method: 'POST', data }));
};
