import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { registerRootComponent } from 'expo';

import {db, auth, firestore} from '../firebaseConfig'
import { signInWithEmailAndPassword, signOut } from '/firebase/auth';
import { createUserWithEmailAndPassword } from '/firebase/auth';
import { onValue } from '/firebase/database';
import { onSnapshot } from '/firebase/firestore';
import { ref, set } from '/firebase/database';
import { doc, setDoc } from '/firebase/firestore';

import { styles } from '../styles/styles';


const SignInScreen = () => {

    // Setting the hooks
    [signInEmail, setSignInEmail] = useState('');
    [signInPassword, setSigninPassword] = useState('');


    // Logging In With Firebase
    signInWithFirebase = () => {
        
        if (signInEmail.length < 4) {
            Alert.alert('Please enter a valid email address');
            return;
        }

        if (signInPassword.length < 4) {
            Alert.alert('Please enter a valid password');
            return;
        }

        signInWithEmailAndPassword(auth, signInEmail, signInPassword).then(function (_firebaseUser) {
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


    return (
        <View style={styles.form}>
            <View>
                <Text style = {styles.header}>SIGN IN</Text>

                <Text>Email Address</Text>
                <TextInput 
                    style={styles.textInput}
                    onChangeText={ (value) => setSignInEmail(value) }
                    autoCapitalize="none"
                    autoCorrect={false}
                    autoCompleteType="email"
                    keyboardType="email-address"
                    placeholder="email"
                />

                <Text>Password</Text>
                <TextInput 
                    style={styles.textInput}
                    onChangeText={ (value) => setSigninPassword(value) }
                    autoCapitalize="none"
                    autoCorrect={false}
                    autoCompleteType="password"
                    keyboardType="visible-password"
                    placeholder="password"
                    secureTextEntry = {false}
                />

                <TouchableOpacity style = {styles.button} title = "SIGN IN" onPress = {signInWithFirebase}>
                    <Text style = {styles.buttonText}>SIGN IN</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

}

export default SignInScreen;