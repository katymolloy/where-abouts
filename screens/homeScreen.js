import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';


export default function Home({ navigation }) {
    return (
        <View>
            <Image>
                {/* icon can go here */}
            </Image>
            <Text>
                WHERE ABOUTS
            </Text>
            <View>
                <Button title='SIGN IN' onPress={navigation.navigate('SignInScreen')}/>
                <Button title='REGISTER' onPress={navigation.navigate('RegisterScreen')}/>
            </View>
        </View>
    )

}