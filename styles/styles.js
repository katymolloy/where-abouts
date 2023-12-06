import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    form : {
        margin : 30,
        marginTop : 60
    },

    textInput : {
        // justifyContent : 'center',
        // alignItems : 'center',
        borderColor : '#000000',
        borderWidth : 1,
        borderRadius : 10,
        width : 222,
        height : 45,
        padding: 10
    },

    buttonContainer: {
        // paddingVertical : 40,
        justifyContent : 'center',
        alignContent : 'center',
        width : '100%',
    },

    button: {
        // alignContent : 'center',
        alignSelf : 'center',
        margin : 5,
        padding : 15,
        // color : 'black',
        backgroundColor : 'blue',
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
    header:{
        fontSize: 30,
        fontWeight: '500',

    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },

});