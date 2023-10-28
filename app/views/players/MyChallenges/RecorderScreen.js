import { ImageBackground } from "react-native"
import { Button, Image, View } from "react-native-ui-lib"
import { appImages } from "../../../constants/appImages"
import { Layout } from "../../../constants"
import LinearGradient from "react-native-linear-gradient"
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faClose, faRepeat } from "@fortawesome/free-solid-svg-icons"





export default function RecorderScreen() {
    return <ImageBackground
        source={appImages.recoderPlaceholder}
        style={{
            flex: 1
        }}

        imageStyle={{
            width: Layout.width,
            height: Layout.height
        }}

    >
        <LinearGradient style={
            {
                position: 'absolute',
                width: Layout.width,
                bottom: 0,
                height: Layout.height * 0.07
            }
        } colors={['rgba(35, 38, 47, 1)', 'rgba(35, 38, 47, 0.76)', 'rgba(35, 38, 47, 0)']}
            start={{ x: 0.0, y: 0.0 }} end={{ x: 1.5, y: 1.0 }}
        >
            <View row center spread style={{
                alignItems: 'center',
            }} paddingH-16 paddingV-8 >
                <FontAwesomeIcon icon={faRepeat} color="white" />
                <Button style={{
                    width: Layout.width * 0.6,
                    marginLeft: Layout.width * 0.05,
                    marginRight: Layout.width * 0.05,
                }} onPress={() => null} label={`Finish`} size={Button.sizes.large} />
                <FontAwesomeIcon icon={faClose} color="white" />

            </View>

        </LinearGradient>

    </ImageBackground>
}