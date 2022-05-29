import { StyleSheet, Text, View, Modal } from 'react-native'
import {useState} from 'react'
import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import PlantList from '../components/Lists/PlantList';
import Header from '../components/Headers/Header';
import BackHeader from '../components/Headers/BackHeader';
import AddButton from '../components/buttons/AddButton';
import CreatePlant from '../components/modals/CreatePlant';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PlantScreen = ({route, navigation}) => {
  const [showModal, setShowModal] = useState(false)
  const { id, roomName } = route.params;
  const [rooms, setRooms] = useState()
  const [ready, setReady] = useState(false);
  const [plants, setPlants] = useState([])

  const loadPlants = () => {
    AsyncStorage.getItem("storedRooms").then(data => {
      if (data !== null) {
        setRooms(JSON.parse(data))
        let objIndex = JSON.parse(data).findIndex((obj => obj.roomID == id));
        console.log(objIndex)
        let plantTemp = JSON.parse(data)[objIndex].plants
        setPlants(plantTemp)
        setReady(true)
      }
    }).catch((error) => {
      console.log(error)
    })
  }

    useEffect(() => {
      loadPlants()
      console.log("loading plants for " + id)
    }, [])

    useEffect(() => {
      loadPlants()
      console.log("nav reload plants")
    }, [navigation])



  return (
    <SafeAreaView style={styles.roomContainer}>
      <BackHeader title={roomName + " Plants"}/>
      {ready ? <>
      <PlantList data={plants}/>
      <View style={styles.button}>
        <AddButton setShowModal={setShowModal} showModal={showModal}/>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}>
        <CreatePlant reloadPlants={loadPlants} roomID={id} setShowModal={setShowModal} showModal={showModal}/>
      </Modal>
      {showModal ? <View style={styles.modalDim}>
      </View> : <></>}
      <StatusBar style={'light'} backgroundColor={'#86B049'}/>
      </>
      :
      <><StatusBar style={'light'} backgroundColor={'#86B049'}/></>}
    </SafeAreaView>
  )
}

export default PlantScreen

const styles = StyleSheet.create({
    roomContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    button: {
      paddingVertical: 20,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    modalDim: {
      position: 'absolute',
      zIndex: 5,
      backgroundColor: "rgba(0,0,0,0.6)",
      width: '100%',
      height: '100%'
    }
})