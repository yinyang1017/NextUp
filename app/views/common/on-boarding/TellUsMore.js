import { ProgressBar, View, Text, Checkbox, RadioGroup, RadioButton, Picker, TextField, Button } from "react-native-ui-lib";
import { ViewContainer } from "../../../components/common/ViewConatiner";
import { ScrollView } from 'react-native-gesture-handler';

import { CommonStyles, customTheme, SafeContainer } from "../../../constants";
import { ScreenHeader } from "../../../components/common/ScreenHeader";
import TextComponent from "../../../components/common/TextComponent";
import { useState } from "react";
import { SelectableCard } from "../../../components/common/SelectableCard";
import { width } from "../../../constants/dimensions"
import { useOnBoarding } from "../../../hooks/useOnBoarding";
import { appImages } from "../../../constants/appImages";
import * as schoolsData from "../../../utils/data/schools.json"
import * as class_years from "../../../utils/data/classYears.json"
import { FormButton, FormInputPicker, FormRadioGroup, FormSelectable } from "../../../components/common/FormInputs";
import { ScrollViewContainer } from "../../../components/common/SrollViewContainer";
export default function TellUsMore() {
    const {
        onBoarding,
        onBoardingCount,
        handleSubmit,
        handleOnBoarding
    } = useOnBoarding();
    return <>
        <ScrollViewContainer>
            <ScreenHeader backButtonAction={() => { }} />
            <ProgressBar progress={onBoardingCount} progressColor={customTheme.colors.blue20} />
            <View style={{
                marginVertical: customTheme.spacings.spacing_16
            }}>
                <Text style={{
                    color: customTheme.colors.light,
                    fontSize: customTheme.fontSizes.size_32,

                    fontFamily: customTheme.fontFamily.robotoMedium
                }}>Tell us</Text>
                <Text
                    style={{
                        color: customTheme.colors.light,
                        fontSize: customTheme.fontSizes.size_32,
                        fontWeight: '700',
                        fontFamily: customTheme.fontFamily.robotoBold
                    }}
                >more</Text>
            </View>
            {/* From here the form content is display */}

            <View style={{
                marginTop: customTheme.spacings.spacing_20
            }}>
                <FormSelectable
                    value={onBoarding?.type}
                    data={[
                        {
                            label: 'Coach',
                            value: 'coach',
                            imgSrc: appImages.player_male,
                        },
                        {
                            label: 'Player',
                            value: 'player',
                            imgSrc: appImages.player_male
                        }
                    ]}

                />

                <FormRadioGroup
                    label={'Gender'}
                    value={onBoarding?.gender}
                    onValueChange={value => handleOnBoarding('gender', value)}
                    radioValues={[
                        { label: 'Male', value: 'male' },
                        { label: 'Female', value: 'female' }
                    ]}


                />
                <FormInputPicker
                    value={onBoarding?.school}
                    data={schoolsData?.schools}
                    label={'School'}
                    title="Search Schools"
                    onValueChange={value => handleOnBoarding('school', value)}

                />
                <FormInputPicker
                    value={onBoarding?.classYear}
                    data={class_years.class_years}
                    label={'Class'}
                    title="Search Class"
                    onValueChange={value => handleOnBoarding('classYear', value)}

                />
                <FormButton
                    onPress={handleSubmit}
                />

            </View>



        </ScrollViewContainer>
    </>
}