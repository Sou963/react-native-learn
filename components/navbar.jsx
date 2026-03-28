import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Navbar({ navigation }) {
  return (
    <View style={styles.container}>

      <View style={styles.navbar}>

        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("About")}
        >
          <Text style={styles.navText}>About</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    width: "100%",
  },

  navbar: {
    marginTop: 25,
    height: 60,
    backgroundColor: "#0ea5e9",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  navText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

});