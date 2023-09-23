import { View, Image, GridView, TouchableOpacity, Text } from "react-native-ui-lib";
import _ from 'lodash'
import { ScreenHeader } from "../../../components/common/ScreenHeader";
import { ScrollViewContainer } from "../../../components/common/SrollViewContainer";
import { FormButton, FormSelectable } from "../../../components/common/FormInputs";
import { appImages } from "../../../constants/appImages";
import { width } from "../../../constants/dimensions"
import { customTheme } from "../../../constants";
import * as player_styles from "../../../utils/data/playerStyles.json"
import { useNavigation } from "@react-navigation/native";
export default function PlayerStyle() {
    const navigation = useNavigation()
    return <ScrollViewContainer>
        <ScreenHeader title={'Select Player Style'} />
        <View flex>

            <View row center style={{
                flexWrap: 'wrap',
            }}>
                {
                    _.map(player_styles.playing_styles, (item, index) => {
                        return <TouchableOpacity key={index}>
                            <View margin-8 center style={{
                                borderColor: customTheme.colors.light,
                                borderWidth: 1,
                                overflow: 'hidden',
                                borderRadius: customTheme.spacings.spacing_16
                            }}>
                                <Image
                                    resizeMode="cover"
                                    resizeMethod="scale"
                                    source={{
                                        uri: item?.image_source ?? null
                                    }}
                                    width={100}
                                    height={120}

                                />
                            </View>

                        </TouchableOpacity>
                    })
                }
            </View>
            <View marginV-12>
                <Text white adjustsFontSizeToFit marginV-8 style={{
                    fontSize: customTheme.fontSizes.size_16,
                    fontFamily: customTheme.fontFamily.robotoBold,
                    fontWeight: '700',
                }}>What type of player are you?</Text>
                <Text white >Select from the 5 player styles. Just like a game each style will come with different challenges including stats in focus.</Text>
            </View>
            <View >
                <Text white marginV-12>Stats of Focus </Text>
                <View row spread marginV-12>
                    {
                        _.map([...new Array(4)], (item, index) => {
                            return <View flex center marginR-8 backgroundColor={customTheme.colors.tertiary} paddingH-8 paddingV-16 style={{
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
            </View>
        </View>


        <FormButton
            label={'Continue'}
            onPress={() => navigation.navigate('PhotoUpload')}

        />
    </ScrollViewContainer>
}