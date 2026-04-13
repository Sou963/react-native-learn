import React, { Component } from "react";
import { View, Button, Image } from "react-native";

export class alerts extends Component {
  showAlert = () => {
    alert("this is the react native program");
  };

  render() {
    return (
      <View
        style={{
          height: "30%",
          width: "100%",
        }}
      >
        <View
          style={{
            height: "100%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </View>
        <Button title="Click Me" color="teal" onPress={this.showAlert} />
      </View>
    );
  }
}

export default alerts;
