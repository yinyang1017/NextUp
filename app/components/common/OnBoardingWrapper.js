import { KeyboardAwareScrollView, ProgressBar, Keyboard, Constants, Colors, View } from "react-native-ui-lib";
import { ViewContainer } from "./ViewConatiner";
import { ScreenHeader } from "./ScreenHeader";
import { customTheme } from "../../constants";
import { FormButton } from "./FormInputs";

export default function OnBoardingWrapper({
    title = '',
    children,
    label,
    loading,
    handleForm = () => null
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
        <View marginH-20 marginT-32>
            {/* <FormButton
                onPress={handleForm}
                loading={loading}
                label={label}


            /> */}
        </View>


    </>


}