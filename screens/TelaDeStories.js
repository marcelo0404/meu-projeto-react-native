import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function TelaDeStories({ route }) {
  const { noticia } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{noticia.title}</Text>
      {noticia.urlToImage && <Image style={styles.image} source={{ uri: noticia.urlToImage }} />}
      <Text style={styles.description}>{noticia.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#333',
  },
});
