import { useQuery, useMutation, useQueryClient } from 'react-query'
import { useClient } from '../hooks/useClient'
export function useUserRegister({ onSuccess }) {
    const client = useClient()
    return useMutation((data) => {
        client(`user/register`, {
            method: 'POST',
            data
        },
            {
                onSuccess: onSuccess
            }
        )
    })
}