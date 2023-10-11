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
    useLocationDetails,
    useOnBoarding,
} from '../../../hooks/useOnBoarding';
import { Controller } from 'react-hook-form';

export default function SelectCoachingLocation() {
    const {
        onBoardingCount,
        handleOnBoarding,
        handleNavigation,
        handleBack,
        states,
        handleCoachRegistration
    } = useOnBoarding();
    const { control, cities, schools, handleSubmit, chekIfStateSelected } = useLocationDetails();
    const onSubmit = data => {
        handleOnBoarding(data, () => {
            handleNavigation('CoachDetails');
        });
        // const screenName = 'PhotoUpload';
        // handleNavigation(screenName);
    };
    return (
        <OnBoardingWrapper handleForm={handleSubmit(onSubmit)} progress={onBoardingCount} title='Select Your Location' backButtonAction={handleBack} >

            <View useSafeArea marginT-12 flex>
                <View row center>
                    <Controller
                        control={control}
                        name="schoolInfo.state"
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
                        name="schoolInfo.city"
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
                <Controller
                    control={control}
                    name="schoolInfo.name"
                    rules={{
                        required: {
                            value: true,
                            message: 'Please enter school name',
                        },
                    }}
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <FormInputPicker
                            value={value}
                            data={schools}

                            label={'School'}
                            title="Search for school.."
                            required
                            error={
                                error && error?.message
                            }
                            placeholder="Select School"
                            onValueChange={value => {
                                if (chekIfStateSelected()) {
                                    onChange(value)
                                }
                            }}
                        />
                    )}
                />
            </View>

        </OnBoardingWrapper>
    );
}
