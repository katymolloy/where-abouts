import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';
export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Image>
                {/* icon can go here */}
            </Image>
            <Text style={styles.header}>
                WHERE ABOUTS
            </Text>
            <View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} title="SIGN IN" onPress={() => navigation.navigate('SignIn')}>
                        <Text style={styles.buttonText}>SIGN IN</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} title="REGISTER" onPress={() => navigation.navigate('Register')} >
                        <Text style={styles.buttonText}>REGISTER</Text>
                    </TouchableOpacity>
                </View>


            </View>
        </View>
    )

}