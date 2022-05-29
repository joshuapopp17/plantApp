import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Feather';

const AddButton = ({setShowModal, showModal}) => {
  return (
    <View style={styles.ButtonContainer}>
        <TouchableOpacity onPress={() => {setShowModal(!showModal)}}>
            <Ionicons name="plus-circle" size={50} color="#86B049" />
        </TouchableOpacity>
    </View>
  )
}

export default AddButton

const styles = StyleSheet.create({
    ButtonContainer: {
    }
})