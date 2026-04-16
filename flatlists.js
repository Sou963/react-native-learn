import React, { Component } from "react";
import { Text, View, FlatList, StyleSheet, Image } from "react-native";

export class Flatlists extends Component {
  mydata = [
    {
      id: "1",
      title: "Title 1",
      subtitle: "This is subtitle 1",
      img: "https://picsum.photos/200/200",
    },
    {
      id: "2",
      title: "Title 2",
      subtitle: "This is subtitle 2",
      img: "https://picsum.photos/201/200",
    },
    {
      id: "3",
      title: "Title 3",
      subtitle: "This is subtitle 3",
      img: "https://picsum.photos/202/200",
    },
    {
      title: "Title 4",
      subtitle: "This is subtitle 4",
      img: "https://picsum.photos/203/200",
    },
    {
      id: "5",
      title: "Title 1",
      subtitle: "This is subtitle 1",
      img: "https://picsum.photos/200/200",
    },
    {
      id: "6",
      title: "Title 2",
      subtitle: "This is subtitle 2",
      img: "https://picsum.photos/201/200",
    },
    {
      id: "7",
      title: "Title 3",
      subtitle: "This is subtitle 3",
      img: "https://picsum.photos/202/200",
    },
    {
      id: "8",
      title: "Title 4",
      subtitle: "This is subtitle 4",
      img: "https://picsum.photos/203/200",
    },
    {
      id: "9",
      title: "Title 1",
      subtitle: "This is subtitle 1",
      img: "https://picsum.photos/200/200",
    },
    {
      id: "10",
      title: "Title 2",
      subtitle: "This is subtitle 2",
      img: "https://picsum.photos/201/200",
    },
    {
      id: "11",
      title: "Title 3",
      subtitle: "This is subtitle 3",
      img: "https://picsum.photos/202/200",
    },
    {
      id: "12",
      title: "Title 4",
      subtitle: "This is subtitle 4",
      img: "https://picsum.photos/203/200",
    },
  ];

  ChildView = ({ childtitle, childsubtitle, childimg }) => {
    return (
      <View style={styles.card}>
        <Image source={{ uri: childimg }} style={styles.image} />
        <Text style={styles.title}>{childtitle}</Text>
        <Text style={styles.subtitle}>{childsubtitle}</Text>
      </View>
    );
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#f2f2f2" }}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={this.mydata}
          numColumns={2}
          renderItem={({ item }) => (
            <this.ChildView
              childtitle={item.title}
              childsubtitle={item.subtitle}
              childimg={item.img}
            />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "white",
    margin: 8,
    padding: 10,
    borderRadius: 10,
    elevation: 5,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 100,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "teal",
    marginTop: 8,
  },
  subtitle: {
    fontSize: 12,
    color: "gray",
    textAlign: "center",
  },
});

export default Flatlists;
