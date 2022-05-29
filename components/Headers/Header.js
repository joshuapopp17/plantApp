import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = ({title}) => {
  return (
    <View  style={styles.HeaderContainer}>
        <Text style={{fontSize: 30, color: 'white', fontWeight: 'bold'}}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    HeaderContainer: {
        backgroundColor: '#86B049',
        padding: 10
    }
})