import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useCoachOnBoardingRegister, usePlayerOnBoardingRegister } from "../api/onboarding.api";
import { useGetState } from "../api/lookup.api";

export const OnBoardingContext = React.createContext();


export default function OnBoardingProvider({ children }) {

    const navigation = useNavigation()
    const { user, updateOnBoarding } = useAuth()
    const { data: states } = useGetState()
    const { mutate, isLoading: isPlayerLoading } = usePlayerOnBoardingRegister({
        onSuccess: data => {
            console.log(data, "data")
        }
    })
    const { mutate: coachMutate, isLoading: isCoachLoading } = useCoachOnBoardingRegister({
        onSuccess: data => {
            console.log(data, "data")
        }

    })
    const [onBoarding, setOnBoarding] = useState()
    console.log(states, "onBoarding")
    const [onBoardingCount, setOnBoardingCount] = useState(0)
    const isMale = onBoarding?.gender === 'male'
    const isFemale = onBoarding?.gender === 'female'
    const isPlayer = onBoarding?.typeOfUser === 'PLAYER'
    const isCoach = onBoarding?.typeOfUser === 'COACH'
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
        setOnBoardingCount(prev => prev + 30)
    }
    const handleNavigation = (screen) => {
        navigation.navigate(screen)
    }
    function hanldePlayerRegistration() {
        const dataToSend = {
            ...onBoarding,
            playingPosition: onBoarding?.playingPosition?.name ?? '',
            statsOfFocus: 'points',
            email: user?.email
        }
        console.log(user, "data to send")
        mutate({
            data: dataToSend,
            id: user?.id
        })
        console.log(dataToSend, "data to send")

    }
    function handleCoachRegistration() {
        const dataToSend = {
            ...onBoarding,

        }
        coachMutate({
            data: dataToSend,
            id: user?.id
        })
    }
    const handleUserOnboardingRegistration = async () => {
        updateOnBoarding({
            ...user,
            ...onBoarding
        })
        // if (isPlayer) {
        //     hanldePlayerRegistration()
        //     return
        // }
        // return handleCoachRegistration()
    }
    // console.log(onBoarding, "onboarding data")
    return (
        <OnBoardingContext.Provider value={{
            handleNavigation,
            handleOnBoarding,
            handleUserOnboardingRegistration,
            onBoarding,
            isFemale,
            isMale,
            isCoach,
            isPlayer,
            onBoardingCount,
            isLoading: isPlayerLoading || isCoachLoading
        }}>
            {children}
        </OnBoardingContext.Provider>
    );

}