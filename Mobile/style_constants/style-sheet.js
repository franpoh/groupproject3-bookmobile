import { StyleSheet } from "react-native";
import colours from "./colours";

const fontType = "sans-serif";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },

    h1Font: {
        fontFamily: fontType,
        fontSize: 40,
        fontWeight: 'bold',
        color: colours.primary
    },

    h2Font: {
        fontFamily: fontType,
        fontSize: 30,
        fontWeight: 'bold',
        color: colours.baseDark
    },

    h3Bold: {
        fontFamily: fontType,
        fontSize: 25,
        fontWeight: 'normal',
        color: colours.secondaryDark
    },

    h3Normal: {
        fontFamily: fontType,
        fontSize: 25,
        fontWeight: 'normal',
        color: colours.baseDark
    },

    textNormal: {
        fontFamily: fontType,
        fontSize: 17,
        fontWeight: 'normal',
        color: colours.baseDark
    },

    textBold: {
        fontFamily: fontType,
        fontSize: 17,
        fontWeight: 'normal',
        color: colours.secondaryDark
    },
})

export default styles;