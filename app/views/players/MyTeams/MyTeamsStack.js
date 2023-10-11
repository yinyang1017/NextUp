import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { Text } from "react-native-ui-lib"
import { customTheme } from "../../../constants"
import { ViewContainer } from "../../../components/common/ViewConatiner"
import Games from "./Games"
import { TeamsBar } from "../../../components/coach/Dashboard/MyTeams"
import Roaster from "./Roaster"
import PlayerStats from "./Stats"
const TopTab = createMaterialTopTabNavigator()
export default function MyTeamsStack() {
    return (
        <>
            <ViewContainer>
                <TeamsBar />
            </ViewContainer>

            <TopTab.Navigator
                screenOptions={{
                    headerShown: true,
                    tabBarIndicatorStyle: {
                        backgroundColor: customTheme.colors.light
                    },
                    tabBarLabelStyle: {
                        fontSize: customTheme.fontSizes.size_12,
                        color: customTheme.colors.light
                    },
                    tabBarStyle: {
                        backgroundColor: customTheme.colors.background,

                    }


                }}
            >
                <TopTab.Screen
                    name="Games"
                    component={Games}

                />
                <TopTab.Screen
                    name="Roaster"
                    component={Roaster}

                />
                <TopTab.Screen
                    name="Stats"
                    component={PlayerStats}

                />
            </TopTab.Navigator>
        </>
    )
}