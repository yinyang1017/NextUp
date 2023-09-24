

import { faAppleAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { View, Image, SafeAreaView, Text } from "react-native"
import { appImages } from '../../../constants/appImages';
import FastImage from 'react-native-fast-image';
import { CommonStyles, customTheme } from '../../../constants';
import TextComponent from '../../../components/common/TextComponent';
import SocialButton from '../../../components/common/SocialButton';
import useBackend from '../../../hooks/useBackend';
import { useUserRegister } from '../../../api/register.api';
import { useAuth } from '../../../hooks/useAuth';
const loginOptions = [
    {
        id: 1,
        text: 'Continue with Apple',
        logo: appImages.apple_logo,
    },
    {
        id: 2,
        text: 'Continue with Google',
        logo: appImages.google_logo
    },
    {
        id: 0,
        text: 'Continue with Meta',
        logo: appImages.fb_logo
    }
]
export default function WelcomeScreen() {
    const { handleImperativeLogin } = useBackend()
    const { login } = useAuth()
    const {
        mutate,
        isLoading
    } = useUserRegister({
        onSuccess: (data) => {
            login(data)
        }
    })
    const handleSubmit = async (type) => {
        await handleImperativeLogin(type).then((res) => {
            const dataToSend = {
                email: res?.email,
                firebaseAuthTokenId: res?.serverAuthCode,
                loginWith: 'EMAIL',
                roles: [
                    "ROLE_COACH",
                    "ROLE_PLAYER"
                ]
            }
            mutate(dataToSend)
            // alert(JSON.stringify(res, null, 2))
        }).catch((err) => {
            console.log(err, "in welcome screen")
        })
    }
    return <SafeAreaView style={[CommonStyles.appThemeBgContainer]}>
        <Image
            source={appImages.login_logo}
            resizeMode='contain'
            style={[CommonStyles.flex75, CommonStyles.width100]}
        />
        <View style={[CommonStyles.alignCenter, { width: '50 %' }]}>
            <TextComponent numberOfLines={3} textStyle={[CommonStyles.titleFont]}>Players,{'\n'}Coaches and{'\n'}Fans.</TextComponent>
        </View>
        {
            loginOptions.map((item, index) => {
                return <View key={index} style={[[CommonStyles.mt10, CommonStyles.mb10, CommonStyles.ph10, { marginHorizontal: customTheme.spacings.spacing_12 }]]}>
                    <SocialButton
                        buttonContainerStyle={[CommonStyles.flexRowAlignCenter, CommonStyles.socialLoginButton, CommonStyles.oynxBlueBorder]}
                        title={item.text}
                        textStyle={{
                            color:
                                customTheme.colors.background,

                            fontSize: customTheme.fontSizes.size_16,
                            fontWeight: '600',
                            marginLeft: customTheme.spacings.spacing_8
                        }}
                        imageSrc={item.logo}
                        imageStyle={CommonStyles.midSizeLogo}
                        onPressButton={() => handleSubmit(item?.id)}
                    />

                </View>
            })
        }

    </SafeAreaView>;
}