import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

export default class Main extends Component {
  constructor(props) {
      super(props);
      this.onForward = this.onForward.bind(this);
  }

  onForward() {
      this.props.navigator.push({
          title: 'Recipes'
      });
  }
    
  render() {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Text style={styles.logo}>FirstBite</Text>
                <TextInput style={styles.searchBar} placeholder="Add products!" placeholderTextColor='#ffffff' />
            </View>
            <Button title='Find' style={styles.findButton} onPress={this.onForward} color="#FBC02D"></Button>
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
        color: '#FBC02D',
        textShadowColor: '#ffffff',
        textShadowOffset: {width: 1, height: 1}
    },
    searchBar: {
        width: 180,
        height: 50,
        fontSize: 20,
        borderRadius: 1,
        fontFamily: 'Roboto'
    },
    findButton: {
        flex: 1
    }
});