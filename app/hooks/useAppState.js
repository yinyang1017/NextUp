import { useEffect } from 'react';
import { AppState, AppStateStatus } from 'react-native';

export function useAppState(onChange = () => null) {
    useEffect(() => {
        AppState.addEventListener('change', onChange);
        return () => {
            AppState.removeEventListener('change', onChange);
        };
    }, [onChange]);
}
