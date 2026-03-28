import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export class class01 extends Component {
  render() {
    return (
      <View>
        <View style={Styles.first}></View>
        <View style={Styles.second}></View>
        <View style={Styles.third}></View>
      </View>
    );
  }
}
const Styles = StyleSheet.create({
  first: {
    width: "100%",
    height: "20%",
    backgroundColor: "red",
  },
  second: {
    width: "100%",
    height: "30%",
    backgroundColor: "green",
  },
  third: {
    width: "100%",
    height: "50%",
    backgroundColor: "blue",
  },
});
export default class01;
