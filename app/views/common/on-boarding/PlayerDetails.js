import { KeyboardAwareScrollView, ProgressBar, View } from "react-native-ui-lib";
import { ViewContainer } from "../../../components/common/ViewConatiner";
import { FormButton, FormDatePicker, FormInputField, FormInputPicker, FormSelectable } from "../../../components/common/FormInputs";
import { ScreenHeader } from "../../../components/common/ScreenHeader";
import { customTheme } from "../../../constants";
import * as cities from "../../../utils/data/cities.json"
import * as states from "../../../utils/data/states.json"
import { useNavigation } from "@react-navigation/native";


export default function PlayerDetails() {
    const navigation = useNavigation()
    return <>
        <KeyboardAwareScrollView>
            <ViewContainer>
                <ScreenHeader title={'Enter Details'} backButtonAction={() => { }} />
                <ProgressBar progress={55} progressColor={customTheme.colors.blue20} />
                <View useSafeArea marginT-12 flex>
                    <View row spread >
                        <FormInputField
                            label={'First Name'}
                        />
                        <FormInputField
                            label={'Last Name'}
                        />

                    </View>
                    <FormDatePicker
                        label={'Date of Birth'}
                        placeholder="Select date"

                    />
                    <View row spread>
                        <FormInputPicker
                            value={null}
                            data={cities?.cities}
                            label={'City'}
                            title="Search City"
                            onValueChange={value => null}

                        />
                        <FormInputPicker
                            value={null}
                            data={states.states}
                            label={'State'}
                            title="Search State"
                            onValueChange={value => null}

                        />
                    </View>
                    <View
                        row
                        spread
                        center
                    >
                        <FormInputField
                            label={'Height'}
                        />
                        <FormInputPicker
                            label={' '}
                            onValueChange={value => null}
                            data={[
                                {
                                    label: 'INCH',
                                    value: 'INCH'
                                },
                                {
                                    label: 'CM',
                                    value: 'CM'
                                },
                                {
                                    label: 'METER',
                                    value: 'METER'
                                }
                            ]}
                        />
                        <FormInputField
                            label={'Weight'}
                        />
                        <FormInputPicker
                            label={' '}
                            onValueChange={value => null}
                            data={[
                                {
                                    label: 'INCH',
                                    value: 'INCH'
                                },
                                {
                                    label: 'CM',
                                    value: 'CM'
                                },
                                {
                                    label: 'METER',
                                    value: 'METER'
                                }
                            ]}
                        />
                    </View>


                </View>
                <FormButton
                    label="Confirm"
                    onPress={() => navigation.navigate('PlayerStyle')}

                />

            </ViewContainer>

        </KeyboardAwareScrollView>
    </>
}