import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import Main from './app/screens/Main';

export default class fb extends Component {
  render() {
    return (
        <Main />
    );
  }
}

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('fb', () => fb);
