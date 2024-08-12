// Inicio2.js
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Image, View, FlatList, TouchableOpacity } from 'react-native';

export default function Inicio2({ navigation }) {
  const [feed, setFeed] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=5c64b766ea9e433e808d56b153e33ec2');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setFeed(data.articles || []);
      } catch (error) {
        setError(error.message);
      }
    }
    getData();
  }, []);

  function renderItem({ item }) {
    return (
      <TouchableOpacity
        style={styles.apresentacao}
        onPress={() => navigation.navigate('NoticiaStories1', { item })}
      >
        <Text>{item.title}</Text>
        {item.urlToImage && <Image style={styles.imgapresentacao} source={{ uri: item.urlToImage }} />}
        <Text>{item.description}</Text>
      </TouchableOpacity>
    );
  }

  if (error) {
    return (
      <View style={styles.inicio}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.inicio}>
      <FlatList
        data={feed}
        renderItem={renderItem}
        keyExtractor={(item) => item.url || item.title}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inicio: {
    flex: 1,
    padding: 10,
  },
  apresentacao: {
    marginBottom: 15,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  imgapresentacao: {
    height: 150,
    width: '100%',
    borderRadius: 8,
  },
});
