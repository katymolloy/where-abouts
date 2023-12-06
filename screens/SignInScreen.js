
import { Text, View, Alert, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

import { db, auth } from '../firebaseConfig'
import { signInWithEmailAndPassword, signOut } from '../node_modules/firebase/auth';
import { onValue } from '../node_modules/firebase/database';
import { ref, set } from '../node_modules/firebase/database';

import { styles } from '../styles/styles';


const SignInScreen = () => {

    // Setting the hooks
    const [signInEmail, setSignInEmail] = useState('');
    const [signInPassword, setSignInPassword] = useState('');


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


    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.header}>SIGN IN</Text>

                <Text>Email Address</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(value) => setSignInEmail(value)}
                    autoCapitalize="none"
                    autoCorrect={false}
                    autoCompleteType="email"
                    keyboardType="email-address"
                    placeholder="email"
                />

                <Text>Password</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(value) => setSignInPassword(value)}
                    autoCapitalize="none"
                    autoCorrect={false}
                    autoCompleteType="password" 
                    secureTextEntry={true}
                    placeholder="password"
                />

                <TouchableOpacity style={styles.button} title="SIGN IN" onPress={signInWithFirebase}>
                    <Text style={styles.buttonText}>SIGN IN</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

}

export default SignInScreen;