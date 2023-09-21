import { DefaultTheme } from "@react-navigation/native";
import { Colors } from "react-native-ui-lib";
import { MyColors } from "./colors";
import { PixelRatio } from "react-native";
import React from "react";
const baseFontSize = 4; // Define a base font size for normal screens
const baseSpacing = 4; // Define a base spacing unit for normal screens
export const customTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        ...Colors,
        ...MyColors,
        background: "#181A20",
        primary: "#23262F",
        secondary: "#FFB920",
        tertiary: "#363A41",
        success: "#3EC300",

    },
    statusBarStyle: 'light-content',
    fontSizes: {
        size_4: 4,
        size_8: 8,
        size_12: 12,
        size_16: 16,
        size_20: 20,
        size_24: 24,
        size_28: 28,
        size_32: 32,
        size_36: 36,
        size_40: 40
    },
    fontFamily: {
        robotoBold: 'Roboto-Bold',
        robotoMedium: 'Roboto-Medium',
        abhayaLibreBold: 'AbhayaLibre-Bold',
        robotoRegular: 'Roboto-Regular',
        bodyMediumSemibold: 'Urbanist-SemiBold',
        bodyLargeBold: 'Urbanist-Bold',
        robotoLight: 'Roboto-Light',
        robotoBold: "Roboto-Bold",
        robotoRegular: "Roboto-Regular",
        abhayaLibreBold: "AbhayaLibre-Bold",
        robotoMedium: "Roboto-Medium",
        robotoSerifSemiBold: "RobotoSerif-SemiBold",
        bodyMediumSemibold: "Urbanist-SemiBold",
        openSansSemiBold: "OpenSans-SemiBold",
        metrophobicRegular: "Metrophobic-Regular",
    },
    spacings: {
        spacing_4: 4,
        spacing_8: 8,
        spacing_12: 12,
        spacing_16: 16,
        spacing_20: 20,
        spacing_24: 24,
        spacing_28: 28,
        spacing_32: 32,
        spacing_36: 36,
        spacing_40: 40,
        spacing_44: 44,
        spacing_48: 48,
    },
    container: {
        maxWidth: "100%",
        overflow: "hidden",
        width: "100%",
        paddingTop: 48,
    },

}
