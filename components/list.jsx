import React from "react";
import { FlatList, Text, View } from "react-native";

const App = () => {

  const data = [
    { id: "1", name: "Rahim" },
    { id: "2", name: "Karim" },
    { id: "3", name: "Sakib" }
  ];

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text>{item.name}</Text>
        )}
      />
    </View>
  );
};

export default App;