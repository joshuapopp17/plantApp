import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useState, useEffect } from 'react'
import Ionicons from '@expo/vector-icons/Feather';
import React from 'react'
import TextForm from '../inputs/TextInput';
import SubmitButton from '../buttons/SubmitButton';
import AsyncStorage from '@react-native-async-storage/async-storage';


const CreatePlant = ({setShowModal, showModal, roomID, reloadPlants}) => {
  const [plantType, setPlantType] = useState()
  const [roomList, setRoomList] = useState([])
  const [ready, setReady] = useState(true);
  const [wateringInterval, setWateringInterval] = useState()
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
        roomList.map((data) => {
          console.log("Item")
          console.log(data)
        })
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

  const createPlant = async () => {
    console.log("creting plant")
    await AsyncStorage.setItem('storedRooms', "[]").then((res) => {
      console.log("deleted old plant list")
    })
    try {
        const value = {
            plantID: id,
            plantType: plantType,
            wateringInterval: wateringInterval,
            LastWatered: new Date()
        }
        let temp = roomList
        console.log(temp)
        let objIndex = temp.findIndex((obj => obj.roomID == roomID));
        console.log(objIndex)
        let plantTemp = temp[objIndex].plants
        console.log(plantTemp)
        plantTemp.push(value)
        temp[objIndex].plants = plantTemp
      const jsonValue = JSON.stringify(temp)
      await AsyncStorage.setItem('storedRooms', jsonValue).then((res) => {
          console.log("created")
          console.log(res)
      })
      reloadPlants()
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
                    <Text style={{fontSize: 25}}>New Plant</Text>
                    <TouchableOpacity onPress={() => {setShowModal(!showModal)}}>
                        <Ionicons name="x" size={30} color="#86B049" />
                    </TouchableOpacity>
                </View>
                <TextForm value={plantType} setValue={setPlantType}isSecret={false} placeholder={"Plant Type"} label={"Plant Type"}/>
                <TextForm value={wateringInterval} setValue={setWateringInterval} isSecret={false} placeholder={"Watering Interval"} label={"Watering Interval"}/>
                <View style={{display: 'flex', alignItems: 'center', marginTop: 20}}>
                    <SubmitButton submitFunction={createPlant}/>
                </View>
            </View>
        </View>
    </View>
  )
}

export default CreatePlant

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