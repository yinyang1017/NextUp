import { useMutation } from 'react-query';
import { useClient } from '../hooks/useClient';

export function useUserUpdateCertificates({ onSuccess }) {
    const client = useClient();
    return useMutation(
        ({ data, id }) => {
            return client(`user/update/profile/${id}`, {
                method: 'POST',
                data,
            });
        },
        {
            onSuccess: data => {
                onSuccess(data);
            },
        },
    );
}
