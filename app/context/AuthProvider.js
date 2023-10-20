import React, { createContext, useReducer, useEffect, useMemo } from 'react';
import auth from '@react-native-firebase/auth';
import { useUserRegister } from '../api/register.api';
import AppLoader from '../utils/Apploader';
import { successToast } from '../utils/toast';

// Define the initial state
const initialState = {
  user: null, // You can replace 'null' with the actual user data if authenticated
  isAuthenticated: false, // Set to 'true' if the user is authenticated
  isLoggedIn: false,
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
        isLoggedIn: true
      };
    case 'LOGOUT':
      // Implement your logout logic here and update the state accordingly
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoggedIn: false

      };
    case 'UPDATE_ONBOARDING':
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload.user,
          onBoardingDone: action.payload.onBoardingDone,
        },
      };
    case 'UPDATE_TYPE_OF_USER':
      return {
        ...state,
        user: {
          ...state.user,
          typeOfUser: action.payload.typeOfUser,
        },
      }
    default:
      return state;
  }
};

// Create the AuthContext
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [authStart, setAuthStart] = React.useState(false);
  const [state, dispatch] = useReducer(authReducer, initialState);
  const [reChecking, setReChecking] = React.useState(false);
  const { mutate, isLoading } = useUserRegister({
    onSuccess: data => {
      login(data);

    },
  });


  const isPlayer = useMemo(() => {
    return state.user?.typeOfUser === 'PLAYER';
  }, [state])
  const isCoach = useMemo(() => {
    return state.user?.typeOfUser === 'COACH';
  }, [state])
  const isIdProvider = useMemo(() => {
    return state.user?.typeOfUser === 'COACH' ? state?.user?.idProofUploaded : true
  }, [state])
  const isMale = useMemo(() => {
    return state.user?.gender === 'MALE';
  }, [state])

  const showLoader = useMemo(() => {
    return (!state.isLoggedIn && isLoading) && !state.user
  }, [reChecking, state])

  console.log('isPlayer', state.user)


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
  const updateTypeOfUser = (type) => {
    dispatch({
      type: 'UPDATE_TYPE_OF_USER',
      payload: {
        typeOfUser: type
      }
    })

  }



  function onAuthStateChanged(user) {
    setAuthStart(prev => !prev);
    if (user) {
      const dataToSend = {
        email: user.email,
        firebaseAuthTokenId: user.uid,
        loginWith: 'GOOGLE',
        roles: ['ROLE_COACH', 'ROLE_PLAYER'],
      };
      mutate(dataToSend);
    }
    setAuthStart(prev => !prev);
    // setIsAuthentication(false);
    // setUser(user);
    // if (initializing) setInitializing(false);
  }
  function onRecheckingAuth() {
    setReChecking(prev => !prev);
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, [reChecking]);


  // Create the 'value' prop to share data and functions with consumer components
  const authContextValue = {
    user: state?.user,
    isAuthenticated: state?.isAuthenticated ?? false,
    onBoardingDone: state?.user?.onBoardingDone ?? false,
    isCoach,
    isPlayer,
    isIdProvider,
    isMale,
    login,
    logout,
    updateOnBoarding,
    onRecheckingAuth,
    updateTypeOfUser
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {showLoader || isLoading || authStart ? <AppLoader /> : children}
    </AuthContext.Provider>
  );
}
