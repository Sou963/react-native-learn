import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import FixedDimensionsBasics from "./components/class01";
import Class02 from "./components/class02";
import Class03 from "./components/class03";
import Class04 from "./components/class04";
import Class05 from "./components/class05";
import Class06 from "./components/class06";
import State from "./components/state";
import Styling from "./components/styling";
import Flexbox from "./components/flexbox";
import List from "./components/list";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./components/home";
import About from "./components/about";

const Stack = createNativeStackNavigator();

export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        {/* Navbar if needed */}
        {/* <Navbar /> */}
        <State />

        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* <Stack.Screen name="Navbar" component={Navbar} /> */}

          <Stack.Screen name="Home" component={Home} />

          <Stack.Screen name="About" component={List} />
        </Stack.Navigator>
        {/* <Home /> */}
      </NavigationContainer>
    );
  }
}

export default App;
