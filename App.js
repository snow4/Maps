import React, { Component } from 'react'
import { Text, View } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

export default class App extends Component {
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
                <MapView
                provider={PROVIDER_GOOGLE}
                style={{flex: 1}}
                region={{ 
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                showUserLocation={true}
                > 
                
                </MapView>
            </View>
        )
    }
}
