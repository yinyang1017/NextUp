import { View, Text, TouchableOpacity } from "react-native-ui-lib"
import { customTheme } from "../../../constants"
import { appImages } from "../../../constants/appImages"
import { Dimensions, ImageBackground } from "react-native"
import { FormButton } from "../../../components/common/FormInputs"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faCamera } from "@fortawesome/free-solid-svg-icons"
import { useNavigation } from "@react-navigation/native"
import { useUpload } from "../../../hooks/useUpload"
import { useOnBoarding } from "../../../hooks/useOnBoarding"
import AppLoader from "../../../utils/Apploader"
import OnBoardingWrapper from "../../../components/common/OnBoardingWrapper"
import UpdloadTypeDialog from "../../../components/common/UploadTypeDialog"
import { useState } from "react"
export default function PhotoUpload() {
    const navigation = useNavigation()
    const { isMale, isPlayer, handleUserOnboardingRegistration, onBoardingCount } = useOnBoarding()
    const {
        isUploading,
        uploadProgress,
        pickDocument,
        scanDocument,
        uploadedDocument,
    } = useUpload()
    const [uploadType, setUploadType] = useState(false)
    const imageUrl = uploadedDocument?.imageUrl ? ({ uri: uploadedDocument?.imageUrl }) : isMale ? appImages.player_male : appImages.player_female
    const handlePress = () => {
        if (isPlayer) {
            handleUserOnboardingRegistration()
        } else {
            navigation.navigate('DocumentVerification')
        }
    }
    return <OnBoardingWrapper handleForm={handlePress} label={'Finish'} skip progress={onBoardingCount} onSkip={handlePress} >
        <View marginV-24 >
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
            { }
            <TouchableOpacity onPress={() => setUploadType(true)} center centerV>
                <>
                    <ImageBackground
                        source={imageUrl}
                        style={{

                            width: Dimensions.get('window').width / 2,
                            height: Dimensions.get('window').width / 2,
                            borderRadius: Dimensions.get('window').width,
                            overflow: 'hidden',


                        }}>
                        <View center centerH centerV flex backgroundColor={!uploadedDocument?.imageUrl ? customTheme.colors.blue20 : ''} style={
                            {
                                opacity: 0.8
                            }
                        }>
                            <FontAwesomeIcon icon={faCamera} size={customTheme.spacings.spacing_24} color={customTheme.colors.light} />
                        </View>

                    </ImageBackground>

                </>
            </TouchableOpacity>
            <AppLoader visible={isUploading.loading} loadingMessage={`${uploadProgress} %`} />
            <UpdloadTypeDialog
                isVisible={uploadType}
                onClose={() => setUploadType(false)}
                handlePick={() => pickDocument()}
                handleScan={() => scanDocument()}
            />
        </View>
    </OnBoardingWrapper>
}     