import { StyleSheet, View } from 'react-native';
import React from 'react';
import MapView, { Marker } from 'react-native-maps'; // Import Marker
import { useSelector } from 'react-redux'; // Import useSelector
import tw from 'tailwind-react-native-classnames';
import { selectOrigin } from '../slices/navSlice';

const Map = () => {
    const origin = useSelector(selectOrigin);

    return (
        <MapView
            style={tw`flex-1`}
            mapType= "mutedStandard"
            initialRegion={{
                latitude: origin.location.latitude, 
                longitude: origin.location.longitude, 
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }}
        >
            {origin?.location && (
                <Marker
                    coordinate={{
                        latitude: origin.location.latitude,
                        longitude: origin.location.longitude,
                    }}
                    title="Origin"
                    description={origin.description}
                    identifier="origin"
                />
            )}
        </MapView>
    );
};

export default Map;

const styles = StyleSheet.create({});
