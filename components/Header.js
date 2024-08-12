import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Header({ navigation }) {
  return (
    <View style={styles.header}>
      <Image style={styles.moneyapp} source={require('../assets/ECT.png')} />
      <View style={styles.header2}>
        <FontAwesome5 
          name="search" 
          size={24} 
          color="black" 
          onPress={() => navigation.navigate('SearchScreen')} 
        />
        <FontAwesome5 
          name="bars" 
          size={24} 
          color="black" 
          onPress={() => navigation.navigate('Noticia1')} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    padding: 10,
    height: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header2: {
    flexDirection: 'row',
    height: 30,
    width: 60,
    justifyContent: 'space-between',
  },
  moneyapp: {
    height: 50,
    width: 90,
    borderRadius: 10,
  },
});

