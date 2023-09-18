import { Platform, ScrollView, StatusBar } from "react-native"
import { customTheme } from "../../constants";


export const ScrollViewContainer = (props) => {
    const statusBarHeight = StatusBar.currentHeight * customTheme.spacings.spacing_8 || (Platform.OS === 'ios' ? customTheme.spacings.spacing_48 : customTheme.spacings.spacing_48); // Default values for iOS and Android
    return <ScrollView
        style={{
            maxWidth: "100%",
            overflow: "hidden",
            width: "100%",
            flex: 1,
            backgroundColor: customTheme.colors.background
        }}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={{
            paddingTop: statusBarHeight,
            paddingHorizontal: customTheme.spacings.spacing_16,
            // alignItems: "center",
            justifyContent: "flex-start",
        }}
    >
        {props.children}
    </ScrollView>
}