import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import Constants from 'expo-constants';
import Header from '../components/Header';
import Cotacoes from '../components/Cotacoes';
import Inicio from '../components/Inicio';
import Inicio2 from '../components/Inicio2';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />   
      <Header navigation={navigation}/>       
      <Inicio navigation={navigation}/>
      <Cotacoes navigation={navigation}/>
      <Inicio2 navigation={navigation}/>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: Constants.statusBarHeight,
    
  }
});
