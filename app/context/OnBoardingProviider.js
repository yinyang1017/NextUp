import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useCoachOnBoardingRegister, usePlayerOnBoardingRegister } from "../api/onboarding.api";
import { useGetCity, useGetState } from "../api/lookup.api";

export const OnBoardingContext = React.createContext();
const COCH_STEP = 4

export default function OnBoardingProvider({ children }) {
    const [onBoarding, setOnBoarding] = useState({})
    const navigation = useNavigation()
    const { user, updateOnBoarding } = useAuth()
    const { data: states } = useGetState()
    // console.log(user, "states")

    const { mutate, isLoading: isPlayerLoading } = usePlayerOnBoardingRegister({
        onSuccess: data => {
            // console.log(data, "data")
            navigation.navigate('PhotoUpload')
        }
    })
    const { mutate: coachMutate, isLoading: isCoachLoading } = useCoachOnBoardingRegister({
        onSuccess: data => {
            // console.log(data, "data")
        }

    })

    const [onBoardingCount, setOnBoardingCount] = useState(0)
    const isMale = onBoarding?.gender === 'male'
    const isFemale = onBoarding?.gender === 'female'
    const isPlayer = onBoarding?.typeOfUser === 'PLAYER'
    const isCoach = onBoarding?.typeOfUser === 'COACH'
    const handleOnBoarding = (values) => {
        setOnBoarding(prev => {
            return {
                ...prev,
                ...values
            }
        })
        setOnBoardingCount(prev => prev + 25)
    }
    const handleNavigation = (screen) => {
        navigation.navigate(screen)
    }
    function hanldePlayerRegistration(data) {
        const dataToSend = {
            ...onBoarding,
            playingPosition: data?.playingPosition?.name ?? '',
            // statsOfFocus: 'points',
            email: user?.personalInfo?.email,
            // id: user?.id,
            roleList: [
                "ROLE_PLAYER"
            ],
        }
        console.log(dataToSend, "data to send")
        //// console.log(user, "data to send")
        mutate({
            data: dataToSend,
            id: user?.id
        })
        // 

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
    //// console.log(onBoarding, "onboarding data")
    return (
        <OnBoardingContext.Provider value={{
            handleNavigation,
            handleOnBoarding,
            handleUserOnboardingRegistration,
            handleCoachRegistration,
            hanldePlayerRegistration,
            onBoarding,
            isFemale,
            isMale,
            isCoach,
            isPlayer,
            onBoardingCount,
            isLoading: isPlayerLoading || isCoachLoading,
            states: states?.data,
        }}>
            {children}
        </OnBoardingContext.Provider>
    );

}