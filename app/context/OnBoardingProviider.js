import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useMemo, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useCoachOnBoardingRegister, usePlayerOnBoardingRegister } from "../api/onboarding.api";
import { useGetCity, useGetClassOffYears, useGetSchools, useGetState } from "../api/lookup.api";
import { errorToast, successToast } from "../utils/toast";

export const OnBoardingContext = React.createContext();
const COCH_STEP = 4

export default function OnBoardingProvider({ children }) {
    const [onBoarding, setOnBoarding] = useState({})
    const navigation = useNavigation()
    const { user, updateOnBoarding, updateTypeOfUser } = useAuth()
    const { mutate, isLoading: isPlayerLoading, } = usePlayerOnBoardingRegister({
        onSuccess: data => {
            if (data?.success) {
                updateTypeOfUser(onBoarding?.typeOfUser)
                navigation.navigate('PhotoUpload')
            } else {
                errorToast({
                    title: 'Error',
                    body: 'Something went wrong'
                })
            }
            // 
        }
    })
    const { mutate: coachMutate, isLoading: isCoachLoading } = useCoachOnBoardingRegister({
        onSuccess: data => {
            if (data?.success) {
                updateTypeOfUser(onBoarding?.typeOfUser)
                navigation.navigate('PhotoUpload')
            } else {
                errorToast({
                    title: 'Error',
                    body: 'Coach On Boarding Failed'
                })
            }
        }
    })
    const [onBoardingCount, setOnBoardingCount] = useState(0)
    const isMale = onBoarding?.gender === 'male'
    const isFemale = onBoarding?.gender === 'female'
    const isPlayer = onBoarding?.typeOfUser === 'PLAYER'
    const isCoach = onBoarding?.typeOfUser === 'COACH'
    const handleOnBoarding = (values, cb = null) => {
        setOnBoarding(prev => {
            return {
                ...prev,
                ...values
            }
        })
        setOnBoardingCount(prev => prev + 20)
        cb && cb()
    }
    const handleNavigation = (screen) => {
        navigation.navigate(screen)
    }
    const handleBack = () => {
        if (onBoardingCount > 0) {
            setOnBoardingCount(prev => prev - 20)
        }

    }
    function hanldePlayerRegistration(data) {
        console.log('onBoarding', onBoarding)
        const dataToSend = {
            typeOfUser: 'PLAYER',
            personalInfo: {
                ...onBoarding?.personalInfo,
                gender: onBoarding?.gender,
                email: user?.personalInfo?.email,
            },
            schoolInfo: {
                ...onBoarding?.schoolInfo,
            },
            roleList: [
                "ROLE_PLAYER"
            ],
            playingPosition: data?.playingPosition?.name ?? '',
            parentApprovalRequired: false
        }

        mutate({
            data: dataToSend,
            id: user?.id
        })
    }
    function handleCoachRegistration() {
        const dataToSend = {
            roleList: [
                "ROLE_COACH"
            ],
            onBoardingTeamName: onBoarding?.onBoardingTeamName ?? "",
            typeOfUser: 'COACH',
            schoolInfo: {
                ...onBoarding?.schoolInfo,
            },
            coachingType: {
                typeOfCoaching: onBoarding?.coachingType?.typeOfCoaching ?? '',
            },
            personalInfo: {
                ...onBoarding?.personalInfo,
            }

        }
        // console.log('onBoarding', onBoarding)
        // console.log('data to send', dataToSend)
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
            handleBack,
            onBoarding,
            isFemale,
            isMale,
            isCoach,
            isPlayer,
            onBoardingCount,
            isLoading: isPlayerLoading || isCoachLoading,
        }}>
            {children}
        </OnBoardingContext.Provider>
    );

}
