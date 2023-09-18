import { Platform, ScrollView, StatusBar } from "react-native"
import { customTheme } from "../../constants";
import { View } from "react-native-ui-lib";
export const ViewContainer = (props) => {
  const statusBarHeight = StatusBar.currentHeight * customTheme.spacings.spacing_8 || (Platform.OS === 'ios' ? customTheme.spacings.spacing_48 : customTheme.spacings.spacing_48); // Default values for iOS and Android
  return <View
    style={{
      paddingTop: statusBarHeight,
      paddingHorizontal: customTheme.spacings.spacing_16,
      // alignItems: "center",
      justifyContent: "flex-start",
    }}
  >
    {props.children}
  </View>
}