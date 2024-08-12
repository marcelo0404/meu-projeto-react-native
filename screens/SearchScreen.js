// SearchScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';

export default function SearchScreen({ navigation }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    // Função para realizar a busca (pode ser uma chamada de API)
    const filteredResults = []; // Substitua por lógica de busca
    setResults(filteredResults);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Buscar notícias..."
        value={query}
        onChangeText={setQuery}
      />
      <Button title="Buscar" onPress={handleSearch} />
      <FlatList
        data={results}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.resultItem}>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
  resultItem: {
    padding: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
});
