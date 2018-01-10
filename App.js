import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import CounterCard from './src/App.js';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CounterCard/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(240, 240, 240)',
  },
});
