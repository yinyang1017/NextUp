import React from 'react';
import { client } from '../utils/api-client'; // Import your axiosInstance
// import { useAuth } from '@/context/app/auth-context';

function useClient() {
  // const { user } = useAuth();
  const token = null;

  return React.useCallback(
    async (endpoint, config) => client(endpoint, { ...config, token }),
    [token],
  );
}

export { useClient };
