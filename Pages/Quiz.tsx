import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from 'react-native-webview';

class Quiz extends React.Component {
  render() {
    return (
      <WebView source={{ uri: 'https://www.buzzfeed.com/doug12doug12/qual-espacie-de-abelha-voca-a-esytkb32zy' }} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  }
});

export default Quiz;
