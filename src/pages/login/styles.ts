import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themes.colors.bgScreen
    },

    boxTop: {
        height: Dimensions.get('window').height / 3,
        backgroundColor: themes.colors.bgScreen,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    boxMiddle: {
        height: Dimensions.get('window').height / 4,
        width: '100%',
        paddingHorizontal: 37,
    },

    boxBottom: {
        height: Dimensions.get('window').height / 3,
        width: '100%',
        alignItems: 'center',
    },
    logo: {
        width: 80,
        height: 80,
    },
    text: {
        fontWeight: 'bold',
        marginTop: 40,
        fontSize: 18,
    },
    inputText: {
        marginLeft: 5,
        color: themes.colors.gray,
        marginTop: 20
    },
    boxInput: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        marginTop: 10,
        borderRadius: 40,
        flexDirection: 'row',
        paddingHorizontal: 8,
        alignItems: 'center',
        backgroundColor: themes.colors.gray,
        borderColor: themes.colors.gray
    },
    input: {
        height: '100%',
        width: '90%',
    },
    button: {
        width: 250,
        height: 40,
        backgroundColor: themes.colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    textButton: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },

    TextBotton: {
        marginTop: 20,
        color: themes.colors.gray,
        marginBottom: 20,
    }
})