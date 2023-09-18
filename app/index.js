import { StatusBar, Text } from "react-native"
import { customTheme } from "./constants"
import { NavigationContainer } from "@react-navigation/native"
import PlayerDashboard from "./views/players/DashBoard"
import AppLoadignStack from "./navigations/AppLoadingStack"
export default function App() {
    return <>
        <StatusBar
            barStyle={customTheme.statusBarStyle}
            backgroundColor={customTheme.colors.light.background}
        />
        <NavigationContainer theme={customTheme}>
            <AppLoadignStack />
        </NavigationContainer>
    </>
}