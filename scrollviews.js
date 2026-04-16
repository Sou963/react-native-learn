import React, { Component } from "react";
import { View, ScrollView } from "react-native";

export class Scrollviews extends Component {
  render() {
    return (
      <ScrollView horizontal={true}>
        <View
          style={{ height: 200, width: 200, backgroundColor: "teal" }}
        ></View>
        <View
          style={{ height: 200, width: 200, backgroundColor: "green" }}
        ></View>
        <View
          style={{ height: 200, width: 200, backgroundColor: "black" }}
        ></View>
        <View
          style={{ height: 200, width: 200, backgroundColor: "red" }}
        ></View>
        <View
          style={{ height: 200, width: 200, backgroundColor: "blue" }}
        ></View>
        <View
          style={{ height: 200, width: 200, backgroundColor: "yellow" }}
        ></View>
        <View
          style={{ height: 200, width: 200, backgroundColor: "teal" }}
        ></View>
        <View
          style={{ height: 200, width: 200, backgroundColor: "green" }}
        ></View>
        <View
          style={{ height: 200, width: 200, backgroundColor: "black" }}
        ></View>
        <View
          style={{ height: 200, width: 200, backgroundColor: "red" }}
        ></View>
        <View
          style={{ height: 200, width: 200, backgroundColor: "blue" }}
        ></View>
        <View
          style={{ height: 200, width: 200, backgroundColor: "yellow" }}
        ></View>
      </ScrollView>
    );
  }
}

export default Scrollviews;
