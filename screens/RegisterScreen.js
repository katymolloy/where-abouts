import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { registerRootComponent } from 'expo';

import {db, auth, firestore} from '../firebaseConfig';
import { signInWithEmailAndPassword, signOut } from '/firebase/auth';
import { createUserWithEmailAndPassword } from '/firebase/auth';
import { onValue } from '/firebase/database';
import { onSnapshot } from '/firebase/firestore';
import { ref, set } from '/firebase/database';
import { doc, setDoc } from '/firebase/firestore';

import { styles } from '../styles/styles';


const RegisterScreen = () => {

    // Setting the hooks 
    [registrationEmail, setRegistrationEmail] = useState('');
    [registrationPassword, setRegistrationPassword] = useState('');
    [databaseData, setDatabaseData] = useState('');


    // Registering with Firebase
    const registerWithFirebase = () => {

        if (registrationEmail.length < 4) {
            Alert.alert('Please enter a valid email address that is longer than 4 characters.');
            return;
        }

        if (registrationPassword.length < 4) {
            Alert.alert('Please enter a valid password with more than 4 characters.');
            return;
        }

        createUserWithEmailAndPassword(auth, registrationEmail, registrationPassword).then(function (_firebaseUser) {
            Alert.alert('Your user has been registered!');
            setRegistrationEmail('');
            setRegistrationPassword('');
        }).catch(function (err) {
            var errorCode = err.code;
            var errorMessage = err.message;

            if (errorCode == 'auth/weak-password') {
                Alert.alert('The password is too weak!');
            } else {
                Alert.alert(errorMessage);
            }
            console.log(err);
        });

    }

    

    return (
        <View>
            <View>
                <Text style = {styles.header}>REGISTER</Text>

                <Text>Full Name</Text>
                <TextInput
                    style = {styles.textInput}
                    onChangeText = { (value) => setRegistrationName(value) }
                    autoCapitalize = "none"
                    autoCorrect = {false}
                />

                <Text>Email Address</Text>
                <TextInput 
                    style = {styles.textInput}
                    onChangeText = { (value) => setRegistrationEmail(value) }
                    autoCapitalize = "none"
                    autoCorrect = {false}
                    autoCompleteType = "email"
                    keyboardType = "email-address"
                />

                <Text>Password</Text>
                <TextInput 
                    style = {styles.textInput}
                    onChangeText = { (value) => setRegistrationPassword(value) }
                    autoCapitalize = "none"
                    autoCorrect = {false}
                    autoCompleteType = "Password"
                    keyboardType = "visible-password"
                    secureTextEntry = {true}
                />

                <View style = {styles.buttonContainer}>
                    <TouchableOpacity style = {styles.button} title = "CREATE AN ACCOUNT" onPress = {registerWithFirebase}>
                        <Text style = {styles.buttonText}>CREATE AN ACCOUNT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );


}

export default RegisterScreen;