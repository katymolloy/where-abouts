
import { Text, View, Alert, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';


import { db, auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from '../node_modules/firebase/auth';
// import { onValue } from '../node_modules/firebase/database';
import { ref, set } from '../node_modules/firebase/database';


import { styles } from '../styles/styles';
import { width } from '@fortawesome/free-solid-svg-icons/faPlus';


const RegisterScreen = ({ navigation }) => {

    // Setting the hooks 
    const [registrationEmail, setRegistrationEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [registrationPassword, setRegistrationPassword] = useState('');


    // Handling the registration
    const registerHandler = () => {
        registerWithFirebase();
        navigation.navigate('Home')
    }

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

        // Crafting the user with his/her email, password, and full name
        createUserWithEmailAndPassword(auth, registrationEmail, registrationPassword).then(() => {
            Alert.alert('User has been registered!');
            saveDataWithFirebase(firstName, lastName, registrationEmail);

            // Clearing the input fields
            setFirstName('');
            setLastName('');
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

        // Saving the user's data to realtime db (database)
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


    // Returning the layout of the register screen
    return (
        <View style={{ ...styles.verticalContainer, justifyContent: 'space-around' }}>
            <Text style={styles.header}>REGISTER</Text>

            <View style={{ width: '100%' }}>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>First Name</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(value) => setFirstName(value)}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Last Name</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(value) => setLastName(value)}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                </View>


                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Email Address</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(value) => setRegistrationEmail(value)}
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
                        onChangeText={(value) => setRegistrationPassword(value)}
                        autoCapitalize="none"
                        autoCorrect={false}
                        autoCompleteType="password" // Use autoCompleteType for password input
                        secureTextEntry={true}
                    />
                </View>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} title="CREATE AN ACCOUNT" onPress={registerHandler}>
                    <Text style={styles.buttonText}>CREATE AN ACCOUNT</Text>
                </TouchableOpacity>
            </View>
        </View>
    );


}

export default RegisterScreen;