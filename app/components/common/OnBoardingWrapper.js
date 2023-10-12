import { KeyboardAwareScrollView, ProgressBar, TouchableOpacity, View, Text } from "react-native-ui-lib";
import { KeyboardAvoidingScrollView } from 'react-native-keyboard-avoiding-scroll-view';
import { ScrollView } from "react-native-gesture-handler";
import { KeyboardAvoidingView } from "react-native"
import { ViewContainer } from "./ViewConatiner";
import { ScreenHeader } from "./ScreenHeader";
import { customTheme } from "../../constants";
import { FormButton } from "./FormInputs";
export default function OnBoardingWrapper({
    title = '',
    children,
    label,
    loading,
    canGoBack = true,
    disabled = false,
    handleForm = () => null,
    skip = false,
    onSkip = () => null,
    progress = 0,
    backButtonAction = () => null,

}) {
    const CButton = () => (
        <View paddingH-16 marginB-32 marginT-12 >
            <FormButton
                onPress={handleForm}
                loading={loading}
                label={label}
                disabled={disabled}


            />
            {
                skip && <TouchableOpacity marginT-20 onPress={onSkip}>
                    <Text center white marginB-20
                    >Skip</Text>
                </TouchableOpacity>
            }
        </View>
    )
    return <>
        <KeyboardAvoidingScrollView stickyFooter={<CButton />} >
            <ViewContainer >
                {
                    canGoBack && <ScreenHeader
                        title={title}
                        backButtonAction={backButtonAction}
                    />
                }

                <ProgressBar
                    progress={progress}
                    progressColor={customTheme.colors.blue20}
                    style={{
                        backgroundColor: customTheme.colors.primary,
                        borderColor: customTheme.colors.blue1,
                        borderWidth: 1,
                    }}
                />
                {
                    children
                }


            </ViewContainer>



        </KeyboardAvoidingScrollView>
    </>


}