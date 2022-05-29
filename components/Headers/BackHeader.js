import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Feather';

const BackHeader = ({title}) => {
    const navigation = useNavigation()

  return (
    <View  style={styles.HeaderContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Rooms')}>
            <Ionicons name="arrow-left" size={40} color="white" />
        </TouchableOpacity>
        <Text style={{fontSize: 30, color: 'white', fontWeight: 'bold', marginLeft: 10}}>{title}</Text>
    </View>
  )
}

export default BackHeader

const styles = StyleSheet.create({
    HeaderContainer: {
        backgroundColor: '#86B049',
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    }
})