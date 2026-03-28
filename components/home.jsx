import React from "react";
import Navbar from "./navbar";
import { View, Text, Button } from "react-native";

export default function Home({ navigation }) {
  return (
    <View>
      <Navbar navigation={navigation} />

      <Text>Home Page</Text>

      <Button
        title="Go to About"
        onPress={() => navigation.navigate("About")}
      />

    </View>
  );
}
