import React from 'react';
import { View, StyleSheet } from 'react-native';

import firebase from 'firebase';

import AppNavigator from './src/navigation/AppNavigator';

var firebaseConfig = {
  apiKey: "AIzaSyBStR3jxhpL-rInNABRKHz_uAnesAMnzYY",
  authDomain: "foodfinder-rn.firebaseapp.com",
  databaseURL: "https://foodfinder-rn.firebaseio.com",
  projectId: "foodfinder-rn",
  storageBucket: "",
  messagingSenderId: "393117823458",
  appId: "1:393117823458:web:136de74cb4cb33b7a649bb"
};

firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
