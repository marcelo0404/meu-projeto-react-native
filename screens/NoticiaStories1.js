import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Linking } from 'react-native';

export default function NoticiaStories1({ route }) {
  const { title, content, description, url, urlToImage } = route.params.item;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.contentContainer}>
        {urlToImage && (
          <Image
            source={{ uri: urlToImage }}
            style={styles.image}
          />
        )}
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.content}>
            {content ? content.replace(/\[\+\d+ chars\]/, '...') : description}
          </Text>
          <Text
            style={styles.readMore}
            onPress={() => Linking.openURL(url)}
          >
            Leia a matéria completa
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  image: {
    width: 150,
    height: 150,
    marginRight: 16,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
  },
  readMore: {
    fontSize: 16,
    color: 'blue',
    marginTop: 8,
    textDecorationLine: 'underline',
  },
});
