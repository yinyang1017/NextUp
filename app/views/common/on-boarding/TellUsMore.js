import React from 'react';
import {
  ProgressBar,
  View,
  Text,
  Checkbox,
  RadioGroup,
  RadioButton,
  Picker,
  TextField,
  Button,
} from 'react-native-ui-lib';
import { ViewContainer } from '../../../components/common/ViewConatiner';
import { ScrollView } from 'react-native-gesture-handler';

import { CommonStyles, customTheme, SafeContainer } from '../../../constants';
import { ScreenHeader } from '../../../components/common/ScreenHeader';
import TextComponent from '../../../components/common/TextComponent';
import { useState } from 'react';
import { SelectableCard } from '../../../components/common/SelectableCard';
import { width } from '../../../constants/dimensions';
import { useOnBoarding, useTellUsMore } from '../../../hooks/useOnBoarding';
import { appImages } from '../../../constants/appImages';
import * as cities from '../../../utils/data/cities.json';
import * as states from '../../../utils/data/states.json';

import {
  FormButton,
  FormInputPicker,
  FormRadioGroup,
  FormSelectable,
} from '../../../components/common/FormInputs';
import { ScrollViewContainer } from '../../../components/common/SrollViewContainer';
import { Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
export default function TellUsMore() {
  const { onBoardingCount, handleOnBoarding, handleNavigation, } =
    useOnBoarding();
  const {
    control,
    playerPosition,
    playerImg,
    isPlayer,
    isCoach,
    handleSubmit,
  } = useTellUsMore();
  const onSubmit = data => {
    handleOnBoarding(data);
    const screenName = isPlayer ? 'PlayerDetails' : 'CoachDetails';
    handleNavigation(screenName);
  };
  const _renderPlayerInputs = () => (<>
    <Controller
      name="personalInfo.gender"
      control={control}
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
      name="schoolInfo.state"
      render={({ field: { onChange, value } }) => (
        <FormInputPicker
          value={value}
          data={states?.states}
          label={'States'}
          title="Search for staets.."
          onValueChange={value => onChange(value)}
        />
      )}
    />
    <Controller
      control={control}
      name="schoolInfo.city"
      render={({ field: { onChange, value } }) => (
        <FormInputPicker
          value={value}
          data={cities?.cities}
          label={'Cities'}
          title="Search for cities.."
          onValueChange={value => onChange(value)}
        />
      )}
    />

  </>)
  const _renderCaochInputs = () => (<>
    <Controller
      name="coachingType.typeOfCoaching"
      control={control}
      render={({ field: { onChange, value } }) => (
        <FormRadioGroup
          label={'Option'}
          value={value}
          onValueChange={value => onChange(value)}
          radioValues={[
            { label: 'High School', value: 'HIGH_SCHOOL' },
            { label: 'Travel Team', value: 'TRAVEL_TEAM' },
          ]}
        />
      )}
    />
    <View row>
      <Controller
        control={control}
        name="onBoardingTeamName"
        render={({ field: { onChange, value } }) => (
          <FormInputPicker
            value={value}
            data={states?.states}
            label={'Select Team'}
            title="Search for teams.."
            onValueChange={value => onChange(value)}
          />
        )}
      />
      <Controller
        control={control}
        name="schoolInfo.gender"
        render={({ field: { onChange, value } }) => (
          <FormInputPicker
            value={value}
            data={[{ label: 'Boys', value: 'boys' }, { label: 'Girls', value: 'girls' }]}

            label={'Gender'}
            title="Search for cities.."
            onValueChange={value => onChange(value)}
          />
        )}
      />
    </View>
    <Controller
      control={control}
      name="coachingType.level"
      render={({ field: { onChange, value } }) => (
        <FormInputPicker
          value={value}
          data={states?.states}
          label={'Level'}
          title="Search for levels.."
          onValueChange={value => onChange(value)}
        />
      )}
    />



  </>)
  return (
    <>
      <ScrollViewContainer>
        <ScreenHeader backButtonAction={() => { }} />
        <ProgressBar
          progress={onBoardingCount}
          progressColor={customTheme.colors.blue20}
        />
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
          <FormButton onPress={handleSubmit(onSubmit)} />
        </View>
      </ScrollViewContainer>
    </>
  );
}
