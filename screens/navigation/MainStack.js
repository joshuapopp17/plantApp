import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import RoomScreen from '../RoomScreen';
import PlantScreen from '../PlantScreen';

const Stack = createNativeStackNavigator();


const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false,
        animation: 'slide_from_right'
      }}>
        <Stack.Screen name="Rooms" component={RoomScreen} />
        <Stack.Screen name="Plants" component={PlantScreen} />
    </Stack.Navigator>
  )
}

export default MainStack

const styles = StyleSheet.create({})