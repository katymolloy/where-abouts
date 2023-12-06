import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons/faRightToBracket'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons/faPenToSquare'

const imageSource = require('../assets/location-image.png');

export default function Home({ navigation }) {
    return (
        <View style={styles.verticalContainer}>
            <Image source={require('../assets/location-image.png')} style={{ width: 200, height: 200, marginTop: 30 }} />


            <Text style={styles.header}>
                WHERE ABOUTS
            </Text>
            <View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} title="SIGN IN" onPress={() => navigation.navigate('SignIn')}>
                        <Text style={styles.buttonText}>SIGN IN</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 20 }}>
                    <View style={{ flex: 1, height: 1, backgroundColor: '#DFDFDF' }} />
                    <View>
                        <Text style={{ width: 50, textAlign: 'center', color: '#DFDFDF' }}>OR</Text>
                    </View>
                    <View style={{ flex: 1, height: 1, backgroundColor: '#DFDFDF' }} />
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={{ ...styles.button, backgroundColor: '#FF6448' }} title="REGISTER" onPress={() => navigation.navigate('Register')} >
                        <Text style={styles.buttonText}>REGISTER</Text>
                    </TouchableOpacity>
                </View>


            </View>
        </View>
    )

}