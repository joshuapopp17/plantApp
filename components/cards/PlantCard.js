import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const PlantCard = ({plantType, lastWatered, interval}) => {
  return (
    <TouchableOpacity>
        <View style={styles.plantContainer}>
            <View>
                <Image source={{uri: 'https://img.myloview.com/canvas-prints/continuous-one-line-drawing-of-house-plant-in-pot-botanical-decorative-plants-sketch-contour-design-isolated-on-white-background-decorative-houseplant-concept-vector-illustration-700-218609607.jpg'}} style={styles.image}></Image>
            </View>
            <View style={styles.plantDescription}>
                <Text style={{fontSize: 25}}>{plantType}</Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default PlantCard

const styles = StyleSheet.create({
    plantContainer: {
        width: '100%',
        height: 100,
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 10,
    },
    plantDescription: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        width: 200
    },
    labelColor: {
        width: 20,
    },
    image: {
        width: 100,
        height: '100%',
        resizeMode: 'cover'
    },
    badge: {
        paddingHorizontal: 5,
        paddingVertical: 3,
        borderRadius: 10,
        fontSize: 20,
    }
})