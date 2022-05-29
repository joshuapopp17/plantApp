import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react'
import { StyleSheet } from 'react-native';
import MainStack from './screens/navigation/MainStack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();


export default function App() {

  return (
      <NavigationContainer>
        <MainStack/>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});
