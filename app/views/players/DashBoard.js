import * as React from "react";
import {
    ScrollView,
    Image,
    StyleSheet,
    Text,
    View,
    Pressable,
    ImageBackground,
    Dimensions,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import DashBoardHeader from "../../components/common/DashBoardHeader";
import { MyTeams } from "../../components/players/Dashboard/MyTeams";
import { EventCarousel } from "../../components/players/Dashboard/EventsCarousel";
import StatsContainer from "../../components/players/Dashboard/StatsContainer";
import { MyChallenges } from "../../components/players/Dashboard/Challenges";
import { Button, Colors } from "react-native-ui-lib";
import { customTheme } from "../../constants";

const PlayerDashboard = () => {
    // const navigation = useNavigation();

    return (
        <ScrollView
            style={styles.playerDash}
            showsVerticalScrollIndicator={true}
            showsHorizontalScrollIndicator={true}
            contentContainerStyle={styles.playerDashScrollViewContent}
        >
            <View style={[styles.frameParent, styles.frameParentSpaceBlock1]}>
                <DashBoardHeader />
                <MyTeams />
                <EventCarousel />
                <StatsContainer />
                <MyChallenges />
            </View>
            <View>
                <Button label={"Add Player Match Up"} backgroundColor={customTheme.colors.light.blue20} style={{
                    width: Dimensions.get('window').width * 0.9,
                    marginBottom: 20
                }} />
            </View>


        </ScrollView>
    );
};

const styles = StyleSheet.create({
    playerDash: {
        maxWidth: "100%",
        overflow: "hidden",
        width: "100%",
        flex: 1,
        backgroundColor: customTheme.colors.light.background
    },
    playerDashScrollViewContent: {
        flexDirection: "column",
        paddingTop: 48,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    frameParent: {
        // alignItems: "center",
        paddingVertical: 0,
        alignSelf: "stretch",
    },
    frameParentSpaceBlock1: {
        paddingHorizontal: customTheme.spacings.spacing_16,
        paddingVertical: 0,
    },

})

export default PlayerDashboard;