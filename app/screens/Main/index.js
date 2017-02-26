import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import SearchBar from './Components/SearchBar';
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

export default class Main extends Component {
  constructor(props) {
      super(props);
      this.onPressLearnMore = this.onPressLearnMore.bind(this);
  }
  onPressLearnMore() {
        
  }
  render() {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Text style={styles.logo}>FirstBite</Text>
                <SearchBar style={styles.searchBar} />
            </View>
            <Button title='Find' style={styles.findButton} onPress={this.onPressLearnMore} color="#FBC02D"></Button>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'space-around',
        paddingTop: 30,
        paddingBottom: 30,
        backgroundColor: '#AD1457'
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    logo: {
        fontSize: 36,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        color: '#FBC02D'
    },
    searchBar: {
        fontFamily: 'Roboto',
        color: 'white'
    },
    findButton: {
        flex: 1
    }
});