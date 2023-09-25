import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { useAuth } from "../hooks/useAuth";

export const OnBoardingContext = React.createContext();


export default function OnBoardingProvider({ children }) {

    const navigation = useNavigation()
    const { user } = useAuth()
    const [onBoarding, setOnBoarding] = useState(null)

    const [onBoardingCount, setOnBoardingCount] = useState(0)

    const trackProgressCount = useCallback(() => {
        let count = 0;

        Object.keys(onBoarding).forEach((key) => {
            if (onBoarding[key]) {
                count += 5;
            } else {
                count -= 5;
            }
        });

        setOnBoardingCount(count);
    }, [onBoarding])

    const handleOnBoarding = (values) => {
        setOnBoarding(prev => {
            return {
                ...prev,
                ...values
            }
        })
        setOnBoardingCount(prev => prev + 5)
    }
    const handleNavigation = (screen) => {
        navigation.navigate(screen)
    }
    return (
        <OnBoardingContext.Provider value={{
            handleNavigation,
            handleOnBoarding,
            onBoarding,
            onBoardingCount,
        }}>
            {children}
        </OnBoardingContext.Provider>
    );

}