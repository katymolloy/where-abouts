
import { Text, View, Alert, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';


import { db, auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from '../node_modules/firebase/auth';
// import { onValue } from '../node_modules/firebase/database';
import { ref, set } from '../node_modules/firebase/database';


import { styles } from '../styles/styles';


const AddContact = ({ navigation }) => {

    // Setting the hooks 
    const [addPhoneNumber, setAddPhoneNumber] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');


    // Handling the registration
    const registerHandler = () => {
        registerWithFirebase();
        navigation.navigate('Map')
    }

    // Registering the phone number and name with Firebase
    const registerWithFirebase = () => {

        // Crafting the added user's phone number information and full name
        auth()
        .signInWithPhoneNumber(addPhoneNumber)
        .then(() => {
            Alert.alert('User has been registered!');
            saveDataWithFirebase(firstName, lastName, addPhoneNumber);

            // Clearing the input fields
            setFirstName('');
            setLastName('');
            setAddPhoneNumber('');

        }).catch(function (err) {
            var errorCode = err.code;
            var errorMessage = err.message;

            Alert.alert(errorMessage);
            console.log(err);
        });

    }



    const saveDataWithFirebase = (firstName, lastName, phoneNumber) => {

        // Saving the user's data to realtime db (database)
        var user = auth.currentUser;
        if (user) {
            var uid = user.uid;

            set(ref(db, 'users/' + uid), {
                firstName: firstName,
                lastName: lastName,
                phoneNumber: phoneNumber,
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
        <View style={styles.verticalContainer}>
            <Text style={styles.header}>ADD CONTACT</Text>

            <View style={styles.inputContainer}>
                <Text>First Name</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(value) => setFirstName(value)}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text>Last Name</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(value) => setLastName(value)}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
            </View>


            <View style={styles.inputContainer}>
                <Text>Phone Number</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(value) => setAddPhoneNumber(value)}
                    autoCapitalize="none"
                    autoCorrect={false}
                    autoCompleteType="tel"
                    keyboardType="phone-pad"
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} title="ADD CONTACT" onPress={registerHandler}>
                    <Text style={styles.buttonText}>ADD CONTACT</Text>
                </TouchableOpacity>
            </View>
        </View>
    );


}

export default AddContact;