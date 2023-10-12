import { useNavigation } from '@react-navigation/native';
import { useContext, useEffect, useMemo, } from 'react';
import { useForm } from 'react-hook-form';
import { OnBoardingContext } from '../context/OnBoardingProviider';
import { appImages } from '../constants/appImages';
import { useGetPlayerStyle } from '../api/onboarding.api';
import { yupResolver } from "@hookform/resolvers/yup"
import { tellUsMorePlayer } from '../validations/tellus';
import { useGetCity, useGetClassOffYears, useGetSchools } from '../api/lookup.api';
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
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
    setError
  } = useForm({
    defaultValues: {
      ...tellUsMore,

    },

  });
  useEffect(() => {
    setValue('city', '');
  }, [watch('state')])
  const { isIdle, data: cities, isLoading: isLoadingCities } = useGetCity({
    queryFilter: {
      state: watch('state'),
    }
  })
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
    const stateValue = watch('state');
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
    playerImg,
    isCoach,
    isPlayer,
    playerPosition,
    cities: cities?.data,
    isTravelTeam,
    chekIfStateSelected,
    handleNavigation,
    handleSubmit,
  };
};

export const useEnterPorfileDetails = () => {
  const {
    onBoarding
  } = useOnBoarding()
  const city = onBoarding?.schoolInfo?.city
  const state = onBoarding?.schoolInfo?.state
  const { data: schools, isLoading: isLoadingSchools } = useGetSchools({
    queryFilter: {
      city: city,
      state: state
    }
  })
  const {
    data: classesOfYears,
    isLoading: isLoadingClassesOfYears
  } = useGetClassOffYears({
    queryFilter: {

    }
  })
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...tellUsMore.personalInfo,
    },
  });
  return {
    control,
    errors,
    schools: schools?.data,
    classesOfYears: classesOfYears?.data,
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
  useEffect(() => {
    setValue('coachingType.city', '');
  }, [watch('coachingType.state')])
  const { isIdle, data: cities, isLoading: isLoadingCities } = useGetCity({
    queryFilter: {
      state: watch('coachingType.state'),
    }
  })
  function chekIfStateSelected() {
    const stateValue = watch('coachingType.state');
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
    cities: cities?.data,
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
  const { data: schools, isLoading: isLoadingSchools } = useGetSchools({
    queryFilter: {
      city: watch('schoolInfo.city'),
      state: watch('schoolInfo.state'),
    }
  })
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
    schools: schools?.data,
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