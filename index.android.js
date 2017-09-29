import React, { Component } from 'react';
import { AppRegistry, StyleSheet } from 'react-native';
import App from './src/App';

export default class memo extends Component {
  render() {
    return (
      <App/>
    );
  }
}

AppRegistry.registerComponent('memo', () => memo);
