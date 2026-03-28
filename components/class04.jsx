import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Class04() {
  const [direction, setDirection] = useState("column");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Flex direction: {direction}
      </Text>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => setDirection("column")}
        >
          <Text>Column</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => setDirection("row")}
        >
          <Text>Row</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.boxContainer, { flexDirection: direction }]}>
        <View style={[styles.box, { backgroundColor: "red" }]} />
        <View style={[styles.box, { backgroundColor: "green" }]} />
        <View style={[styles.box, { backgroundColor: "blue" }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10,
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  btn: {
    backgroundColor: "#ddd",
    padding: 10,
    width: "48%",
    alignItems: "center",
  },

  boxContainer: {
    flex: 1,
    backgroundColor: "#eee",
    marginTop: 10,
  },

  box: {
    width: 50,
    height: 50,
    margin: 5,
  },
});

