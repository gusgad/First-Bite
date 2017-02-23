import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import SearchBar from './Components/SearchBar';
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

export default class Main extends Component {
  render() {
    return (
        <View style={styles.container}>
            <Image source={require('./background.jpg')} style={styles.background} />
            <View style={styles.searchView}>
                <SearchBar style={styles.searchbar} />
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1
  },
  background: {
      flex: 1,
      resizeMode: "stretch",
      width: width,
      height: height,
      opacity: 0.5,
      position: 'absolute'
  },
  searchView: {
      width: width,
      height: height,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center'
  },
  searchbar: {
      width: 10,
      height: 20,
      backgroundColor: 'red'
  }
});