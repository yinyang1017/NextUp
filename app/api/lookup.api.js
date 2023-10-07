import { useQuery, useMutation, useQueryClient } from 'react-query'
import { useClient } from '../hooks/useClient'
export function useGetState({ queryFilter = null, queryConfig = {} }) {
    const client = useClient()

    const qs = queryFilter && Object.keys(queryFilter)
        .map(key => {
            if (encodeURIComponent(queryFilter[key])) {
                return `${encodeURIComponent(key)}=${encodeURIComponent(queryFilter[key])}`
            }
        })
        .filter(pair => pair)
        .join('&')
    return useQuery({
        queryKey: ['states', 'cites', queryFilter],
        queryFn: () => client(`admin/property/list/states?${qs}`),
        ...queryConfig,
    })
}

export function useGetCity({ queryFilter, queryConfig = {} }) {
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
        queryKey: ['states', 'cites', queryFilter],
        queryFn: () => client(`admin/property/list/states?${qs}`),
        ...queryConfig,
    })
}

export function useGetClassOffYears() {
    const client = useClient()
    return useQuery({
        queryKey: ['classes'],
        queryFn: () => client(`admin/property/list/years`),
    })
}