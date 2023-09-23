import { StatusBar } from "react-native"
import { customTheme } from "./constants"
import { NavigationContainer } from "@react-navigation/native"
import AppLoadignStack from "./navigations/AppLoadingStack"
import AppProviders from "./context/AppProviders"
export default function App() {
    return <AppProviders>
        <StatusBar
            barStyle={customTheme.statusBarStyle}
            backgroundColor={customTheme.colors.light.background}
        />
        <NavigationContainer theme={customTheme}>

            <AppLoadignStack />


        </NavigationContainer>
    </AppProviders>
}