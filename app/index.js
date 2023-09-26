import { StatusBar } from "react-native"
import { customTheme } from "./constants"
import { NavigationContainer } from "@react-navigation/native"
import AppLoadignStack from "./navigations/AppLoadingStack"
import AppProviders from "./context/AppProviders"
import AuthProvider from "./context/AuthProvider"
import Toast from 'react-native-toast-message';
export default function App() {
    return <AppProviders>
        <AuthProvider>
            <StatusBar
                barStyle={customTheme.statusBarStyle}
                backgroundColor={customTheme.colors.light.background}
            />
            <NavigationContainer theme={customTheme}>

                <AppLoadignStack />


            </NavigationContainer>
        </AuthProvider>
        <Toast />
    </AppProviders>
}