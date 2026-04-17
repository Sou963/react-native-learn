import React, { Component } from "react";
import { Text, View, Button } from "react-native";

export class homes extends Component {
  render() {
    return (
      <View>
        <Text> Home page </Text>
        <View>
          <Button
            title="Go to product"
            onPress={() => this.props.navigation.navigate("Product")}
          />
        </View>
      </View>
    );
  }
}

export default homes;
