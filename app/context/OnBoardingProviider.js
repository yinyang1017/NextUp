import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useCoachOnBoardingRegister, usePlayerOnBoardingRegister } from "../api/onboarding.api";
import { useGetCity, useGetState } from "../api/lookup.api";
import { errorToast, successToast } from "../utils/toast";

export const OnBoardingContext = React.createContext();
const COCH_STEP = 4

export default function OnBoardingProvider({ children }) {
    const [onBoarding, setOnBoarding] = useState({})
    const navigation = useNavigation()
    const { user, updateOnBoarding, onRecheckingAuth } = useAuth()
    const { data: states } = useGetState()
    const { mutate, isLoading: isPlayerLoading, } = usePlayerOnBoardingRegister({
        onSuccess: data => {
            console.log(data, "data")
            if (data?.success) {
                successToast({
                    title: 'Success',
                    body: 'Player On Boarding Successfully'
                })
                navigation.navigate('PhotoUpload', {
                    isCoach
                })
                // if()
                // onRecheckingAuth()

            } else {
                errorToast({
                    title: 'Error',
                    body: 'Player On Boarding Failed'
                })
            }
            // 
        }
    })
    const { mutate: coachMutate, isLoading: isCoachLoading } = useCoachOnBoardingRegister({
        onSuccess: data => {
            console.log(data, "data")
            if (data?.success) {
                successToast({
                    title: 'Success',
                    body: 'Coach On Boarding Successfully'
                })
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
        const dataToSend = {
            typeOfUser: 'PLAYER',
            personalInfo: {
                ...onBoarding?.personalInfo,
                gender: onBoarding?.gender,
                email: user?.personalInfo?.email,
            },
            schoolInfo: {
                ...onBoarding?.schoolInfo,
                city: onBoarding?.city,
                state: onBoarding?.state,
            },
            roleList: [
                "ROLE_PLAYER"
            ],
            playingPosition: data?.playingPosition?.name ?? '',
            parentApprovalRequired: false
        }
        console.log(dataToSend, "data to send")
        // //// console.log(user, "data to send")
        mutate({
            data: dataToSend,
            id: user?.id
        })
    }
    function handleCoachRegistration(data) {
        const dataToSend = {
            roleList: [
                "ROLE_COACH"
            ],
            onBoardingTeamName: onBoarding?.onBoardingTeamName ?? "",
            typeOfUser: 'COACH',
            schoolInfo: {
                city: onBoarding?.schoolInfo?.city ?? '',
                state: onBoarding?.schoolInfo?.state ?? '',
                name: onBoarding?.schoolInfo?.name ?? "",
                gender: onBoarding?.gender ?? "",
            },
            coachingType: {
                typeOfCoaching: onBoarding?.coachingType?.typeOfCoaching ?? "",
                schoolName: onBoarding?.schoolInfo?.name ?? "",
                ageGroup: onBoarding?.coachingType?.ageGroup ?? "",
                state: onBoarding?.coachingType?.state ?? "",
                city: onBoarding?.coachingType?.city ?? "",
            },
            personalInfo: {
                email: user?.personalInfo?.email ?? "",
                firstName: onBoarding?.firstName ?? "",
                lastNmame: onBoarding?.lastName ?? "",
            }

        }
        console.log(dataToSend, "data to send")
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
            handleBack,
            onBoardingCount,
            isLoading: isPlayerLoading || isCoachLoading,
            states: states?.data,
        }}>
            {children}
        </OnBoardingContext.Provider>
    );

}