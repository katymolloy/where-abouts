import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';

const imageSource = require('../assets/location-image.png');

export default function Home({ navigation }) {
    return (
        <View style={styles.verticalContainer}>
            <View style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', }}>
                <Image source={require('../assets/location-image.png')} style={{ width: 250, height: 250, marginTop: 30 }} />
                <Text style={styles.header}>
                    WHERE ABOUTS
                </Text>
                <Text style={styles.subHeader}>
                    Instant Connections, Anytime, Anywhere.
                </Text>
            </View>
            <View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} title="SIGN IN" onPress={() => navigation.navigate('SignIn')}>
                        <Text style={styles.buttonText}>SIGN IN</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 40, marginVertical: 10 }}>
                    <View style={{ flex: 1, height: 1, backgroundColor: '#DFDFDF' }} />
                    <View>
                        <Text style={{ width: 50, textAlign: 'center', color: '#DFDFDF' }}>OR</Text>
                    </View>
                    <View style={{ flex: 1, height: 1, backgroundColor: '#DFDFDF' }} />
                </View>

                <View style={{ ...styles.buttonContainer, marginBottom: 100 }}>
                    <TouchableOpacity style={{ ...styles.button, backgroundColor: '#FF6448' }} title="REGISTER" onPress={() => navigation.navigate('Register')} >
                        <Text style={styles.buttonText}>REGISTER</Text>
                    </TouchableOpacity>
                </View>


            </View>
        </View>
    )

}