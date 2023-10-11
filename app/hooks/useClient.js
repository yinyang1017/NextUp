import React from 'react';
import { client } from '../utils/api-client'; // Import your axiosInstance
import { useAuth } from './useAuth';

function useClient() {
  const user = useAuth()?.user;

  const token = null;

  return React.useCallback(
    async (endpoint, config) => client(endpoint, { ...config, token }),
    [token],
  );
}

export { useClient };
