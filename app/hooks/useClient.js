import React from 'react';
import { axiosInstance } from '../utils/api-client'; // Import your axiosInstance
// import { useAuth } from '@/context/app/auth-context';

function useClient() {
    // const { user } = useAuth();
    const token = null

    return React.useCallback(
        async (endpoint, config) => {
            try {
                const response = await axiosInstance({
                    url: endpoint,
                    ...config,
                    headers: {
                        ...(config.headers || {}),
                        Authorization: token ? `Bearer ${token}` : undefined,
                    },
                });

                if (response.status === 204) {
                    return 'Delete successfully';
                }

                return response.data.payload || response.data;
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    // Unauthorized, perform logout and redirect logic here
                    // logout();
                    // Redirect to the login screen or handle it as needed in your app.
                    throw new Error('Please re-authenticate.');
                }

                throw error.response ? error.response.data : error;
            }
        },
        [token]
    );
}

export { useClient };
