import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';

export default class SearchBar extends Component {
  render() {
    return (
        <TextInput style={styles.input} placeholder="Add products!" />
    );
  }
}

const styles = StyleSheet.create({
    input: {
        width: 200,
        height: 50,
        fontSize: 20
    }
});