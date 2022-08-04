import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Platform } from 'react-native';
import { useState, useEffect } from 'react';
//import Device from 'expo-device';
import * as Location from 'expo-location'

export function MapScreen() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  useEffect(() => {
     (async () => {
    //   if (Platform.OS === 'android' && !Device.isDevice) {
    //     setErrorMsg(
    //       'Oops, this will not work on Snack in an Android Emulator. Try it on your device!'
    //     );
    //     return;
    //   }
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  return (
    <View style={styles.container}>
    <MapView style={styles.map}
      showsUserLocation={true}
      showsMyLocationButton={true}
      region={{
        latitude: 12.976321884141406, 
        longitude: 80.26216351242394,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    zIndex: -1
  },
});