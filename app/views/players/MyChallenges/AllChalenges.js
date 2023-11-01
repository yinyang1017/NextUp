import React from 'react';
import { Platform, SafeAreaView, KeyboardAvoidingView, FlatList, ImageBackground } from "react-native"
import { View, Text, TouchableOpacity, Image } from 'react-native-ui-lib';
import { ViewContainer } from '../../../components/common/ViewConatiner';
import { customTheme, Layout } from '../../../constants';
import AppLoader from '../../../utils/Apploader';
import { ScreenHeader } from '../../../components/common/ScreenHeader';
import { appImages } from '../../../constants/appImages';
import LinearGradient from 'react-native-linear-gradient';
// import { Layout } from 'react-native-reanimated';
// import { KeyBoardAvoidingView } from '../../../components/common/SrollViewContainer';
let wide = Layout.width;
export default function AllChallenges() {
    const name = "assigned"
    function _renderAssignee(item) {


    }
    function _renderItem({ item }) {
        return (
            <View>
                {name === 'assigned' && (<TouchableOpacity>
                    <ImageBackground
                        style={{
                            // height: wide * 0.165,
                            width: '100%',
                            marginTop: wide * 0.03,
                        }}
                        imageStyle={{
                            borderRadius: wide * 0.05
                        }}
                        source={{ uri: 'https://wallpaper.dog/large/10913047.jpg' }}
                    >
                        <LinearGradient colors={['rgba(35, 38, 47, 1)', 'rgba(35, 38, 47, 0.76)', 'rgba(35, 38, 47, 0)']}
                            start={{ x: 0.0, y: 0.0 }} end={{ x: 1.5, y: 1.0 }}
                            style={{ borderRadius: wide * 0.05, flex: 1 }}
                        >
                            <View style={{ marginTop: wide * 0.05, padding: wide * 0.03 }}>
                                <View row>
                                    <Text medium-700>{item?.name} </Text>
                                    <Image style={{ marginLeft: wide * 0.015 }}
                                        source={require('../../../assets/images/Vector.png')}
                                    />
                                    {/* <Image style={{ marginLeft: wide * 0.015 }}
                                        source={require('../../../assets/images/texticon.png')}
                                    />
                                    <Image style={{ marginLeft: wide * 0.015 }}
                                        source={require('../../../assets/images/videoicon.png')}
                                    /> */}
                                </View>

                                <Text
                                    medium-600
                                >08 Days Left</Text>
                                <View style={{ marginTop: wide * 0.03 }}>
                                    <FlatList
                                        data={[...new Array(3).keys()].map((item, index) => {
                                            return {
                                                index: index + 1,
                                                name: 'Item ' + (index + 1)
                                            }
                                        })}

                                        showsHorizontalScrollIndicator={false}
                                        horizontal
                                        pagingEnabled={true}

                                        legacyImplementation={false}

                                        keyExtractor={item => item.index}
                                        renderItem={(item, index) =>
                                            <View style={{ flex: 4, flexDirection: 'row', marginTop: wide * 0.02 }}>
                                                <Image style={{
                                                    height: wide * 0.07,
                                                    width: wide * 0.07,
                                                    borderRadius: wide * 0.07 / 2,

                                                }}
                                                    source={appImages.player_male}
                                                />
                                            </View>

                                        }
                                    />

                                </View>
                            </View>



                        </LinearGradient>
                    </ImageBackground>
                </TouchableOpacity>)}
            </View>
        )
    }

    return (
        <ViewContainer includeStatusBar={false}>
            <SafeAreaView style={{ flex: 1, marginTop: Platform.OS == 'android' ? 30 : 0, }} >
                {/* <AppLoader /> */}
                <KeyboardAvoidingView keyboardVerticalOffset={45} style={{ flex: 1, }}
                    behavior={Platform.OS === 'ios' ? "padding" : null}>
                    <View style={{ marginLeft: wide * 0.035, marginRight: wide * 0.035 }}>
                        <FlatList
                            data={[...new Array(10).keys()].map((item, index) => {
                                return {
                                    index: index + 1,
                                    name: 'Item ' + (index + 1)
                                }
                            })}
                            bounces={false}
                            keyExtractor={item => item.index}
                            renderItem={_renderItem}
                        />

                    </View>

                </KeyboardAvoidingView>



            </SafeAreaView>
        </ViewContainer>
    );
}