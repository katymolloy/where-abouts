import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    form: {
        margin: 30,
        marginTop: 60
    },

    textInput: {
        // justifyContent : 'center',
        // alignItems : 'center',
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 50,
        width: '100%',
        height: 45,
        padding: 10
    },

    buttonContainer: {
        width: '100%',
        color: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'end',
        paddingHorizontal: 40,
        paddingVertical: 10,
    },

    inputContainer: {
        paddingHorizontal: 40,
        paddingVertical: 10,
        width: '100%',
    },

    button: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'center',
        alignSelf: 'center',
        padding: 10,
        width: '100%',
        color: 'white',
        backgroundColor: '#4592F6',
        borderRadius: 50,
        boxSizing: 'border-box',
        border: 'none',
    },

    buttonText: {
        fontSize: 14,
        lineHeight: 20,
        fontWeight: 'bold',
        letterSpacing: 0.20,
        color: '#FFF',
        paddingHorizontal: 20,
        fontFamily: 'Urbanist_700Bold',
    },

    //Font Awesome Icons
    icon: {
        color: 'white',
        fontSize: '20',
    },

    header: {
        fontSize: 30,
        fontWeight: '500',
        paddingVertical: 50,
        fontFamily: 'Urbanist_900Black_Italic',
    },

    verticalContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loadingText: {
        fontSize: 30,
        flex: 1
    },
    // collapse portion
    collapseMe: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 7,
        paddingHorizontal: 15,
        backgroundColor: 'white',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        elevation: 10,
    },
    modalContainer: {
        height: '50%',
        marginTop: 'auto',
        backgroundColor: 'white',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        elevation: 10,
        padding: 10,
    },
    inline: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,
    }

});