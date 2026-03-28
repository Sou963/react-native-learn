import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export class class02 extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <View style={styles.first} />
        <View style={styles.second} />
        <View style={styles.third} />
      </View>
    )
  }
}

const styles=StyleSheet.create({
    first:{
        flex:1,
        backgroundColor:'rgb(255, 162, 0)',
    },
    second:{
        flex:2,
        backgroundColor:'rgb(0, 255, 195)',
    },
    third:{
        flex:3,
        backgroundColor:'rgb(187, 0, 255)',
    }
})

export default class02;
