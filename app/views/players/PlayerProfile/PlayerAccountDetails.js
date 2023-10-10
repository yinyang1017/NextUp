import { Text, View, ScrollView, StyleSheet, ImageBackground, Dimensions } from "react-native"
import { Padding } from "../GlobalStyles"
import { Colors, Image, TabController } from "react-native-ui-lib"
import _ from "lodash"
import { customTheme } from "../../../constants"
const PlayerAccountDetails = () => {
    return <ScrollView
        style={styles.playerDash}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.playerDashScrollViewContent}
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
                    }}>Power Forward <Text> | </Text> <Text>Los Angeles Lakers</Text> </Text>
                </View>


            </View>
            {/* Page Tabs */}

            {/* end */}
        </View>
        <View>
            <TabController items={[{ label: 'First' }, { label: 'Second' }, { label: 'Third' }]}>
                <TabController.TabBar enableShadows backgroundColor={Colors.$backgroundDark}
                    selectedLabelColor="white"
                    labelStyle={{
                        color: Colors.white
                    }} indicatorStyle={{
                        backgroundColor: Colors.white,

                    }} />
                <View flex>
                    <TabController.TabPage index={0} >
                        <Text>First tab</Text>
                    </TabController.TabPage>
                    {/* <TabController.TabPage index={1} lazy>{renderSecondPage()}</TabController.TabPage>
                    <TabController.TabPage index={2} lazy>{renderThirdPage()}</TabController.TabPage> */}
                </View>
            </TabController>
        </View>


    </ScrollView>
}
export default PlayerAccountDetails

const styles = StyleSheet.create({
    playerDash: {
        flex: 1,
        backgroundColor: Colors.$backgroundDark
    },
    frameParentSpaceBlock1: {
        paddingHorizontal: customTheme.spacings.spacing_16,
        backgroundColor: Colors.$backgroundDark,

    },
})