import { StyleSheet, Dimensions } from "react-native";
import colours from "./colours";

const win = Dimensions.get('window');

const fontType = "sans-serif";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },

    containerStart: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start",
        padding: 20
    },

    containerAlt: {
        flex: 0.5,
        flexDirection: "row",
        alignItems: "center",
    },

    alignCentre: {
        alignSelf: "center"
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

    contentArea: { // g1        
        width: win.width * .95,
        marginTop: win.width * .05,
        // borderWidth: 1,
        // borderColor: 'red'
    },

    rowSpaceBtwn: { // g1
        flexDirection: "row",
        justifyContent: 'space-between',
        height: 41,
        alignItems: 'center',
        // borderWidth: 1,
        // borderColor: 'red'
    },
    textBox: {
        height: 50,
        width: 300,
        marginTop: 20
    },
})

export default styles;