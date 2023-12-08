import React, { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';
import { ScrollView } from 'react-native-gesture-handler';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';


import CollapseScroll from '../components/collapseScroll';

export default function Map({ navigation }) {
    const [currentLocation, setCurrentLocation] = useState(null);

    // getting the users location to display on map
    useEffect(() => {
        const getLocation = async () => {
            try {
                let { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== "granted") {
                    console.log("Permission to access location was denied")
                    return;
                }
                let location = await Location.getCurrentPositionAsync({});
                setCurrentLocation({
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                });
                console.log('Location retrieved')
            } catch (error) {
                console.log("An error occured retrieving location: " + error);
            }
        };
        getLocation();
    }, [])

    return (
        <View style={styles.container}>
            {/* map view is only displayed if current location is set */}
            {currentLocation ?
                <>
                    <MapView style={{ alignSelf: 'stretch', height: '93%' }} initialRegion={currentLocation} showsUserLocation={true} />
                    <CollapseScroll navigation={navigation} />
                </>
                :
                <View>
                    <Text style={styles.loadingText}>Loading...</Text>
                </View>
            }


        </View>
    )

}