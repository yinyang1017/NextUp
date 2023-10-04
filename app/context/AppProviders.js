import React from 'react';
import { MutationCache, QueryCache, focusManager } from 'react-query';
import {
  QueryClient,
  QueryClientProvider,
  QueryErrorResetBoundary,
} from 'react-query';
import { useOnlineManager } from '../hooks/useOnlineManager';
import { Platform } from 'react-native';
import ErrorBoundary from 'react-native-error-boundary';
import { Button, View, Text } from 'react-native-ui-lib';
import { customTheme } from '../constants';

const mutationCache = new MutationCache({
  onError(error, variables, context, mutation) {
    console.log(error);
  },
});

const queryCache = new QueryCache({
  onError(error) {
    // vmoToast.error(<Toast error message={error.message} />);
  },
});

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

const ErrorFallback = props => (
  <View
    center
    centerV
    centerH
    flex
    backgroundColor={customTheme.colors.background}>
    <Text white marginV-12>
      Something happened!
    </Text>
    <Text white marginV-12>
      {props.error.toString()}
    </Text>
    <Button
      onPress={props?.reset}
      label="Try again"
      backgroundColor={customTheme.colors.blue20}
    />
  </View>
);
export default function AppProviders({ children }) {
  useOnlineManager();
  // useAppState(onAppStateChange)
  return (
    <QueryClientProvider client={queryClient}>
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary
            FallbackComponent={props => (
              <ErrorFallback reset={reset} {...props} />
            )}>
            {children}
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </QueryClientProvider>
  );
}
