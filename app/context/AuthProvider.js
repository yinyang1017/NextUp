import React, { createContext, useReducer, useContext } from 'react';

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
        default:
            return state;
    }
};

// Create the AuthContext
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [state, dispatch] = useReducer(authReducer, initialState);

    // Define login and logout functions that dispatch actions
    const login = (user) => {
        dispatch({ type: 'LOGIN', payload: { user } });
    };

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
    };

    // Create the 'value' prop to share data and functions with consumer components
    const authContextValue = {
        user: state?.user,
        isAuthenticated: state?.isAuthenticated,
        onBoardingDone: state?.user?.onBoardingDone,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
}

// Create a custom hook to access the AuthContext

