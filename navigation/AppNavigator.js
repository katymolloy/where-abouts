// The importing content to be used
import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importing the first and second screen files, as well as the styles file for styling the content
import HomeScreen from '../screens/HomeScreen';
import RegisterScreen from '../screens/RegisterScreen';
import { styles } from '../styles/styles';
import SignInScreen from '../screens/SignInScreen';


const Stack = createNativeStackNavigator();

function AppNavigator() {

    // Below the navigation is being defined for the app, with references to the two screens there are on the app (ScreenOne, and ScreenTwo).
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                headerMode="screen"
                screenOptions={{
                    headerTintColor: Platform.OS === 'android' ? 'black' : 'blue',
                    headerStyle: {
                        backgroundColor: Platform.OS === 'android' ? 'white' : '',
                        textAlign: 'center',
                        justifyContent: 'center',
                    }
                }}
            >
                <Stack.Screen
                    style = {styles.titleHeader}
                    name="HomeScreen"
                    component={HomeScreen}
                />
                <Stack.Screen
                    style = {styles.titleHeader}
                    name="RegisterScreen"
                    component={RegisterScreen}
                    //options={{title: 'SEND EMAIL',}}
                />
                <Stack.Screen
                    style = {styles.titleHeader}
                    name="SignInScreen"
                    component={SignInScreen}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

// For screen two in case it does something: 
/*({ route }) => ({ title: route.params.screenTitle })*/

export default AppNavigator;