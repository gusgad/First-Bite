import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';

export default class SearchBar extends Component {
  render() {
    return (
        <TextInput style={styles.input} placeholder="Add products!" placeholderTextColor='#ffffff' />
    );
  }
}

const styles = StyleSheet.create({
    input: {
        width: 180,
        height: 50,
        fontSize: 20,
        backgroundColor: '#E91E63',
        borderRadius: 3
    }
});