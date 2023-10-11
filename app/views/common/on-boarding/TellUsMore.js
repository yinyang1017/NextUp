import React from 'react';
import {
  View,
  Text,
} from 'react-native-ui-lib';
import { customTheme } from '../../../constants';
import { useOnBoarding, useTellUsMore } from '../../../hooks/useOnBoarding';
import { appImages } from '../../../constants/appImages';
import * as cities from '../../../utils/data/cities.json';
import * as states from '../../../utils/data/states.json';
import OnBoardingWrapper from '../../../components/common/OnBoardingWrapper';
import {
  FormActionPicker,
  FormButton,
  FormInputField,
  FormInputPicker,
  FormRadioGroup,
  FormSelectable,
} from '../../../components/common/FormInputs';
import { Controller, useWatch } from 'react-hook-form';
export default function TellUsMore() {
  const { onBoardingCount, handleOnBoarding, handleNavigation, states, handleBack } =
    useOnBoarding();
  const {
    control,
    playerPosition,
    playerImg,
    isPlayer,
    isCoach,
    cities,
    isTravelTeam,
    chekIfStateSelected,
    handleSubmit,
  } = useTellUsMore();
  const onSubmit = data => {
    handleOnBoarding(data, () => {
      const screenName = isPlayer ? 'PlayerDetails' : 'CoachingLocation';
      handleNavigation(screenName);
    });

  };
  // console.log('onBoardingCount', states);
  const _renderPlayerInputs = () => (<>
    <Controller
      name="gender"
      control={control}
      rules={{
        required: true,
      }}
      render={({ field: { onChange, value } }) => (
        <FormRadioGroup
          label={'Gender'}
          value={value}
          onValueChange={value => onChange(value)}
          radioValues={[
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' },
          ]}
        />
      )}
    />
    <Controller
      control={control}
      name="state"
      rules={{
        required: 'Please select a state',
      }}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        // console.log('error', error);
        return <FormInputPicker
          value={value}
          data={states ?? []}
          required
          label={'States'}
          title="Search for states"
          onValueChange={value => onChange(value)}
          error={
            error && error?.message
          }

        />
      }}
    />
    <Controller
      control={control}
      name="city"
      rules={{
        required: 'Please select a city',
      }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          <FormInputPicker
            value={value}
            required
            data={cities ?? []}
            label={'Cities'}
            title="Search for cities.."
            onValueChange={value => {
              if (chekIfStateSelected()) {
                onChange(value)
              }
            }}
            error={
              error && error?.message
            }
          />
        </>
      )}
    />

  </>)
  const _renderCoachSubInputs = () => (<>
    <View row center>
      <Controller
        control={control}
        name="onBoardingTeamName"
        rules={
          {
            required: 'Please select a team',
          }
        }
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <FormActionPicker
              value={value}
              data={states}
              label={'Select Team'}
              title="Search for teams.."
              required
              onValueChange={value => onChange(value)}
              error={
                error && error?.message
              }
            />
          </>

        )}
      />
      <Controller
        control={control}
        name="schoolInfo.gender"
        rules={{
          required: 'Please select a gender',
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <FormActionPicker
            value={value}
            data={['Boys', 'Girls']}
            required
            label={'Gender'}
            title="Search for cities.."
            onValueChange={value => onChange(value)}
            error={
              error && error?.message
            }

          />
        )}
      />
    </View>
    <View width={'50%'}>
      <Controller
        control={control}
        name="coachingType.ageGroup"
        rules={{
          required: 'Please select a level',
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <FormActionPicker
            value={value}
            required
            data={['Jr & Varsity', 'Varsity', 'Both']}
            label={'Level'}
            title="Search for levels.."
            onValueChange={value => onChange(value)}
            error={
              error && error?.message
            }

          />
        )}
      />
    </View>

  </>)
  const _renderCaochInputs = () => (<>
    <Controller
      name="coachingType.typeOfCoaching"
      control={control}
      rules={
        {
          required: 'Please select a option',
        }
      }
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <FormRadioGroup
          label={'Option'}
          value={value}
          onValueChange={value => onChange(value)}
          radioValues={[
            { label: 'High School', value: 'HIGH_SCHOOL' },
            { label: 'Travel Team', value: 'TRAVEL_TEAM' },
          ]}
          required
          error={
            error && 'Please select a option'
          }
        />
      )}
    />
    {
      isTravelTeam ? _renderTravelTeamInputs() : _renderCoachSubInputs()
    }
  </>
  );
  const _renderTravelTeamInputs = () => (
    <>
      <Controller
        name="coachingType.schoolName"
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
            label={'Team Name'}
            placeholder={'Enter Team Name'}
            value={value ?? ''}
            onChangeText={onChange}
            required
            error={
              error && error?.message
            }
          />
        )}
      />
      <View row spread centerH>
        <Controller
          control={control}
          name="state"
          rules={{
            required: 'Please select a state',
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => {
            // console.log('error', error);
            return <FormInputPicker
              value={value}
              data={states ?? []}
              required
              label={'States'}
              placeholder="Select State"
              title="Search for states"
              onValueChange={value => {
                onChange(value)
              }}
              error={
                error && error?.message
              }

            />
          }}
        />
        <Controller
          control={control}
          name="city"
          rules={{
            required: 'Please select a city',
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <FormInputPicker
              value={value}
              required
              data={cities ?? []}
              label={'Cities'}
              title="Search for cities.."
              placeholder="Select City"
              onValueChange={value => {
                if (chekIfStateSelected()) {
                  onChange(value)
                }
              }}
              error={
                error && error?.message
              }
            />
          )}
        />
      </View>
      <View row spread centerH>
        <Controller
          control={control}
          name="schoolInfo.gender"
          rules={{
            required: 'Please select a gender',
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <FormActionPicker
              value={value}
              data={['Boys', 'Girls']}
              placeholder="Select Gender"
              required
              label={'Gender'}
              title="Search for cities.."
              onValueChange={value => onChange(value)}
              error={
                error && error?.message
              }

            />
          )}
        />
        <Controller
          control={control}
          name="coachingType.ageGroup"
          required
          rules={{
            required: 'Please select a age group',
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <FormActionPicker
              value={value}
              data={['14 & Under', '15 & Under', '17 & Under']}
              required
              label={'Age Group'}
              placeholder="Select Age Group"
              title="Search for cities.."
              onValueChange={value => onChange(value)}
              error={
                error && error?.message
              }

            />
          )}
        />
      </View>

    </>
  )
  return (
    <OnBoardingWrapper handleForm={handleSubmit(onSubmit)} backButtonAction={handleBack} label={'Confirm'} progress={10}>
      <View
        style={{
          marginVertical: customTheme.spacings.spacing_16,
        }}>
        <Text
          style={{
            color: customTheme.colors.light,
            fontSize: customTheme.fontSizes.size_32,

            fontFamily: customTheme.fontFamily.robotoMedium,
          }}>
          Tell us
        </Text>
        <Text
          style={{
            color: customTheme.colors.light,
            fontSize: customTheme.fontSizes.size_32,
            fontWeight: '700',
            fontFamily: customTheme.fontFamily.robotoBold,
          }}>
          more
        </Text>
      </View>
      {/* From here the form content is display */}

      <View
        style={{
          marginTop: customTheme.spacings.spacing_20,
        }}>
        <Controller
          control={control}
          name="typeOfUser"
          render={({ field: { onChange, value } }) => (
            <FormSelectable
              value={value ?? null}
              onChange={onChange}
              data={[
                {
                  label: 'PLAYER',
                  value: 'PLAYER',
                  imgSrc: playerImg[playerPosition],
                },
                {
                  label: 'COACH',
                  value: 'COACH',
                  imgSrc: appImages.player_male,
                },
              ]}
            />
          )}
        />
        {
          isPlayer && _renderPlayerInputs()
        }
        {
          isCoach && _renderCaochInputs()
        }

        {/* <FormButton onPress={handleSubmit(onSubmit)} /> */}
      </View>
    </OnBoardingWrapper >
  );
}
