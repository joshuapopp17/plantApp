import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import RoomCard from '../cards/RoomCard';

  const renderItem = ({ item }) => (
    <RoomCard roomName={item.roomName} labelColor={item.labelColor} numOfPlants={item.plants.length} id={item.roomID}/>
  );

const RoomList = ({DATA}) => {
  return (
    <View>
        <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.roomID}
        />
    </View>
  )
}

export default RoomList

const styles = StyleSheet.create({})