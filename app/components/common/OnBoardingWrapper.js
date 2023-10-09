import { KeyboardAwareScrollView, ProgressBar, TouchableOpacity, View, Text } from "react-native-ui-lib";
import { ViewContainer } from "./ViewConatiner";
import { ScreenHeader } from "./ScreenHeader";
import { customTheme } from "../../constants";
import { FormButton } from "./FormInputs";
import { ScrollView } from "react-native-gesture-handler"
export default function OnBoardingWrapper({
    title = '',
    children,
    label,
    loading,
    canGoBack = true,
    handleForm = () => null,
    skip = false,
    onSkip = () => null,
    progress = 10
}) {
    return <>
        <KeyboardAwareScrollView  >
            <ViewContainer >
                {
                    canGoBack && <ScreenHeader
                        title={title}
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



        </KeyboardAwareScrollView>
        <View paddingH-16 marginB-32 marginT-12 >
            <FormButton
                onPress={handleForm}
                loading={loading}
                label={label}


            />
            {
                skip && <TouchableOpacity marginT-20 onPress={onSkip}>
                    <Text center white marginB-20
                    >Skip</Text>
                </TouchableOpacity>
            }
        </View>


    </>


}