import React, { Component } from "react";
import { Text, View, Button } from "react-native";

export default class product extends Component {
  render() {
    return (
      <View>
        <Text> This is product page </Text>
        <View>
          <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      </View>
    );
  }
}
