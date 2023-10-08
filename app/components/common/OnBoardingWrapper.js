import { KeyboardAwareScrollView, ProgressBar, TouchableOpacity, View, Text } from "react-native-ui-lib";
import { ViewContainer } from "./ViewConatiner";
import { ScreenHeader } from "./ScreenHeader";
import { customTheme } from "../../constants";
import { FormButton } from "./FormInputs";

export default function OnBoardingWrapper({
    title = '',
    children,
    label,
    loading,
    handleForm = () => null,
    skip = false,
    onSkip = () => null
}) {
    return <>
        <KeyboardAwareScrollView >
            <ViewContainer >
                <ScreenHeader
                    title={title}
                />
                <ProgressBar
                    progress={10}
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


        </KeyboardAwareScrollView>
        <View marginH-20 >
            <FormButton
                onPress={handleForm}
                loading={loading}
                label={label}


            />
            {
                skip && <TouchableOpacity marginB-8 onPress={onSkip}>
                    <Text center white marginB-20
                    >Skip</Text>
                </TouchableOpacity>
            }

        </View>


    </>


}