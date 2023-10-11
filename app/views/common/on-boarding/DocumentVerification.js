import { View, Text, ProgressBar, TouchableOpacity, Wizard, Image, Dialog, PanningProvider } from "react-native-ui-lib"
import { ScrollViewContainer } from "../../../components/common/SrollViewContainer";
import { ImageBackground, Pressable } from "react-native";
import { ScreenHeader } from "../../../components/common/ScreenHeader"
import { Layout, customTheme } from "../../../constants"
import { appImages } from "../../../constants/appImages"
import { Dimensions, } from "react-native"
import { FormButton } from "../../../components/common/FormInputs"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faCamera, faCheckCircle, faEye } from "@fortawesome/free-solid-svg-icons"
import { useNavigation } from "@react-navigation/native"
import { useUpload } from "../../../hooks/useUpload"
import { useOnBoarding } from "../../../hooks/useOnBoarding"
import { useEffect, useMemo, useState } from "react"
import OnBoardingWrapper from "../../../components/common/OnBoardingWrapper";
import UpdloadTypeDialog from "../../../components/common/UploadTypeDialog";
import AppLoader from "../../../utils/Apploader";
const ImageRender = ({ uri, onPress }) => {
    console.log('uri', uri)

    return <>
        <ImageBackground style={{ justifyContent: 'center', alignContent: 'center' }} resizeMode="contain" source={appImages.placeHolderPhotoIdBorder}>
            <Image
                resizeMethod="scale"
                resizeMode="contain"
                overlayIntensity="HIGH"
                customOverlayContent={() => (
                    <Text red10>eye</Text>
                )}
                style={{
                    alignSelf: 'center',
                    borderRadius: customTheme.spacings.spacing_16,
                }}
                width={
                    Dimensions.get('window').width / 2} height={Dimensions.get('window').width / 2} source={{
                        uri: uri
                    }}
            />
            <TouchableOpacity onPress={onPress}
                style={{
                    position: 'absolute',
                    backgroundColor: customTheme.colors.tertiary,
                    opacity: 0.5,
                    height: Dimensions.get('window').width / 3,
                    width: Dimensions.get('window').width / 2,
                    justifyContent: 'center',
                    alignSelf: 'center',
                }}

            >
                <FontAwesomeIcon style={{
                    alignSelf: 'center',
                }} icon={faEye} size={24} color={customTheme.colors.white} />
            </TouchableOpacity>
        </ImageBackground>
    </>
}
const VerticalStepIndicator = (props) => {
    const { doc, setUpload, setVisibleDoc } = props

    const handleIndentity = () => {
        setUpload({
            idProof: true,
            value: true
        })

    }
    const handleCertificate = () => {
        setUpload({
            idProof: false,
            value: true
        })

    }
    return (
        <View row marginT-20  >
            <View width={'20%'} marginL-12 center >
                <View center>
                    <View row>
                        <FontAwesomeIcon icon={faCheckCircle} size={24} color={
                            doc?.idProofUrl ? customTheme.colors.success :
                                '#70768A'
                        } />


                    </View>
                    <View
                        center
                        style={{
                            height: Dimensions.get('window').height / 6,
                            backgroundColor: doc?.idProofUrl ? customTheme.colors.green :
                                customTheme.colors.grey,
                            borderColor: '#70768A',
                            borderWidth: 1,
                            width: 1,
                            borderStyle: 'dashed',  // Use 'dashed' style
                        }}
                    />
                    <View>
                        <FontAwesomeIcon icon={faCheckCircle} size={24} color={doc?.certificateUrl ? customTheme.colors.success :
                            '#70768A'} />
                    </View>

                </View>
            </View>
            <View>

                {
                    doc?.idProofUrl ? <ImageRender uri={doc?.idProofUrl} onPress={() => {
                        setUpload({
                            idProof: true,
                            value: false
                        })
                        setVisibleDoc(true)
                    }} /> : (
                        <TouchableOpacity

                            onPress={handleIndentity}
                        >

                            <ImageBackground
                                resizeMode="contain"
                                source={appImages.certificateCoaching}
                                style={{
                                    width: Dimensions.get('window').width / 2,
                                    height: Dimensions.get('window').width / 2,
                                    overflow: 'hidden',
                                    justifyContent: 'center',

                                }}
                            >
                                <Text center uppercase style={{
                                    color: '#70768A'
                                }}>Photo Id</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    )
                }




                <Text white center marginV-12 style={{
                    fontSize: customTheme.fontSizes.size_16,
                    fontFamily: customTheme.fontFamily.robotoRegular,
                    opacity: 0.7

                }}>For verification try not to skip this {`\n`} process</Text>
                {
                    doc?.certificateUrl ? (
                        <ImageRender uri={doc?.certificateUrl} onPress={() => {
                            setUpload({
                                idProof: true,
                                value: false
                            })
                            setVisibleDoc(true)
                        }} />
                    ) : (
                        <TouchableOpacity

                            onPress={handleCertificate}
                        >

                            <ImageBackground
                                resizeMode="contain"
                                source={appImages.certificateCoaching}
                                style={{
                                    width: Dimensions.get('window').width / 2,
                                    height: Dimensions.get('window').width / 2,
                                    overflow: 'hidden',
                                    justifyContent: 'center',

                                }}
                            >
                                <Text center uppercase style={{
                                    color: '#70768A'
                                }}>Coaching {`\n`} Certificate</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    )
                }

            </View>


        </View>



    )
}
export default function DocumentVerification() {
    const [upload, setUpload] = useState({
        idProof: false,
        value: false
    })
    const [doc, setDoc] = useState({
        idProofUrl: null,
        certificateUrl: null
    })
    const [visibleDoc, setVisibleDoc] = useState(null)
    const {
        isUploading,
        uploadProgress,
        pickDocument,
        uploadedDocument,
        scanDocument
    } = useUpload()
    const handlePress = () => {

    }
    const handleDoc = () => {
        console.log(upload, uploadedDocument)
        if (upload.idProof) {
            setDoc({
                ...doc,
                idProofUrl: uploadedDocument?.imageUrl
            })
        } else {
            setDoc({
                ...doc,
                certificateUrl: uploadedDocument?.imageUrl
            })
        }
        setUpload({
            type: null,
            value: false
        })
    }
    const progressCount = useMemo(() => {
        if (doc.idProofUrl && doc.certificateUrl) {
            return 100
        }
        if (doc.idProofUrl || doc.certificateUrl) {
            return 90
        }
        return 80
    }
        , [doc])
    return <OnBoardingWrapper progress={progressCount} handleForm={handlePress} loading={isUploading.loading}>
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
            <VerticalStepIndicator setUpload={setUpload} setVisibleDoc={setVisibleDoc} doc={doc} />
        </View>
        {<AppLoader
            visible={isUploading.loading}
            loadingMessage={`${uploadProgress} %`}
        />}
        <UpdloadTypeDialog
            isVisible={upload.value}
            handlePick={() => pickDocument(handleDoc)}
            handleScan={() => scanDocument(handleDoc)}
            onClose={setUpload.bind(this, {
                type: 'idProofUrl',
                value: false
            })}
        />
        <Dialog
            visible={true}
            width={Layout.width}
            bottom

            containerStyle={{
                backgroundColor: customTheme.colors.primary,
                marginBottom: 0,
                paddingTop: customTheme.spacings.spacing_12,
                paddingBottom: customTheme.spacings.spacing_32,
                paddingHorizontal: customTheme.spacings.spacing_16,
                borderTopRightRadius: customTheme.spacings.spacing_16,
                borderTopLeftRadius: customTheme.spacings.spacing_16,
            }}
            onDismiss={() => setVisibleDoc(null)}

        >
            <Text white center style={{
                opacity: 0.6,
            }}>View Document</Text>
            <Image
                source={{
                    uri: visibleDoc
                }}
                width={200}
                height={200}
            />
            <FormButton onPress={handleDoc} label={'Change'} />
        </Dialog>
    </OnBoardingWrapper>
}