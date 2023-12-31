
import { Text, View, Alert, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';


import { db, auth } from '../firebaseConfig'
import { signInWithEmailAndPassword, signOut } from '../node_modules/firebase/auth';
import { onValue } from '../node_modules/firebase/database';
import { ref, set } from '../node_modules/firebase/database';


import { styles } from '../styles/styles';


const SignInScreen = ({ navigation }) => {

    // Setting the hooks
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [signInEmail, setSignInEmail] = useState('');
    const [signInPassword, setSignInPassword] = useState('');


    // Handler function for sign in
    signInHandler = () => {
        // User is signed in with firebase
        signInWithFirebase()

        // Clearing the input fields
        setSignInEmail('')
        setSignInPassword('')
        setIsLoggedIn(true)

        // The users are navigated to the map screen
        navigation.navigate('Map')
    }



    // Logging In With Firebase
    signInWithFirebase = () => {

        if (signInEmail.length < 4) {
            Alert.alert('Please enter a valid email address');
        }

        if (signInPassword.length < 4) {
            Alert.alert('Please enter a valid password');
            return;
        }

        // Signing in with the user's registered email and password
        signInWithEmailAndPassword(auth, signInEmail, signInPassword).then(() => {
            Alert.alert('You are now logged in!');
        }).catch(function (err) {
            var errorCode = err.code;
            var errorMessage = err.message;

            if (errorCode === 'auth/wrong-password') {
                Alert.alert('You have entered the wrong password or email!');
            } else {
                Alert.alert(errorMessage);
            }
        });

    }


    // Returning the layout of the sign in screen
    return (
        <View style={{ ...styles.verticalContainer, justifyContent: 'space-around' }}>
            <Text style={styles.header}>SIGN IN</Text>

            <View style={{ width: '100%' }}>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Email Address</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(value) => setSignInEmail(value)}
                        autoCapitalize="none"
                        autoCorrect={false}
                        autoCompleteType="email"
                        keyboardType="email-address"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Password</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(value) => setSignInPassword(value)}
                        autoCapitalize="none"
                        autoCorrect={false}
                        autoCompleteType="password"
                        secureTextEntry={true}
                    />
                </View>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} title="SIGN IN" onPress={signInHandler}>
                    <Text style={styles.buttonText}>SIGN IN</Text>
                </TouchableOpacity>
            </View>

        </View>
    );

}

export default SignInScreen;