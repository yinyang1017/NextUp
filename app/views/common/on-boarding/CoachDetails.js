import React from 'react';
import {
  View,
} from 'react-native-ui-lib';
import OnBoardingWrapper from '../../../components/common/OnBoardingWrapper';
import {
  FormButton,
  FormInputField,
  FormInputPicker,
} from '../../../components/common/FormInputs';
import {
  useCoachPorfileDetails,
  useEnterPorfileDetails,
  useOnBoarding,
} from '../../../hooks/useOnBoarding';
import { Controller } from 'react-hook-form';

export default function CoachDetails() {
  const {
    onBoardingCount,
    handleOnBoarding,
    handleNavigation,
    handleBack,
    states,
    handleCoachRegistration
  } = useOnBoarding();
  const { control, cities, handleSubmit, chekIfStateSelected } = useCoachPorfileDetails();
  const onSubmit = data => {
    handleOnBoarding(data, () => handleCoachRegistration());
    // const screenName = 'PhotoUpload';
    // handleNavigation(screenName);
  };
  return (
    <OnBoardingWrapper handleForm={handleSubmit(onSubmit)} progress={onBoardingCount} title='Enter Coach Details' backButtonAction={handleBack} >


      <View useSafeArea marginT-12 flex>
        <View row>
          <Controller
            name="firstName"
            control={control}
            rules={{
              required: 'First Name is required',
              maxLength: {
                value: 50,
                message: 'First Name must be less than 50 characters',
              },
              minLength: {
                value: 3,
                message: 'First Name must be more than 3 characters',
              },
              pattern: {
                value: /^[a-zA-Z ]+$/,
                message: 'First Name must contain only alphabets',
              },
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <FormInputField
                label={'First Name'}
                value={value ?? ''}
                onChangeText={onChange}
                required
                error={error}
                placeholder={'Enter First Name'}
              />
            )}
          />
          <Controller
            name="lastName"
            control={control}
            rules={{
              required: 'Last Name is required',
              maxLength: {
                value: 50,
                message: 'Last Name must be less than 50 characters',
              }
              ,
              minLength: {
                value: 3,
                message: 'Last Name must be more than 3 characters',
              },
              pattern: {
                value: /^[a-zA-Z ]+$/,
                message: 'Last Name must contain only alphabets',
              },
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <FormInputField
                label={'Last Name'}
                value={value ?? ''}
                onChangeText={onChange}
                required
                error={error}
                placeholder={'Enter Last Name'}
              />
            )}
          />
        </View>
        <View row center>
          <Controller
            control={control}
            name="coachingType.state"
            rules={{
              required: {
                value: true,
                message: 'Please select a state',
              },
            }}
            render={({ field: { onChange, value } }) => (
              <FormInputPicker
                value={value}
                data={states}
                label={'State'}
                required
                title="Search for state.."
                placeholder="Select State"
                onValueChange={value => onChange(value)}
              />
            )}
          />
          <Controller
            control={control}
            name="coachingType.city"
            render={({ field: { onChange, value } }) => (
              <FormInputPicker
                value={value}
                data={cities}
                label={'City'}
                title="Search for city.."
                required
                placeholder="Select City"
                onValueChange={value => {
                  if (chekIfStateSelected()) {
                    onChange(value)
                  }
                }}
              />
            )}
          />
        </View>
      </View>

    </OnBoardingWrapper>
  );
}
