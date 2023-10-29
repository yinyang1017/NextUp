import { ImageBackground } from "react-native"
import { Button, Image, View } from "react-native-ui-lib"
import { appImages } from "../../../constants/appImages"
import { Layout } from "../../../constants"
import LinearGradient from "react-native-linear-gradient"
import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faClose, faRepeat } from "@fortawesome/free-solid-svg-icons"
import VideoRecorder from 'react-native-beautiful-video-recorder'




export default function RecorderScreen() {
    const videoRecorder = useRef(null)
    function startRecorder() {
        if (videoRecorder && videoRecorder.current) {
            console.log('captured data');
            videoRecorder.current.open({ maxLength: 30 }, (data) => {
                console.log('captured data', data);
            })
        }
    }
    useEffect(() => {
        startRecorder()
    }, [])
    return <>
        <ImageBackground
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
        <VideoRecorder ref={videoRecorder} compressQuality={'medium'} />
    </>

}