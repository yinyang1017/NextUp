import { useNavigation } from "@react-navigation/native"
import { useCallback, useMemo, useState } from "react"

export const useOnBoarding = () => {
    const navigation = useNavigation()
    const [onBoarding, setOnBoarding] = useState({
        isCoach: false,
        gender: 'male',
        school: 'My AC School',
        classYear: '2019',
        type: 'coach'
    })
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

    const handleOnBoarding = (key, value) => {
        setOnBoarding({
            ...onBoarding,
            [key]: value
        })
        trackProgressCount()
    }
    const handleSubmit = () => {
        navigation.navigate('PlayerDetails')
    }
    return {
        onBoarding,
        onBoardingCount,
        handleSubmit,
        handleOnBoarding
    }
}