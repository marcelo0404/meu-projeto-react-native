import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

export default function ProgramadorInfo() {
  const data = [
    { id: '1', title: 'O que faz um programador?', content:  `
    Uma pessoa programadora é responsável pelo desenvolvimento de programas para computadores.
    Sua tarefa é criar os códigos que se transformam em softwares, por meio de comandos ou instruções para as máquinas.
    Um profissional dessa área pode criar páginas para web, programas para desktop, aplicativos mobile, entre outros sistemas computacionais.
    Essas aplicações são necessárias para atender as necessidades de negócio, que podem ser demandas internas de uma empresa ou pedidos de clientes.
  `,
},
    { id: '2', title: 'Qual o desafio na atuação de um programador?', content:  `
    Um programador atua diretamente na criação de códigos para sites, aplicativos e outros sistemas computacionais. É sua responsabilidade criar aplicações que funcionem corretamente e ofereçam uma boa usabilidade aos usuários.
    Porém, o profissional não se detém apenas à técnica da programação. Deve também se integrar à equipe, compreender as necessidades dos usuários e traçar estratégias para atender aos requisitos do projeto com maior eficiência.
    Para isso, é importante utilizar as linguagens de programação mais adequadas e se atualizar constantemente sobre as tecnologias.
  `,
},
    { id: '3', title: 'Quanto ganha um programador?', content: `
    Programador é uma das profissões mais valorizadas na área de tecnologia com renda de R$3.753,00.
    Segundo o Glassdoor, a mediana salarial de Programador junior é de R$2.751,00, e para profissionais seniores, a mediana salarial é de R$8.387,00.
  `,
},
  ];

  const renderItem = ({ item }) => {
    console.log(item);  // Adiciona este log para depuração
    return (
      <View style={styles.newsItem}>
        <Text style={styles.newsTitle}>{item.title}</Text>
        <Text style={styles.newsContent}>{item.content}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/Prog.png')}
      />
      
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.flatList}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
  flatList: {
    marginTop: 20,
  },
  newsItem: {
    marginBottom: 15,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  newsContent: {
    fontSize: 16,
  },
});
