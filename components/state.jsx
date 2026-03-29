import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class state extends React.Component {
  state = {
    mystate:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
  };
  updatestate = () => {
    this.setState({
      mystate: "this is the updated state",
    });
  };
  render() {
    const Presentationalcompoent = (props) => {
      return (
        <View style={style.container}>
          <Text onPress={props.updatestate}> {props.mystate} </Text>
        </View>
      );
    };
    return (
      <Presentationalcompoent
        mystate={this.state.mystate}
        updatestate={this.updatestate}
      />
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
