import { StyleSheet, Text, View, Pressable, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'

const RoomCard = ({roomName, numOfPlants, color, labelColor, id}) => {
    const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Plants', {
        id: id,
        roomName: roomName,
    })}>
        <View style={[styles.roomContainer, {backgroundColor: color}]}>
            <View style={[styles.labelColor, {backgroundColor: labelColor}]}>
            </View>
            <View style={{paddingLeft: 10, paddingTop: 5 }}>
                <Text style={{fontSize: 25,}}>{roomName}</Text>
                <Text style={{fontSize: 15,}}>{numOfPlants} Plants</Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default RoomCard

const styles = StyleSheet.create({
    roomContainer: {
        width: '100%',
        minHeight: 100,
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 10,
    },
    labelColor: {
        width: 20,
    }
})