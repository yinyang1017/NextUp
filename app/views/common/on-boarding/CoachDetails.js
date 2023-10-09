import React from 'react';
import {
    View,
} from 'react-native-ui-lib';
import { ViewContainer } from '../../../components/common/ViewConatiner';
import {
    FormButton,
    FormInputField,
    FormInputPicker,
} from '../../../components/common/FormInputs';
import * as states from '../../../utils/data/states.json';
import {
    useEnterPorfileDetails,
    useOnBoarding,
} from '../../../hooks/useOnBoarding';
import { Controller } from 'react-hook-form';
import OnBoardingWrapper from '../../../components/common/OnBoardingWrapper';
import { errorMessageOnType } from '../../../utils/helper';
export default function CoachDetails() {
    const { onBoardingCount, handleOnBoarding, handleNavigation, isCoach, isPlayer, } =
        useOnBoarding();
    const { control, errors, handleSubmit } = useEnterPorfileDetails();
    const onSubmit = data => {
        handleOnBoarding(data);
        const screenName = isPlayer ? 'PlayerStyle' : 'PhotoUpload';
        handleNavigation(screenName);
    };

    return (
        <OnBoardingWrapper title='Enter Coach Details' handleForm={handleSubmit(onSubmit)} label={'Confirm'}>

            <View useSafeArea marginT-12 flex>
                <Controller
                    name="firstName"
                    control={control}
                    rules={{
                        required: true,
                        maxLength: 50,
                        minLength: 3,
                        pattern: /^[a-zA-Z ]+$/,
                    }}
                    render={({ field: { onChange, value }, fieldState: { error } }) => {
                        // console.log(error);
                        return <FormInputField
                            label={'First Name'}

                            value={value ?? ''}
                            onChangeText={onChange}
                            error={
                                error && errorMessageOnType(error)
                            }
                        />
                    }}
                />
                <Controller
                    name="lastName"
                    control={control}
                    rules={{
                        required: true,
                        maxLength: 50,
                        minLength: 3,
                        pattern: /^[a-zA-Z ]+$/,
                    }}
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <FormInputField
                            label={'Last Name'}
                            value={value ?? ''}
                            onChangeText={onChange}
                            error={
                                error && errorMessageOnType(error)
                            }
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="schoolInfo.city"
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <FormInputPicker
                            value={value}
                            data={states?.states}
                            label={'City'}
                            title="Search for city.."
                            onValueChange={value => onChange(value)}
                            error={
                                error && errorMessageOnType(error)
                            }
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="schoolInfo.state"
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <FormInputPicker
                            value={value}
                            data={states?.states}
                            label={'State'}
                            title="Search for state.."
                            onValueChange={value => onChange(value)}
                            error={
                                error && errorMessageOnType(error)
                            }
                        />
                    )}
                />

            </View>
        </OnBoardingWrapper>

    );
}
