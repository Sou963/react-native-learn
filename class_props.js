import React, { Component } from "react";
import { Text, View } from "react-native";

export class ClassProps extends Component {
  render() {
    return (
      <View>
        <Text>Name: {this.props.name}</Text>
        <Text>Age: {this.props.age}</Text>
        <Text>Gender: {this.props.gender}</Text>
      </View>
    );
  }
}

export default ClassProps;
