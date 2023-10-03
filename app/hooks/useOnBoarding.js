import { useNavigation } from '@react-navigation/native';
import { useCallback, useContext, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from './useAuth';
import { OnBoardingContext } from '../context/OnBoardingProviider';
import { appImages } from '../constants/appImages';
import { useGetPlayerStyle } from '../api/onboarding.api';
const tellUsMore = {
  typeOfUser: 'PLAYER',
  personalInfo: {
    gender: 'male',
  },

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
  const playerPosition = watch('personalInfo.gender');
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
    handleNavigation,
    handleSubmit,
  };
};

export const useEnterPorfileDetails = () => {
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

    handleSubmit,
  };
};

export const usePlayerStyle = () => {

  const { onBoarding } = useOnBoarding();
  const queryFilter = useMemo(() => ({
    gender: onBoarding?.gender === 'male' ? 'POSITIONS_BOYS' : 'POSITIONS_GIRLS'
  }), [onBoarding])
  const { data: playerStylesList, isLoading: isLoadingStyleList } = useGetPlayerStyle({ queryFilter });
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
    handleSubmit,
  };
};