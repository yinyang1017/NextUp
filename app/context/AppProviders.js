import { MutationCache, QueryCache, focusManager } from "react-query";
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
    QueryErrorResetBoundary
} from 'react-query'
import { useAppState } from "../hooks/useAppState";
import { useOnlineManager } from "../hooks/useOnlineManager";
import { Platform } from "react-native";
import ErrorBoundary from 'react-native-error-boundary';
import { Button } from "react-native-ui-lib";
const mutationCache = new MutationCache({
    onError(error, variables, context, mutation) {
        console.log(error)
    },
})
const queryCache = new QueryCache({
    onError(error) {
        vmoToast.error(<Toast error message={error.message} />)
    },
})
// Create a client
const queryClient = new QueryClient({
    mutationCache,
    queryCache,
    defaultOptions: { queries: { retry: 2 } },
});
function onAppStateChange(status) {
    // React Query already supports in web browser refetch on window focus by default
    if (Platform.OS !== 'web') {
        focusManager.setFocused(status === 'active');
    }
}
const ErrorFallback = (props) => (
    <View style={styles.container}>
        <Text style={styles.title}>Something happened!</Text>
        <Text style={styles.text}>{props.error.toString()}</Text>
        <Button onPress={props?.reset}
            label="Try again" ß
        />
    </View>
)
export default function AppProviders({ children }) {
    useOnlineManager()
    // useAppState(onAppStateChange)
    return <QueryClientProvider client={queryClient}>
        <QueryErrorResetBoundary>
            {({ reset }) => (
                <ErrorBoundary FallbackComponent={(props) => <ErrorFallback reset={reset} {...props} />}>
                    {
                        children
                    }
                </ErrorBoundary>
            )}
        </QueryErrorResetBoundary>


    </QueryClientProvider>

}