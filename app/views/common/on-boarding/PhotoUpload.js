import { View, Text, ProgressBar, Avatar } from "react-native-ui-lib"
import { ScreenHeader } from "../../../components/common/ScreenHeader"
import { ViewContainer } from "../../../components/common/ViewConatiner"
import { customTheme } from "../../../constants"
import { appImages } from "../../../constants/appImages"
import { Dimensions, ImageBackground } from "react-native"
import { FormButton } from "../../../components/common/FormInputs"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faCamera } from "@fortawesome/free-solid-svg-icons"
import { useNavigation } from "@react-navigation/native"
export default function PhotoUpload() {
    const navigation = useNavigation()
    return <ViewContainer>
        <ScreenHeader />
        <ProgressBar progress={55} progressColor={customTheme.colors.blue20} />
        <View flex marginV-12>
            <Text white style={{
                fontSize: customTheme.fontSizes.size_32,
                fontFamily: customTheme.fontFamily.robotoLight,
                fontWeight: '200',
            }}>Upload </Text>
            <Text white style={{
                fontSize: customTheme.fontSizes.size_32,
                fontFamily: customTheme.fontFamily.robotoLight,
                fontWeight: '700',
            }}>Photo </Text>
            <View center centerV flex>
                <ImageBackground
                    source={appImages.player_male}
                    style={{

                        width: Dimensions.get('window').width / 2,
                        height: Dimensions.get('window').width / 2,
                        borderRadius: Dimensions.get('window').width,
                        overflow: 'hidden',


                    }}>
                    <View center centerH centerV flex backgroundColor={customTheme.colors.blue20} style={
                        {
                            opacity: 0.8
                        }
                    }>
                        <FontAwesomeIcon icon={faCamera} size={customTheme.spacings.spacing_24} color={customTheme.colors.light} />
                    </View>

                </ImageBackground>

            </View>
            <FormButton label="Finish" onPress={() => navigation.navigate('PlayerStack')} />
        </View>

    </ViewContainer>
}