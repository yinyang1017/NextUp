import React from 'react';
import {
  KeyboardAwareScrollView,
  ProgressBar,
  View,
} from 'react-native-ui-lib';
import { ViewContainer } from '../../../components/common/ViewConatiner';
import {
  FormButton,
  FormInputField,
  FormInputPicker,
} from '../../../components/common/FormInputs';
import { ScreenHeader } from '../../../components/common/ScreenHeader';
import { customTheme } from '../../../constants';
import * as states from '../../../utils/data/states.json';
import {
  useEnterPorfileDetails,
  useOnBoarding,
} from '../../../hooks/useOnBoarding';
import { Controller } from 'react-hook-form';

export default function CoachDetails() {
  const {
    onBoardingCount,
    handleOnBoarding,
    handleNavigation,
    isCoach,
    isPlayer,
  } = useOnBoarding();
  const { control, errors, handleSubmit } = useEnterPorfileDetails();
  const onSubmit = data => {
    handleOnBoarding(data);
    const screenName = isPlayer ? 'PlayerStyle' : 'PhotoUpload';
    handleNavigation(screenName);
  };
  return (
    <>
      <KeyboardAwareScrollView>
        <ViewContainer>
          <ScreenHeader
            title={'Enter Coach Details'}
            backButtonAction={() => {}}
          />
          <ProgressBar
            progress={onBoardingCount}
            progressColor={customTheme.colors.blue20}
          />
          <View useSafeArea marginT-12 flex>
            <View row>
              <Controller
                name="firstName"
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
                name="lastName"
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
            <View row center>
              <Controller
                control={control}
                name="schoolInfo.city"
                render={({ field: { onChange, value } }) => (
                  <FormInputPicker
                    value={value}
                    data={states?.states}
                    label={'City'}
                    title="Search for city.."
                    onValueChange={value => onChange(value)}
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
                    label={'State'}
                    title="Search for state.."
                    onValueChange={value => onChange(value)}
                  />
                )}
              />
            </View>
          </View>
          <View marginT-48>
            <FormButton label="Confirm" onPress={handleSubmit(onSubmit)} />
          </View>
        </ViewContainer>
      </KeyboardAwareScrollView>
    </>
  );
}
