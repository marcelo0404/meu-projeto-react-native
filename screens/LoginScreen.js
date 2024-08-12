// LoginScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Image, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.navigate('HomeScreen'); // Navegar para a HomeScreen após login
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/ECT.png')} style={styles.logo} /> {/* Verifique o caminho da imagem */}
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: 300,
    height: 300,
    marginTop:180,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});
