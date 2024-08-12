import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import Noticia1 from "./screens/Noticia1";
import Noticia02 from "./screens/Noticia02";
import NoticiaDetalhe from "./screens/NoticiaDetalhe";
import NoticiaStories1 from "./screens/NoticiaStories1";
import LoginScreen from "./screens/LoginScreen"; // Importe a nova tela de login
import SearchScreen from "./screens/SearchScreen";
import ProgramadorInfo from './screens/ProgramadorInfo';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {}
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Noticia1" component={Noticia1} options={{ title: 'Notícia 01' }} />
        <Stack.Screen name="Noticia02" component={Noticia02} options={{ title: 'Notícia' }} />
        <Stack.Screen name="NoticiaDetalhe" component={NoticiaDetalhe} options={{ title: 'Detalhes da Notícia' }} />
        <Stack.Screen name="NoticiaStories1" component={NoticiaStories1} options={{ title: 'Detalhes da Notícia' }} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} options={{title:'Busca'}}/>
        <Stack.Screen name="ProgramadorInfo" component={ProgramadorInfo} options={{ title: 'Informações do Programador' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

