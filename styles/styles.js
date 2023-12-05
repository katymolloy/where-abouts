import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    form : {
        margin : 30,
        marginTop : 60
    },

    textInput : {
        justifyContent : 'center',
        alignItems : 'center',
        borderColor : '#000000',
        borderWidth : 1,
        borderRadius : 10,
        width : 100,
        height : 100,
    },

    buttonContainer: {
        paddingVertical : 40,
        justifyContent : 'center',
        alignItems : 'center',
        width : '100%',
    },

    button: {
        alignContent : 'center',
        alignItems : 'center',
        margin : 5,
        padding : 15,
        color : '#FFF',
        backGroundColor : 'blue',
        borderRadius : 10,
        boxSizing : 'border-box',
        border : 'none',
    },

    buttonText: {
        fontSize : 14,
        lineHeight : 20,
        fontWeight : 'bold',
        letterSpacing : 0.20,
        color : '#FFF',
    },

});