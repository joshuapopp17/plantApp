import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import RoomCard from '../cards/RoomCard';
import PlantCard from '../cards/PlantCard';

  const renderItem = ({ item }) => (
    <PlantCard plantType={item.plantType} lastWatered={item.LastWatered} interval={item.wateringInterval}/>
  );

const PlantList = ({data}) => {
  return (
    <View>
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.plantID}
        />
    </View>
  )
}

export default PlantList

const styles = StyleSheet.create({})