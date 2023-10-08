import { View, Image, TouchableOpacity, Text, SkeletonView, AnimatedImage, ListItem } from "react-native-ui-lib";
import _ from 'lodash'
import { customTheme } from "../../../constants";
import OnBoardingWrapper from "../../../components/common/OnBoardingWrapper";
import { useNavigation } from "@react-navigation/native";
import { useOnBoarding, usePlayerStyle } from "../../../hooks/useOnBoarding";
import { Controller } from "react-hook-form";
export default function PlayerStyle() {
    const {
        handleOnBoarding,
        handleNavigation
    } = useOnBoarding();
    const {
        control,
        playingPositionDescription,
        playerStylesList,
        isLoadingStyleList,
        handleSubmit
    } = usePlayerStyle()
    const onSubmit = (data) => {
        handleOnBoarding(data);
        handleNavigation('PhotoUpload');
    }
    return <OnBoardingWrapper title='Select Player Style' handleForm={handleSubmit(onSubmit)}>
        <View flex marginT-8>
            <Controller
                name="playingPosition"
                control={control}
                render={({ field: { onChange, value } }) => (
                    <View row center style={{
                        flexWrap: 'wrap',
                    }}>
                        {
                            _.map(playerStylesList?.data, (item, index) => {
                                const isSelected = value?.name === item?.name
                                return <TouchableOpacity key={index} onPress={() => onChange(item)}>
                                    <View margin-8 center style={{
                                        borderColor: isSelected ? customTheme.colors.secondary : customTheme.colors.light,
                                        borderWidth: isSelected ? 1 : 1,
                                        opacity: isSelected ? 1 : 0.7,
                                        overflow: 'hidden',
                                        borderRadius: customTheme.spacings.spacing_16
                                    }}>
                                        <Image
                                            resizeMode="cover"
                                            resizeMethod="scale"
                                            source={{
                                                uri: item?.imageUrl ?? 'https://unsplash.com/photos/G38HyRyx3Cw/download?force=true'
                                            }}
                                            width={100}
                                            height={120}

                                        />
                                    </View>

                                </TouchableOpacity>
                            })
                        }
                    </View>
                )}
            />


            <View marginV-12>
                <Text white adjustsFontSizeToFit marginV-8 style={{
                    fontSize: customTheme.fontSizes.size_16,
                    fontFamily: customTheme.fontFamily.robotoBold,
                    fontWeight: '700',
                }}>What type of player are you?</Text>
                <Text white animated >
                    {
                        playingPositionDescription?.description ?? 'Select from the 5 player styles. Just like a game each style will come with different challenges including stats in focus'
                    }
                </Text>
            </View>
            <View >
                <Text white marginV-12>Stats of Focus </Text>
                <Controller
                    name='statsOfFocus'
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <View row spread marginV-12>
                            {
                                _.map([...new Array(4)], (item, index) => {
                                    return <View key={index} flex center marginR-8 backgroundColor={customTheme.colors.tertiary} paddingH-8 paddingV-16 style={{
                                        borderRadius: customTheme.spacings.spacing_8,

                                    }}>
                                        <Text white style={
                                            {
                                                opacity: 0.6,
                                            }
                                        }>Points</Text>
                                    </View>
                                })
                            }
                        </View>
                    )}
                />

            </View>
        </View>
    </OnBoardingWrapper>
}