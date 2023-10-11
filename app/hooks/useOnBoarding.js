import { useNavigation } from '@react-navigation/native';
import { useContext, useMemo, } from 'react';
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
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...tellUsMore,

    },

  });
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
  const handleNavigation = screen => {
    navigation.navigate(screen);
  };
  return {
    control,
    errors,
    playerImg,
    isCoach,
    isPlayer,
    playerPosition,
    cities: cities?.data,
    handleNavigation,
    handleSubmit,
  };
};

export const useEnterPorfileDetails = () => {
  const {
    onBoarding
  } = useOnBoarding()
  const city = onBoarding?.schoolInfo.city
  const state = onBoarding?.schoolInfo.state
  const { data: schools, isLoading: isLoadingSchools } = useGetSchools({
    queryFilter: {
      city: city, state: state
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