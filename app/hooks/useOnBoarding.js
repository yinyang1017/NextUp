import { useNavigation } from "@react-navigation/native"
import { useCallback, useContext, useMemo, useState } from "react"
import { useForm } from "react-hook-form"
import { useAuth } from "./useAuth"
import { OnBoardingContext } from "../context/OnBoardingProviider"
import { appImages } from "../constants/appImages"
const tellUsMore = {
    typeOfUser: 'PLAYER',
    personalInfo: {
        gender: 'male',
    },

    schoolInfo: {
        city: '',
        state: '',
        name: '',
        classOff: ''
    }

}
export const useTellUsMore = () => {
    const navigation = useNavigation()
    const {
        control,
        handleSubmit,
        watch,
        formState: {
            errors
        },

    } = useForm({
        defaultValues: {
            ...tellUsMore
        }
    })
    const playerPosition = watch('personalInfo.gender')
    const playerImg = {
        male: appImages.player_male,
        female: appImages.player_female
    }
    const handleNavigation = (screen) => {
        navigation.navigate(screen)
    }
    return {
        control,
        errors,
        playerImg,
        playerPosition,
        handleNavigation,
        handleSubmit
    }
}

export const useEnterPorfileDetails = () => {
    const {
        control,
        handleSubmit,
        formState: {
            errors
        },
    } = useForm({
        defaultValues: {
            ...tellUsMore.personalInfo
        }
    })
    return {
        control,
        errors,

        handleSubmit
    }
}

export const usePlayerStyle = () => {
    const {
        control,
        handleSubmit,
        watch,
        formState: {
            errors
        },
    } = useForm({
        defaultValues: {
            playingPosition: null
        }
    })
    const playingPositionDescription = watch('playingPosition')

    return {
        control,
        errors,
        playingPositionDescription,
        handleSubmit
    }
}

export const useOnBoarding = () => {
    return useContext(OnBoardingContext)
}