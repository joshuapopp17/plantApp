import { StyleSheet, Text, View, Modal } from 'react-native'
import {useState, useEffect} from 'react'
import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import RoomCard from '../components/cards/RoomCard';
import RoomList from '../components/Lists/RoomList';
import Header from '../components/Headers/Header';
import AddButton from '../components/buttons/AddButton';
import CreateRoom from '../components/modals/CreateRoom';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';

const RoomScreen = ({navigation}) => {
  const [showModal, setShowModal] = useState(false)
  const [ready, setReady] = useState(true);
  const [rooms, setRooms] = useState()
  const isFocused = useIsFocused()

  const loadRooms = () => {
    AsyncStorage.getItem("storedRooms").then(data => {
      if (data !== null) {
        setRooms(JSON.parse(data))
        setReady(true)
        console.log(data)
      }
    }).catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    loadRooms()
  }, [])

  useEffect(() => {
    console.log("nav reload rooms")
    loadRooms()
  }, [isFocused])

  return (
    <SafeAreaView style={styles.roomContainer}>
      <Header title={'Your Rooms'}/>
      {ready ? <>
      <View>
        <RoomList DATA={rooms}/>
      </View>
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
        <CreateRoom reloadRooms={loadRooms} setShowModal={setShowModal} showModal={showModal}/>
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

export default RoomScreen

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