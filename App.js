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

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name='SignIn' component={SignInScreen} options={{ title: 'Sign In' }} />
          <Stack.Screen name='Register' component={RegisterScreen} options={{ title: 'Register' }} />
          <Stack.Screen name='Map' component={Map} />
          <Stack.Screen name='AddContact' component={AddContact} />
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
