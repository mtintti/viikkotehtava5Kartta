import MapView, { Marker} from "react-native-maps";
import { useEffect } from "react";
import { useState } from "react";
import * as Location from 'expo-location';
import { Text } from "react-native";

export default function Map() {
    const [marker, setMarker] = useState([]);
    const [location, setLocation] = useState(null);
    const showMarker = (e) => {
        const coordinates = e.nativeEvent.coordinate
        setMarker([...marker, coordinates])
    };

    useEffect(() => {
        (async () => {
           let { status } = await Location.requestForegroundPermissionsAsync();
           if (status !== 'granted') {
             setErrorMsg('Permission to access location was denied');
             return;
           }
       
           let location = await Location.getCurrentPositionAsync({});
           setLocation(location.coords);
         })();
       }, []);

       if (!location) {
        return <Text>Loading...</Text>;
    }

    return (
        <MapView style={{height: "100%", width: "100%"}}
        region={{ latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
        mapType="satellite"
        onLongPress={showMarker}>
            {marker.map((marker, index) => (<Marker key={index} title="marker"coordinate={{latitude:marker.latitude, longitude:marker.longitude}} ></Marker>)) }
        </MapView>
    )
}
