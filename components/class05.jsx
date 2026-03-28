import React, { Component } from "react";
import { Image, Text, View } from "react-native";

export class class05 extends Component {
  render() {
    return (
      <View style={{ padding: 10 }}>
        <Image source={require("../images/image.png")} 
        style={{width:'100%', height:'50%',marginTop:'10%',borderRadius:30,padding:'10%'}}
        />
      </View>
    );
  }
}

export default class05;
