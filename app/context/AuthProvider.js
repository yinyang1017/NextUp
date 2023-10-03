import React, { createContext, useReducer, useContext, useEffect, useMemo } from 'react';
import auth from '@react-native-firebase/auth';
import { useUserRegister } from '../api/register.api';
import AppLoader from '../utils/Apploader';
import { successToast } from '../utils/toast';

// Define the initial state
const initialState = {
    user: null, // You can replace 'null' with the actual user data if authenticated
    isAuthenticated: false, // Set to 'true' if the user is authenticated
};

// Define actions for the reducer
const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            // Implement your login logic here and update the state accordingly
            return {
                ...state,
                user: action.payload.user,
                isAuthenticated: true,
            };
        case 'LOGOUT':
            // Implement your logout logic here and update the state accordingly
            return {
                ...state,
                user: null,
                isAuthenticated: false,
            };
        case 'UPDATE_ONBOARDING':
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.payload.user,
                    onBoardingDone: action.payload.onBoardingDone,
                },
            }
        default:
            return state;
    }
};

// Create the AuthContext
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [state, dispatch] = useReducer(authReducer, initialState);
    const [isAuthentication, setIsAuthentication] = React.useState(false);
    const { mutate, isLoading } = useUserRegister({
        onSuccess: data => {
            login(data);
            setIsAuthentication(false);
        },
    });

    const isPlayer = useMemo(() => {
        return state.user?.typeOfUser === 'PLAYER';
    }, [state])
    const isCoach = useMemo(() => {
        return state.user?.typeOfUser === 'COACH';
    }, [state])


    // Define login and logout functions that dispatch actions
    const login = (user) => {
        dispatch({ type: 'LOGIN', payload: { user } });
    };

    const logout = () => {
        auth().signOut().then(() => {
            dispatch({ type: 'LOGOUT' });
            successToast({
                title: 'Success',
                body: 'Logged out successfully'
            })
        })

    };
    const updateOnBoarding = (user) => {
        dispatch({
            type: 'UPDATE_ONBOARDING', payload: {
                onBoardingDone: true,
                user
            }
        })

    }

    function onAuthStateChanged(user) {
        // console.log(user, 'in auth state')
        if (user) {
            const dataToSend = {
                email: user.email,
                firebaseAuthTokenId: user.uid,
                loginWith: 'GOOGLE',
                roles: ['ROLE_COACH', 'ROLE_PLAYER'],
            };
            mutate(dataToSend);
        }
        // setUser(user);
        // if (initializing) setInitializing(false);
    }


    useEffect(() => {
        setIsAuthentication(true);
        const subscribe = auth().onAuthStateChanged(onAuthStateChanged)
        return subscribe
    }, [])

    // Create the 'value' prop to share data and functions with consumer components
    const authContextValue = {
        user: state?.user,
        isAuthenticated: state?.isAuthenticated,
        onBoardingDone: state?.user?.onBoardingDone,
        isCoach,
        isPlayer,
        login,
        logout,
        updateOnBoarding
    };

    return (
        <AuthContext.Provider value={authContextValue}>
            {
                isAuthentication ? <AppLoader /> : children
            }
            {/* {children} */}
        </AuthContext.Provider>
    );
}

// Create a custom hook to access the AuthContext

