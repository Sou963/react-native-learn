import React, { useState } from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-web";

export default function func_state() {
  const [state, setstate] = useState({
    name: "olly",
    age: 20,
    gender: "female",
  });

  const changeState = () => {
    setstate({
      name: "Oggy",
      age: 19,
      gender: "male",
    });
  };
  return (
    <view>
      <text>{state.name}</text>
      <br />
      <text>{state.age}</text>
      <br />
      <text>{state.gender}</text>
      <Button title="click me" onPress={changeState} />
    </view>
  );
}
