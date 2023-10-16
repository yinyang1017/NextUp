import { ThemeManager } from "react-native-ui-lib";
import { customTheme } from "./theme";
ThemeManager.setComponentTheme('Button', (props, context) => {
    return {
        backgroundColor: props.outline ? customTheme.colors.background : customTheme.colors.blue10,
        color: props.outline ? customTheme.colors.light : customTheme.colors.light,
        labelStyle: {
            fontSize: customTheme.spacings.spacing_16,
            fontWeight: 'bold',
            fontFamily: customTheme.fontFamily.robotoRegular
        }

    };
})
ThemeManager.setComponentTheme('Text', (props, context) => {
    return {
        color: customTheme.colors.light


    };
})