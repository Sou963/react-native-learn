import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export class class03 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.first} />
        <View style={styles.second} />
        <View style={styles.third} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  first: {
    flex: 1,
    backgroundColor: "rgb(255, 162, 0)",
  },
  second: {
    flex: 2,
    backgroundColor: "rgb(0, 255, 195)",
  },
  third: {
    flex: 3,
    backgroundColor: "rgb(187, 0, 255)",
  },
  container: {
    flex: 1,
    padding: 20,
    flexDirection: "column",
  },
});

export default class03;
