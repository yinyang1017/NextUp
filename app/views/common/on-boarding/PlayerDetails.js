import React from 'react';
import { View } from 'react-native-ui-lib';
import {
  FormActionPicker,
  FormButton,
  FormDatePicker,
  FormInputField,
  FormInputPicker,
  FormMaskedInput,
} from '../../../components/common/FormInputs';
import {
  useEnterPorfileDetails,
  useOnBoarding,
} from '../../../hooks/useOnBoarding';
import { Controller } from 'react-hook-form';
import OnBoardingWrapper from '../../../components/common/OnBoardingWrapper';
import * as schoolsData from '../../../utils/data/schools.json';
import * as class_years from '../../../utils/data/classYears.json';
import { errorMessageOnType } from '../../../utils/helper';

export default function PlayerDetails() {
  const { onBoardingCount, handleOnBoarding, handleNavigation, handleBack } =
    useOnBoarding();
  const { control, errors, schools, classesOfYears, handleSubmit } =
    useEnterPorfileDetails();
  const onSubmit = data => {
    handleOnBoarding(data);
    handleNavigation('PlayerStyle');
  };

  return (
    <OnBoardingWrapper backButtonAction={handleBack} handleForm={handleSubmit(onSubmit)} title='Enter Profile Details' label={'Confirm'} progress={onBoardingCount}>
      <View useSafeArea marginT-12 flex>
        <View row spread center >
          <Controller
            name="personalInfo.firstName"
            control={control}
            rules={{
              required: 'Last Name is required',
              maxLength: {
                value: 50,
                message: 'Last Name must be less than 50 characters',
              },
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
                label={'First Name'}
                value={value ?? ''}
                onChangeText={onChange}
                error={
                  error && error?.message
                }
              />
            )}
          />
          <Controller
            name="personalInfo.lastName"
            control={control}
            rules={{
              required: 'Last Name is required',
              maxLength: {
                value: 50,
                message: 'Last Name must be less than 50 characters',
              },
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
              <>
                {
                  // console.log('error', error)
                }
                <FormInputField
                  label={'Last Name'}
                  value={value ?? ''}
                  onChangeText={onChange}
                  error={
                    error && error?.message
                  }
                />
              </>

            )}
          />
        </View>
        <Controller
          name="personalInfo.dateOfBirth"
          control={control}
          rules={
            {
              required: 'Date of Birth is required',
            }
          }
          render={({ field: { onChange, value }, fieldState: { error } }) => {
            return <FormDatePicker
              label={'Date of Birth'}
              placeholder="Select date"
              value={value ?? null}
              onChange={onChange}
              error={
                error && error?.message
              }
            />

          }
          }
        />
        <Controller
          name="schoolInfo.name"
          control={control}
          rules={{
            required: 'School is required',
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <FormInputPicker
              value={value ?? null}
              data={schoolsData.schools}
              label={'School'}
              title="Search for school"
              onValueChange={value => onChange(value)}
              error={
                error && error?.message
              }
            />
          )}
        />
        <Controller
          name="schoolInfo.classOff"
          control={control}
          rules={{
            required: 'Class is required',
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <FormInputPicker
              value={value ?? null}
              data={class_years?.class_years}
              label={'Class'}
              title="Search for class"
              onValueChange={value => onChange(value)}
              error={
                error && error?.message
              }
            />
          )}
        />
        <View row centerH spread>
          <Controller
            name="personalInfo.height"
            control={control}
            rules={{
              required: 'Height is required',

            }}
            render={({ field: { onChange, value, ref }, fieldState: { error } }) => (
              <FormMaskedInput
                label={'Height'}
                value={value ?? ''}
                onChangeText={onChange}
                forHeight
                onValueChange={pickvalue => {
                  onChange(pickvalue);
                }}
                error={
                  error && error?.message
                }
                data={[
                  {
                    label: 'CM',
                    value: 'CM',
                  },
                  {
                    label: 'IN',
                    value: 'IN',
                  },
                ]}
                keyboardType="numeric"
              />
            )}
          />
          <Controller
            name="personalInfo.weight"
            control={control}
            rules={{
              required: 'Weight is required',

            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <FormMaskedInput
                label={'Weight'}
                value={value ?? ''}
                onChangeText={onChange}
                onValueChange={pickvalue => {
                  onChange(pickvalue);
                }}
                data={[
                  {
                    label: 'KG',
                    value: 'KG',
                  },
                  {
                    label: 'LB',
                    value: 'LB',
                  },
                ]}
                error={
                  error && error?.message
                }
                keyboardType="numeric"
              />
            )}
          />
        </View>
      </View>
    </OnBoardingWrapper>
  );
}
