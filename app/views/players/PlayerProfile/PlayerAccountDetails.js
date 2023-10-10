import { ScrollView, StyleSheet, ImageBackground, Dimensions, SafeAreaView } from "react-native"
import { Padding } from "../GlobalStyles"
import { Colors, Image, View, Text } from "react-native-ui-lib"
import _ from "lodash"
import { customTheme } from "../../../constants"
import { CustomTabView } from "../../../components/common/CustomTabView"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { ViewContainer } from "../../../components/common/ViewConatiner"
const tabScreenOptions = { headerShown: true };
const TopTab = createMaterialTopTabNavigator();

const PlayerAccountStats = () => (
    <Text>This is stats Component</Text>
)
const ReadyToPro = () => {
    return <Text>This is ReadyToPro Component</Text>
}
const PlayerAccountDetails = () => {
    return <ScrollView
        style={styles.playerDash}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={{
            backgroundColor: customTheme.colors.background
        }}
    >
        <Image
            source={{
                uri: 'https://unsplash.com/photos/CREqtqgBFcU/download?force=true'
            }}
            resizeMode='cover'
            style={{
                minHeight: Dimensions.get('screen').height / 2
            }}
        />
        <View style={[styles.frameParentSpaceBlock1]}>
            <View style={[{
                marginVertical: 12,
                flexDirection: 'row',
                alignItems: 'center'
            }]}>
                <View>
                    <Text style={{
                        textAlign: 'center',
                        color: Colors.yellow20,
                        fontFamily: customTheme.fontFamily.robotoBold,
                        fontSize: customTheme.fontSizes.size_16,
                        fontWeight: 'bold'
                    }}>6</Text>
                    <Text
                        style={{
                            color: Colors.white
                        }}
                    >RANK</Text>
                </View>
                <View style={{
                    marginLeft: 12
                }}>
                    <Text style={{
                        color: Colors.white,
                        fontFamily: customTheme.fontFamily.robotoBold,
                        fontSize: customTheme.fontSizes.size_16,
                        fontWeight: '900',
                    }}>Lebron James </Text>
                    <Text style={{
                        color: Colors.white,
                        fontFamily: customTheme.fontFamily.robotoBold,
                        fontSize: customTheme.fontSizes.size_16,
                    }}>Power Forward <Text white> | </Text> <Text white>Los Angeles Lakers</Text> </Text>
                </View>


            </View>
        </View>
        <SafeAreaView style={{ flex: 1 }} edges={['top']}>
            <TopTab.Navigator tabBar={props => <CustomTabView {...props} />} >
                <TopTab.Screen options={{ tabBarLabel: 'Stats' }} name="PlayerAccountStats" component={PlayerAccountStats} />
                <TopTab.Screen options={{
                    tabBarLabel: 'Ready to Pro'
                }} name="PlayerAccountReadyToPro" component={ReadyToPro} />
                <TopTab.Screen options={{
                    tabBarLabel: 'Highlights'
                }} name="PlayerAccountHighlights" component={ReadyToPro} />
            </TopTab.Navigator>
        </SafeAreaView>

    </ScrollView>
}
export default PlayerAccountDetails

const styles = StyleSheet.create({
    playerDash: {
        flex: 1,
        backgroundColor: customTheme.colors.background
    },
    frameParentSpaceBlock1: {
        paddingHorizontal: customTheme.spacings.spacing_16,
        backgroundColor: customTheme.colors.background,

    },
})