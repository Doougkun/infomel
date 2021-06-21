import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from 'react-native-webview';

class Quiz extends React.Component {
  render() {
    return (
      <WebView source={{ uri: 'https://buzzfeed.com.br/quiz/que-animal-de-roupinha-e-voce' }} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  }
});

export default Quiz;
