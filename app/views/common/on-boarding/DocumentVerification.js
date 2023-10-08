import { View, Text, ProgressBar, TouchableOpacity, Wizard } from "react-native-ui-lib"
import { ScrollViewContainer } from "../../../components/common/SrollViewContainer";
import { Pressable } from "react-native";
import StepIndicator from 'react-native-step-indicator';
import { ScreenHeader } from "../../../components/common/ScreenHeader"
import { ViewContainer } from "../../../components/common/ViewConatiner"
import { customTheme } from "../../../constants"
import { appImages } from "../../../constants/appImages"
import { Dimensions, ImageBackground } from "react-native"
import { FormButton } from "../../../components/common/FormInputs"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faCamera, faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import { useNavigation } from "@react-navigation/native"
import { useUpload } from "../../../hooks/useUpload"
import { useOnBoarding } from "../../../hooks/useOnBoarding"
import { useMemo, useState } from "react"

const VerticalStepIndicator = (props) => {
    const { labels, currentPosition } = props
    const { pickDocument } = useUpload()
    const { handleOnBoarding, onBoarding } = useOnBoarding()
    const handleIndentity = () => {
        pickDocument((res) => {
            handleOnBoarding({
                idProofUrl: res?.imageUrl
            })
        })

    }
    const handleCertificate = () => {
        pickDocument((res) => {
            handleOnBoarding({
                certificateUrl: res?.imageUrl
            })
        })

    }
    return (
        <View row marginT-20  >
            <View width={'20%'} marginL-12 center >
                <View center>
                    <View row>
                        <FontAwesomeIcon icon={faCheckCircle} size={24} color={
                            onBoarding?.idProofUrl ? customTheme.colors.green :
                                customTheme.colors.grey
                        } />


                    </View>
                    <View
                        center
                        style={{
                            height: Dimensions.get('window').height / 6,
                            backgroundColor: onBoarding?.idProofUrl ? customTheme.colors.green :
                                customTheme.colors.grey,
                            borderColor: onBoarding?.idProofUrl ? customTheme.colors.green :
                                customTheme.colors.grey,
                            borderWidth: 1,
                            width: 1,
                            borderStyle: 'dotted',
                        }}
                    />
                    <View>
                        <FontAwesomeIcon icon={faCheckCircle} size={24} color={onBoarding?.certificateUrl ? customTheme.colors.green :
                            customTheme.colors.grey} />
                    </View>

                </View>
            </View>
            <View>
                <Pressable
                    style={{
                        width: Dimensions.get('window').width / 2,
                        height: Dimensions.get('window').width / 3,
                        borderColor: customTheme.colors.lightBlue,
                        borderWidth: 2,
                        borderRadius: 16,
                        marginVertical: 10,
                        justifyContent: 'center',
                        alignContent: 'center',
                        alignSelf: 'center',
                    }}
                    onPress={handleIndentity}
                >
                    <View center>
                        <FontAwesomeIcon icon={faCamera} size={24} color={customTheme.colors.blue20} />
                        <Text lineBreakMode="tail" blue10 marginV-8>Upload the identity</Text>
                    </View>

                </Pressable>
                <Text white center marginV-12 style={{
                    fontSize: customTheme.fontSizes.size_16,
                    fontFamily: customTheme.fontFamily.robotoRegular,
                    opacity: 0.7

                }}>For verification try not to skip this {`\n`} process</Text>
                <Pressable
                    disabled
                    style={{
                        width: Dimensions.get('window').width / 2,
                        height: Dimensions.get('window').width / 3,
                        borderColor: customTheme.colors.lightBlue,
                        borderWidth: 2,
                        borderRadius: 16,
                        marginVertical: 10,
                        justifyContent: 'center',
                        alignContent: 'center',
                        alignSelf: 'center',
                    }}
                    onPress={handleCertificate}
                >

                    <View center>
                        <FontAwesomeIcon icon={faCamera} size={24} color={customTheme.colors.blue20} />
                        <Text lineBreakMode="tail" blue10 marginV-8>Upload the certificate</Text>
                    </View>
                </Pressable>

            </View>


        </View>



    )
}
export default function DocumentVerification() {
    const [currentPosition, setCurrentPosition] = useState(0)
    const navigation = useNavigation()
    const { isMale, isPlayer, handleUserOnboardingRegistration } = useOnBoarding()
    const {
        isUploading,
        uploadProgress,
        pickDocument,
        uploadedDocument,

        scanDocument
    } = useUpload()
    const imageUrl = uploadedDocument?.imageUrl ? ({ uri: uploadedDocument?.imageUrl }) : isMale ? appImages.player_male : appImages.player_female
    const handlePress = () => {
        handleUserOnboardingRegistration()
    }
    return <ScrollViewContainer>
        <ScreenHeader />
        <ProgressBar progress={55} progressColor={customTheme.colors.blue20} />
        <View marginV-24 >
            <Text white style={{
                fontSize: customTheme.fontSizes.size_32,
                fontFamily: customTheme.fontFamily.robotoLight,
                fontWeight: '200',
            }}>One Last </Text>
            <Text white style={{
                fontSize: customTheme.fontSizes.size_32,
                fontFamily: customTheme.fontFamily.robotoLight,
                fontWeight: '700',
            }}>Step </Text>
            <VerticalStepIndicator />
        </View>
        <View marginT-32></View>
        <FormButton disabled={isUploading.loading} label={isUploading.type ? isUploading?.type : 'Finish'} onPress={handlePress} />
        <TouchableOpacity disabled={isUploading.loading} onPress={handlePress}>
            <Text center white marginB-20
            >Skip</Text>
        </TouchableOpacity>
    </ScrollViewContainer>
}