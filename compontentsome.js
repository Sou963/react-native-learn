import React, { Component } from "react";
import { Text, View } from "react-native";

export class ComponentSome extends Component {
  render() {
    return (
      <View
        sstyle={{
          flex: 1, // This tells the view to fill the entire screen
          flexDirection: "row",
          backgroundColor: "teal",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>a</Text>
        <Text>b</Text>
        <Text>c</Text>
      </View>
    );
  }
}

export default ComponentSome;
