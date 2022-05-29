import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useState, useEffect } from 'react'
import Ionicons from '@expo/vector-icons/Feather';
import React from 'react'
import TextForm from '../inputs/TextInput';
import SubmitButton from '../buttons/SubmitButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CreateRoom = ({setShowModal, showModal, roomID, reloadRooms}) => {
  const [roomName, setRoomName] = useState()
  const [roomList, setRoomList] = useState([])
  const [ready, setReady] = useState(true);
  const [id, setID] = useState()

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const loadRooms = () => {
    AsyncStorage.getItem("storedRooms").then(data => {
      if (data !== null) {
        setRoomList(JSON.parse(data))
        setReady(true)
        console.log(JSON.parse(data))
      }
    }).catch((error) => {
      console.log(error)
    })
  }

  const createID = () => {
      let id = "";
      for (let i = 0; i < 8; i++) {
        let val = ""
        val = getRandomInt(9)
        id = id + val
      }
      console.log(id)
      setID(id)
  }

  const createRoom = async () => {
    console.log("creting room")
    await AsyncStorage.setItem('storedRooms', "[]").then((res) => {
      console.log("deleted old state")
    })
    try {
        const value = {
            roomID: id,
            roomName: roomName,
            plants: [],
        }
        let temp = roomList
        temp.push(value)
      const jsonValue = JSON.stringify(temp)
      await AsyncStorage.setItem('storedRooms', jsonValue).then((res) => {
          console.log("created")
          console.log(res)
      })
      reloadRooms()
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    loadRooms()
    createID()
  }, [])
  

  return (
    <View style={styles.CreatePlantContainer}>
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <View style={styles.modalHeader}>
                    <Text style={{fontSize: 25}}>New Room</Text>
                    <TouchableOpacity onPress={() => {setShowModal(!showModal)}}>
                        <Ionicons name="x" size={30} color="#86B049" />
                    </TouchableOpacity>
                </View>
                <TextForm value={roomName} setValue={setRoomName} isSecret={false} placeholder={"Room Name"} label={"Room Name"}/>
                <View style={{display: 'flex', alignItems: 'center', marginTop: 20}}>
                    <SubmitButton submitFunction={() => createRoom()}/>
                </View>
            </View>
        </View>
    </View>
  )
}

export default CreateRoom

const styles = StyleSheet.create({
    CreatePlantContainer: {
        height: '100%',
    },
    modalView: {
        backgroundColor: "white",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: '100%',
        height: '90%',
        paddingHorizontal: 20,
    },
    centeredView: {
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "center",
      marginTop: 22,
    },
    modalHeader: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})