import React from 'react';
import { StyleSheet, Text, Image, FlatList, View, TouchableOpacity } from 'react-native';

export default function Inicio({ navigation }) {
  const inicio = [
    {
      id: 1,
      img: require('../assets/Apresentacao1.png'),
    }
  ];

  function renderItem({ item }) {
    return (
      <TouchableOpacity style={styles.apresentacao} onPress={() => navigation.navigate('ProgramadorInfo')}>
        <Image style={styles.imgapresentacao} source={item.img} />
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.inicio}>
      <FlatList
        data={inicio}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inicio: {
    backgroundColor: 'white',
  },
  apresentacao: {
    backgroundColor: 'white',
  },
  imgapresentacao: {
    height: 230,
    width: '100%',
    alignSelf: 'flex-start',
    margin: 0,
  },
});
