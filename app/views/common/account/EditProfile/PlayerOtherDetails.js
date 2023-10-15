import * as React from 'react';
import { Alert, StyleSheet } from 'react-native';
import ImageUpload from '../../../../components/common/ImageUpload';
import { hp, wp } from '../../../../utils/responsive';
import { Fonts, Colors, Layout, customTheme } from '../../../../constants';
import AnimatedInput from '../../../../Helpers/react-native-animated-input';
import { KeyBoardAvoidingView } from '../../../../components/common/SrollViewContainer';
import { Controller, useForm } from 'react-hook-form';
import { View, TouchableOpacity, Text } from 'react-native-ui-lib';
import { FormDatePicker, FormInputField, FormInputPicker, FormMaskedInput } from '../../../../components/common/FormInputs';
import { useLookup } from '../../../../hooks/useLookup';

const wide = Layout.width;
function PlaayerOtherDetails() {
    const {
        resetFilter,
        queryFilter,
        schools,
        cities,
        states,
        classOfYears,
        query
    } = useLookup();
    const {
        control,
        handleSubmit,
    } = useForm({
        reValidateMode: 'onChange',
    });

    const _renderInputFilter = (value) => {
        return < >
            <View width={'50%'} marginR-4>
                <FormInputPicker
                    data={states ?? []}
                    value={query?.state ?? ''}
                    label={'State'}
                    title="Search for States"
                    placeholder="Select State"
                    onValueChange={value => {
                        queryFilter('state', value?.value)
                    }}
                />
            </View>
            <View width={'50%'}>
                <FormInputPicker
                    data={cities ?? []}
                    label={'City'}
                    value={query?.city}
                    title="Search for city"
                    placeholder="City"
                    onValueChange={value => {
                        queryFilter('city', value?.value)
                    }}
                />
            </View>



        </>
    }

    return (
        <KeyBoardAvoidingView >
            <View marginT-32>
                <Controller
                    control={control}
                    name="schoolInfo"
                    rules={{
                        required: 'Please select a school',
                    }}
                    render={({ field: { onChange, value }, fieldState: { error } }) => {

                        return <FormInputPicker
                            value={value?.value || value}
                            data={schools ?? []}
                            required
                            renderFilter={() => {
                                return _renderInputFilter(value);
                            }}
                            label={'School'}
                            title="Search for Schools"
                            placeholder="Select School"
                            onValueChange={value => {
                                resetFilter()
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
                    name="schoolInfo.classOff"
                    rules={{
                        required: 'Please select a class off',
                    }}
                    render={({ field: { onChange, value }, fieldState: { error } }) => (

                        <FormInputPicker
                            value={value}
                            required
                            data={classOfYears ?? []}
                            label={'Class Off'}
                            title="Search for class off"
                            placeholder="Select Class off"
                            onValueChange={value => {
                                onChange(value.value)
                            }}
                            error={
                                error && error?.message
                            }
                        />

                    )}
                />

                <View row >
                    <Controller
                        control={control}
                        name="personalInfo.state"
                        rules={{
                            required: {
                                value: true,
                                message: 'Please select a state',
                            },
                        }}
                        render={({ field: { onChange, value } }) => (
                            <View width={'50%'}>
                                <FormInputPicker
                                    value={value}
                                    data={states}
                                    label={'State'}
                                    required
                                    title="Search for state.."
                                    placeholder="Select State"
                                    onValueChange={value => {
                                        setValue('personalInfo.city', '')
                                        queryFilter('state', value?.value)

                                        onChange(value?.value)
                                    }}
                                />
                            </View>

                        )}
                    />
                    <Controller
                        control={control}
                        name="personalInfo.city"
                        render={({ field: { onChange, value } }) => (
                            <View width={'50%'}>
                                <FormInputPicker
                                    value={value}
                                    data={cities}
                                    label={'City'}
                                    title="Search for city.."
                                    required
                                    placeholder="Select City"
                                    onValueChange={value => {
                                        onChange(value.value)
                                    }}
                                />
                            </View>

                        )}
                    />
                </View>
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
                                tailLabel={'INCH'}
                                placeholder="Enter Height"
                                onChangeText={onChange}
                                forHeight
                                required
                                onValueChange={pickvalue => {
                                    onChange(pickvalue);
                                }}
                                error={
                                    error && error?.message
                                }
                                data={[
                                    {
                                        label: 'INCH',
                                        value: 'INCH',
                                    },
                                    {
                                        label: 'FEET',
                                        value: 'FEET',
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
                                tailLabel={'KG'}
                                placeholder="Enter Weight"
                                onChangeText={onChange}
                                required
                                onValueChange={pickvalue => {
                                    onChange(pickvalue);
                                }}
                                data={[
                                    {
                                        label: 'LBS',
                                        value: 'LBS',
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
        </KeyBoardAvoidingView>
    );
}
export default PlaayerOtherDetails;
