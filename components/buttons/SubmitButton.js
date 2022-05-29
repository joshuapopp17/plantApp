import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Feather';

const SubmitButton = ({setShowModal, showModal, submitFunction}) => {
  return (
        <TouchableOpacity  style={styles.ButtonContainer} onPress={submitFunction}>
            <Text style={{color: 'white', fontSize: 20}}>Create</Text>
        </TouchableOpacity>
  )
}

export default SubmitButton

const styles = StyleSheet.create({
    ButtonContainer: {
        width: '70%',
        backgroundColor: '#86B049',
        borderRadius: 15,
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
})