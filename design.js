import React, { Component } from "react";
import { Text, View } from "react-native";

export class design extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: "teal",
          flex: 5,
        }}
      >
        <View style={{ backgroundColor: "red", flex: 1 }}></View>
        <View style={{ backgroundColor: "green", flex: 3 }}></View>
        <View style={{ backgroundColor: "blue", flex: 1 }}></View>
      </View>
    );
  }
}

export default design;
