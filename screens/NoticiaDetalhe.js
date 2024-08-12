import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function NoticiaDetalhe({ route }) {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: item.urlToImage }} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  image: {
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#333',
  },
});
