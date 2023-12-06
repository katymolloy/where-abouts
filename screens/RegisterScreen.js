
import { Text, View, Alert, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';


import { db, auth } from '../firebaseConfig';
// import { signInWithEmailAndPassword, signOut } from '/firebase/auth';
import { createUserWithEmailAndPassword } from '../node_modules/firebase/auth';
// import { onValue } from '../node_modules/firebase/database';
import { ref, set } from '../node_modules/firebase/database';


import { styles } from '../styles/styles';


const RegisterScreen = () => {

    // Setting the hooks 
    const [registrationEmail, setRegistrationEmail] = useState('');
    // const [registrationName, setRegistrationName] = useState('')
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [registrationPassword, setRegistrationPassword] = useState('');
    // const [databaseData, setDatabaseData] = useState('');


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

        createUserWithEmailAndPassword(auth, registrationEmail, registrationPassword).then(() => {
            Alert.alert('User has been registered!');
            saveDataWithFirebase(firstName, lastName, registrationEmail)

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


    
    const saveDataWithFirebase = (firstName, lastName, email) => {
        // saving to realtime db
        var user = auth.currentUser;
        if (user) {
            var uid = user.uid;

            set(ref(db, 'users/' + uid), {
                firstName: firstName,
                lastName: lastName,
                email: email
            }, { merge: false })
                .then(() => {
                    console.log('Data saved successfully')
                })
                .catch(() => {
                    console.log('Data not saved')
                })
        } else {
            console.log('User not authenticated.')
        }
    }


    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.header}>REGISTER</Text>

                <Text>First Name</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(value) => setFirstName(value)}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder='first name'
                />

                <Text>Last Name</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(value) => setLastName(value)}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder='last name'
                />

                <Text>Email Address</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(value) => setRegistrationEmail(value)}
                    autoCapitalize="none"
                    autoCorrect={false}
                    autoCompleteType="email"
                    keyboardType="email-address"
                    placeholder='email'
                />

                <Text>Password</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(value) => setRegistrationPassword(value)}
                    autoCapitalize="none"
                    autoCorrect={false}
                    autoCompleteType="password" // Use autoCompleteType for password input
                    secureTextEntry={true}
                    placeholder="password"

                />

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} title="CREATE AN ACCOUNT" onPress={registerWithFirebase}>
                        <Text style={styles.buttonText}>CREATE AN ACCOUNT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );


}

export default RegisterScreen;