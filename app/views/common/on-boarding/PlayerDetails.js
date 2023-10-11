import React from 'react';
import { View } from 'react-native-ui-lib';
import {
  FormDatePicker,
  FormInputField,
  FormInputPicker,
} from '../../../components/common/FormInputs';
import {
  useEnterPorfileDetails,
  useOnBoarding,
} from '../../../hooks/useOnBoarding';
import { Controller } from 'react-hook-form';
import OnBoardingWrapper from '../../../components/common/OnBoardingWrapper';

export default function PlayerDetails() {
  const { onBoardingCount, handleOnBoarding, handleNavigation } =
    useOnBoarding();
  const { control, errors, schools, classesOfYears, handleSubmit } =
    useEnterPorfileDetails();
  const onSubmit = data => {
    handleOnBoarding(data);
    handleNavigation('PlayerStyle');
  };
  return (
    <OnBoardingWrapper
      title="Enter Player Details"
      handleForm={handleSubmit(onSubmit)}>
      <View useSafeArea marginT-12 flex>
        <View row>
          <Controller
            name="personalInfo.firstName"
            control={control}
            render={({ field: { onChange, value } }) => (
              <FormInputField
                label={'First Name'}
                value={value ?? ''}
                onChangeText={onChange}
              />
            )}
          />
          <Controller
            name="personalInfo.lastName"
            control={control}
            render={({ field: { onChange, value } }) => (
              <FormInputField
                label={'Last Name'}
                value={value ?? ''}
                onChangeText={onChange}
              />
            )}
          />
        </View>
        <Controller
          name="personalInfo.dateOfBirth"
          control={control}
          render={({ field: { onChange, value } }) => (
            <FormDatePicker
              label={'Date of Birth'}
              placeholder="Select date"
              onChange={onChange}
            />
          )}
        />
        <Controller
          name="schoolInfo.name"
          control={control}
          render={({ field: { onChange, value } }) => (
            <FormInputPicker
              value={value ?? null}
              data={schools ?? []}
              label={'School'}
              title="Search for school"
              onValueChange={value => onChange(value)}
            />
          )}
        />
        <Controller
          name="schoolInfo.classOff"
          control={control}
          render={({ field: { onChange, value } }) => (
            <FormInputPicker
              value={value ?? null}
              data={classesOfYears ?? []}
              label={'Class'}
              title="Search for class"
              onValueChange={value => onChange(value)}
            />
          )}
        />
        <View row spread center>
          <Controller
            name="personalInfo.height"
            control={control}
            render={({ field: { onChange, value } }) => (
              <FormInputField
                label={'Height'}
                value={value ?? ''}
                onChangeText={onChange}
              />
            )}
          />
          <Controller
            name="personalInfo.measureIn"
            control={control}
            render={({ field: { onChange, value } }) => (
              <FormInputPicker
                label={' '}
                onValueChange={value => onChange(value)}
                value={value ?? null}
                data={[
                  {
                    label: 'INCH',
                    value: 'INCH',
                  },
                  {
                    label: 'CM',
                    value: 'CM',
                  },
                  {
                    label: 'METER',
                    value: 'METER',
                  },
                ]}
              />
            )}
          />
          <Controller
            name="personalInfo.weight"
            control={control}
            render={({ field: { onChange, value } }) => (
              <FormInputField
                label={'Weight'}
                value={value ?? ''}
                onChangeText={onChange}
              />
            )}
          />
          <Controller
            name="personalInfo.weightIn"
            control={control}
            render={({ field: { onChange, value } }) => (
              <FormInputPicker
                label={' '}
                onValueChange={value => onChange(value)}
                value={value ?? null}
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
              />
            )}
          />
        </View>
      </View>
    </OnBoardingWrapper>
  );
}
