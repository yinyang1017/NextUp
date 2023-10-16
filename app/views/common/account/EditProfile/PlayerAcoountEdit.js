import * as React from 'react';
import { Alert, StyleSheet } from 'react-native';
import ImageUpload from '../../../../components/common/ImageUpload';
import { hp, wp } from '../../../../utils/responsive';
import { Fonts, Colors, Layout, customTheme } from '../../../../constants';
import AnimatedInput from '../../../../Helpers/react-native-animated-input';
import { KeyBoardAvoidingView } from '../../../../components/common/SrollViewContainer';
import { Controller, useForm } from 'react-hook-form';
import { View, TouchableOpacity, Text } from 'react-native-ui-lib';
import { FormDatePicker, FormInputField, FormMaskedInput } from '../../../../components/common/FormInputs';

const wide = Layout.width;
function PlayerAcoountEdit() {
    const {
        control,
        handleSubmit,
    } = useForm({
        reValidateMode: 'onChange',
    });
    const [isResetPasswordVisible, setIsResetPasswordVisible] = React.useState(false);

    const _renderResetPassword = () => {
        return <>
            <Controller
                name="oldPassword"
                control={control}
                rules={
                    {
                        required: 'Email ID is required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: 'Invalid email address',
                        }
                    }
                }
                render={({ field: { onChange, value }, fieldState: { error } }) => {
                    return <FormInputField
                        label={'Enter Old Password'}
                        placeholder="Enter Your Password"
                        value={value ?? null}
                        onChangeText={onChange}
                        trailingAccessory={
                            <TouchableOpacity>
                                <Text link-text> Create New</Text>
                            </TouchableOpacity>
                        }

                        required
                        inputMode='email'
                        error={
                            error && error?.message
                        }
                    />
                }
                }
            />
            <Controller
                name="oldPassword"
                control={control}
                rules={
                    {
                        required: 'Email ID is required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: 'Invalid email address',
                        }
                    }
                }
                render={({ field: { onChange, value }, fieldState: { error } }) => {
                    return <FormInputField
                        label={'New Password'}
                        placeholder="Enter Your Password"
                        value={value ?? null}
                        onChangeText={onChange}
                        required
                        inputMode='email'
                        error={
                            error && error?.message
                        }
                    />
                }
                }
            />
            <Controller
                name="oldPassword"
                control={control}
                rules={
                    {
                        required: 'Email ID is required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: 'Invalid email address',
                        }
                    }
                }
                render={({ field: { onChange, value }, fieldState: { error } }) => {
                    return <FormInputField
                        label={'Confirm Password'}
                        placeholder="Enter Your Password"
                        value={value ?? null}
                        onChangeText={onChange}
                        required
                        inputMode='email'
                        error={
                            error && error?.message
                        }
                    />
                }
                }
            />
        </>
    }
    return (
        <KeyBoardAvoidingView >
            <ImageUpload
                source={{
                    uri: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZG9jdG9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
                }}
                containerStyle={styles.imageUploadContainer}
            />
            <View row marginT-32>
                <Controller
                    name='firstName'
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
                    control={control}
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <View width={wide / 2}>
                            <FormInputField
                                label='First Name'
                                value={value}
                                removeSpace
                                required
                                onChangeText={onChange}
                                error={error?.message}
                                placeholder='Enter Your First Name'
                            />
                        </View>


                    )}
                />
                <Controller
                    name='lastName'
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
                        <View width={wide / 2}>
                            <FormInputField
                                label=' Last Name'
                                value={value}
                                required
                                removeSpace
                                onChangeText={onChange}
                                error={error?.message}
                                placeholder='Enter Your Last Name'
                            />
                        </View>

                    )}
                />
            </View>
            <Controller
                name="dateOfBirth"
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
                        required
                        error={
                            error && error?.message
                        }
                    />
                }
                }
            />
            <Controller
                name="phoneNumber"
                control={control}
                rules={
                    {
                        required: 'Date of Birth is required',
                    }
                }
                render={({ field: { onChange, value }, fieldState: { error } }) => {
                    return <FormMaskedInput
                        label={'Phone Number'}
                        placeholder="Enter Phone Number"
                        value={value ?? null}
                        onChangeText={onChange}
                        required
                        type='cel-phone'
                        error={
                            error && error?.message
                        }
                    />
                }
                }
            />
            <Controller
                name="email"
                control={control}
                rules={
                    {
                        required: 'Email ID is required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: 'Invalid email address',
                        }
                    }
                }
                render={({ field: { onChange, value }, fieldState: { error } }) => {
                    return <FormInputField
                        label={'Email ID'}
                        placeholder="Enter Your Email ID"
                        value={value ?? null}
                        onChangeText={onChange}
                        optionBtn={
                            {
                                title: 'RESET PASSWORD',
                                onPress: () => {
                                    setIsResetPasswordVisible(prev => !prev)
                                }
                            }
                        }
                        required
                        inputMode='email'
                        error={
                            error && error?.message
                        }
                    />
                }
                }
            />
            {
                isResetPasswordVisible && _renderResetPassword()
            }


        </KeyBoardAvoidingView>
    );
}
export default PlayerAcoountEdit;

const styles = StyleSheet.create({
    container: { flex: 1 },
    imageUploadContainer: { alignSelf: 'center', marginTop: customTheme.spacings.spacing_24 },
    saveButton: {
        marginHorizontal: wp(8),
        marginTop: 'auto',
        marginBottom: hp(2),
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignSelf: 'center',
        width: '100%',
    },
    flexItem: { marginBottom: 15, }

});
