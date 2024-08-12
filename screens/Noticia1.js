import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Noticia1({ navigation }) {
  const [noticia1, setNoticia1] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=5c64b766ea9e433e808d56b153e33ec2');
        const data = await response.json();
        console.log('API Response:', data); // Log para depuração
        if (data.articles && Array.isArray(data.articles)) {
          setNoticia1(data.articles);
        } else {
          setError('A API não retornou dados válidos.');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  function renderItem({ item, index }) {
    return (
      <TouchableOpacity style={styles.bloco} onPress={() => navigation.navigate('NoticiaDetalhe', { item })}>
        {item.urlToImage ? (
          <Image style={styles.image} source={{ uri: item.urlToImage }} />
        ) : (
          <View style={[styles.image, styles.noImage]}><Text>Sem imagem</Text></View>
        )}
        <View style={styles.textBox}>
          <Text style={styles.nome}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  if (noticia1.length === 0) {
    return (
      <View style={styles.container}>
        <Text>Nenhum artigo disponível.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        data={noticia1}
        renderItem={renderItem}
        keyExtractor={(item) => item.url || item.title} // Usa 'url' ou 'title' como chave única
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  bloco: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  noImage: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
  },
  textBox: {
    justifyContent: 'center',
    flex: 1,
    marginLeft: 10,
  },
  nome: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

