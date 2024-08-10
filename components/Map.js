import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps'
import { selectDestination, selectOrigin } from '../slices/navSlice'

const Map = () => {
    const origin = useSelector(selectOrigin);  
  return (
    <MapView
        style={tw`flex-1`}
        initialRegion={{
            latitude: origin.location.latitude,
            longitude: origin.location.longitude,
            latitudeDelta: 0.005,
            latitudeDelta: 0.005,
        }}
    >
        {origin?.location &&(
            <Marker>
                coordinate={{
                    latitude: origin.location.latitude,
                    longitude: origin.location.longitude,
                }}
                title="Origin"
                description={origin.description}
                identifier="origin"
            </Marker>
        )}
    </MapView>
  )
}

export default Map

const styles = StyleSheet.create({})