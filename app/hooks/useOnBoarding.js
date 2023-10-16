import { useNavigation } from '@react-navigation/native';
import { useContext, useEffect, useMemo, } from 'react';
import { useForm } from 'react-hook-form';
import { OnBoardingContext } from '../context/OnBoardingProviider';
import { appImages } from '../constants/appImages';
import { useGetPlayerStyle } from '../api/onboarding.api';
import { yupResolver } from "@hookform/resolvers/yup"
import { tellUsMorePlayer } from '../validations/tellus';
import { useGetCity, useGetClassOffYears, useGetSchools, useGetState } from '../api/lookup.api';
const tellUsMore = {
  typeOfUser: 'PLAYER',
  gender: 'male',
  schoolInfo: {
    city: '',
    state: '',
    name: '',
    classOff: '',
  },
};


export const useOnBoarding = () => {
  return useContext(OnBoardingContext);
};


export const useTellUsMore = () => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
    setError
  } = useForm({
    defaultValues: {
      ...tellUsMore,

    },

  });
  const playerPosition = watch('gender');
  const playerImg = {
    male: appImages.player_male,
    female: appImages.player_female,
  };
  const isPlayer = watch('typeOfUser') === 'PLAYER';
  const isCoach = watch('typeOfUser') === 'COACH';
  const isTravelTeam = isCoach && watch('coachingType.typeOfCoaching') === 'TRAVEL_TEAM';
  const handleNavigation = screen => {
    navigation.navigate(screen);
  };
  function chekIfStateSelected() {
    const stateValue = watch('coachingType.state');
    if (stateValue) {
      return true
    }
    setError('coachingType.city', {
      type: 'custom',
      message: 'Select a state first',
    })
  }
  return {
    control,
    errors,
    playerImg,
    isCoach,
    isPlayer,
    playerPosition,
    isTravelTeam,
    setValue,
    chekIfStateSelected,
    handleNavigation,
    handleSubmit,
  };
};

export const useEnterPorfileDetails = () => {

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...tellUsMore.personalInfo,
    },
  });
  return {
    control,
    errors,
    setValue,
    handleSubmit,
  };
};
export const useCoachPorfileDetails = () => {
  const {
    control,
    handleSubmit,
    setError,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...tellUsMore.personalInfo,
    },
  });
  function chekIfStateSelected() {
    const stateValue = watch('personalInfo.state');
    if (stateValue) {
      return true
    }
    setError('city', {
      type: 'custom',
      message: 'Select a state first',
    })
  }
  return {
    control,
    errors,
    setValue,
    chekIfStateSelected,
    handleSubmit,
  };
};
export const useLocationDetails = () => {
  const {
    control,
    handleSubmit,
    setError,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
    },
  });
  useEffect(() => {
    setValue('schoolInfo.city', '');
    setValue('schoolInfo.name', '');
  }, [watch('schoolInfo.state')])
  const { isIdle, data: cities, isLoading: isLoadingCities } = useGetCity({
    queryFilter: {
      state: watch('schoolInfo.state'),
    }
  })
  const { data: schoolsData, isLoading: isLoadingSchools } = useGetSchools({
    queryFilter: {
      city: watch('schoolInfo.city'),
      state: watch('schoolInfo.state'),
    }
  })
  const schools = useMemo(() => {
    return schoolsData?.data?.map(school => ({
      label: school?.name,
      value: school?.name
    }))
  }, [schoolsData])
  function chekIfStateSelected() {
    const stateValue = watch('schoolInfo.state');
    const cityValue = watch('schoolInfo.city');
    if (stateValue || cityValue) {
      return true
    }

    setError('city', {
      type: 'custom',
      message: 'Select a state first and city',
    })
  }

  return {
    control,
    errors,
    cities: cities?.data,
    schools: schools,
    chekIfStateSelected,
    handleSubmit,
  };
};

export const usePlayerStyle = () => {

  const { onBoarding } = useOnBoarding();
  const queryFilter = useMemo(() => ({
    gender: onBoarding?.gender === 'male' ? 'POSITIONS_BOYS' : 'POSITIONS_GIRLS'
  }), [onBoarding])
  const { data: playerStylesList, isLoading: isLoadingStyleList, isFetching } = useGetPlayerStyle({ queryFilter });
  // console.log('playerStylesList', playerStylesList)
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      playingPosition: null,
    },
  });
  const playingPositionDescription = watch('playingPosition');
  return {
    control,
    errors,
    playerStylesList,
    playingPositionDescription,
    isLoadingStyleList: isLoadingStyleList || isFetching,
    handleSubmit,
  };
};