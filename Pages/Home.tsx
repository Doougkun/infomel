import React from "react";
import { StatusBar } from "expo-status-bar";
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

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#eeba19",
    accent: "#ed8c00",
  },
};

class Home extends React.Component {
  render() {
    return (
      <PaperProvider theme={theme}>
        <ScrollView style={styles.container}>
          <View style={styles.beeView}>
            <Image
              style={styles.beeIcon}
              source={require("../assets/bee-logo.png")}
            />
          </View>
          <Card onPress={() =>
            this.props.navigation.navigate('Meio Ambiente')} style={styles.card}>
            <Card.Cover source={require("../assets/bee-bg-1.png")} /> 
            <Card.Content>
              <Title>Meio Ambiente</Title>
            </Card.Content>
          </Card>
          <Card onPress={() =>
            this.props.navigation.navigate('Saude')} style={styles.card}>
            <Card.Cover source={require("../assets/bee-bg-2.jpg")} />
            <Card.Content>
              <Title>Saúde</Title>
            </Card.Content>
          </Card>
          <Card onPress={() =>
            this.props.navigation.navigate('Beleza')} style={styles.card}>
            <Card.Cover source={require("../assets/bee-bg-3.jpg")} />
            <Card.Content>
              <Title>Beleza</Title>
            </Card.Content>
          </Card>
          <Card onPress={() =>
            this.props.navigation.navigate('Quiz')} style={styles.card}>
            <Card.Cover source={require("../assets/bee-bg-4.jpg")} />
            <Card.Content>
              <Title>Quiz: Qual abelha você é?</Title>
            </Card.Content>
          </Card>
          <StatusBar style="auto" />
        </ScrollView>
      </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(243,198,34,1.00)',
  },
  card: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    backgroundColor: 'rgba(252,214,21,1.00)'
  },
  beeView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 15,
  },
  beeIcon: {
    padding: 5,
    height: 48,
    width: 48,
    backgroundColor: 'rgba(243,198,34,1.00)',
    borderRadius: 12,
  },
});

export default Home;
