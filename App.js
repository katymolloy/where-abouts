import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import Home from './screens/homeScreen';
import SignInScreen from './screens/SignInScreen';
import RegisterScreen from './screens/RegisterScreen';
import Map from './screens/mapScreen';
import AddContact from './screens/AddContact'
import CollapseScroll from './components/collapseScroll';

import 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import { Urbanist_500Medium, Urbanist_700Bold, Urbanist_900Black_Italic } from '@expo-google-fonts/urbanist';


const Stack = createStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    Urbanist_500Medium,
    Urbanist_900Black_Italic,
    Urbanist_700Bold,
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name='SignIn' component={SignInScreen} options={{ title: 'Sign In' }} />
          <Stack.Screen name='Register' component={RegisterScreen} options={{ title: 'Register' }} />
          <Stack.Screen name='Map' component={Map} />
          <Stack.Screen name='Add Contact' component={AddContact} options={{ title: 'Add Contact' }} />
          <Stack.Screen name='CollapseScroll' component={CollapseScroll} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
