import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Image, View, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Cotacoes() {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=5c64b766ea9e433e808d56b153e33ec2');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const newsData = await response.json();
        setNews(newsData.articles);
      } catch (error) {
        setError(error.message);
      }
    }
    getData();
  }, []);

  function renderItem({ item }) {
    return (
      <TouchableOpacity style={styles.newsItem} onPress={() => navigation.navigate('NoticiaStories1', { item })}>
        <Image style={styles.newsImage} source={{ uri: item.urlToImage }} />
        <Text style={styles.newsTitle}>{item.title}</Text>
      </TouchableOpacity>
    );
  }

  if (error) {
    return (
      <View style={styles.error}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.newsContainer}>
      <FlatList
        data={news}
        renderItem={renderItem}
        keyExtractor={item => item.url}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  newsContainer: {
    flexDirection: 'row',
    height: 155,
    marginTop: 10,
    backgroundColor: 'white',
  },
  newsItem: {
    height: 100,
    width: 300,
    alignItems: 'center',
  },
  newsImage: {
    height: 85,
    width: 280,
    borderRadius: 10,
  },
  newsTitle: {
    textAlign: 'center',
    marginTop: 5,
  },
  error: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});



