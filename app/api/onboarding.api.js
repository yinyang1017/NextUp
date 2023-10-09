import { useQuery, useMutation, useQueryClient } from 'react-query'
import { useClient } from '../hooks/useClient'
export function useGetPlayerStyle({ queryFilter, queryConfig = {} }) {
    const client = useClient()
    const qs = Object.keys(queryFilter)
        .map(key => {
            if (encodeURIComponent(queryFilter[key])) {
                return `${encodeURIComponent(key)}=${encodeURIComponent(queryFilter[key])}`
            }
        })
        .filter(pair => pair)
        .join('&')
    return useQuery({
        queryKey: ['player-styles', queryFilter],
        queryFn: () => client(`admin/list/player/category?gender=POSITIONS_BOYS`),
        ...queryConfig,
    })
}


export function usePlayerOnBoardingRegister({ onSuccess }) {
    const client = useClient()
    return useMutation(
        ({ data, id }) => {
            return client(`user/onBoarding/${id}`, {
                method: 'POST',
                data,
            })
        },
        {
            onSuccess: data => {
                onSuccess(data)
            },
        }
    )
}
export function useCoachOnBoardingRegister({ onSuccess }) {
    const client = useClient()
    return useMutation(
        ({ data, id }) => {
            return client(`user/onBoarding/${id}`, {
                method: 'POST',
                data,
            })
        },
        {
            onSuccess: data => {
                onSuccess(data)
            },
        }
    )
}