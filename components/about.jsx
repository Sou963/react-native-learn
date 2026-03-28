import React from "react";
import Navbar from "./navbar";
import { View, Text, Button } from "react-native";

export default function About({ navigation }) {
  return (
    <View>
      <Navbar navigation={navigation} />

      <Text>About Page</Text>

      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
      />

    </View>
  );
}


