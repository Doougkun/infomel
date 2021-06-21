import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Pages/Home";
import MeioAmbiente from "./Pages/MeioAmbiente";
import Saude from "./Pages/Saude";
import Beleza from "./Pages/Beleza";
import Quiz from "./Pages/Quiz";

const Stack = createStackNavigator();


const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    //'card' é a cor de fundo da barra superior (navegação)
    card: 'rgb(252, 214, 21)',
    //'text' é a cor de texto da barra superior (navegação)
    text: 'rgb(35, 33, 44)',
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
          <Stack.Screen name="Meu Mel" component={Home} />
          <Stack.Screen
            name="Meio Ambiente"
            component={MeioAmbiente}
          />
          <Stack.Screen
            name="Saude"
            component={Saude}
          />
          <Stack.Screen
            name="Beleza"
            component={Beleza}
          />
          <Stack.Screen
            name="Quiz"
            component={Quiz}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  card: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
  },
  beeView: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  beeIcon: {
    padding: 5,
    height: 48,
    width: 48,
    backgroundColor: "#eeba19",
    borderRadius: 12,
  },
});