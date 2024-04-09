import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import MapView from 'react-native-maps'

export default function SchoolScreen() {
  const [latitude, setLatitude] = useState(45.792100);
  const [longitude, setLongitude] = useState(4.811380);
  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
      mapType="mutedStandard"
      showsPointsOfInterest={false}
      showsUserLocation={true}
      followsUserLocation={false}
      initialRegion={{
      latitude: latitude,
      longitude: longitude,
      latitudeDelta: 0.010,
      longitudeDelta: 0.010,
      }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: '100%',
      height: '100%',
    },
  });