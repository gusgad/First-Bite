import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

export default class Main extends Component {
  constructor(props) {
      super(props);
      
      this.state = {
          textInputValue: ''
      }
      
      this.onForward = this.onForward.bind(this);
  }

  onForward() {
      this.props.navigator.push({
          title: 'Recipes',
          recipe_search: this.state.textInputValue
      });
  }
    
  render() {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Text style={styles.logo}>FirstBite</Text>
                <View style={styles.searchBarContainer}>
                    <Text style={styles.searchBarText}>INGREDIENTS YOU HAVE:</Text>
                    <TextInput onChangeText={(text) => this.setState({textInputValue: text})} style={styles.searchBar} underlineColorAndroid={'#7b1fa2'} />
                </View>
            </View>
            <Button title='Find' style={styles.findButton} onPress={this.onForward} color={'#f44336'}></Button>
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
        backgroundColor: '#7b1fa2'
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
        color: 'white',
        textShadowColor: '#ef5350',
        textShadowOffset: {width: 1, height: 1}
    },
    searchBarContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchBarText: {
        fontSize: 14,
        fontFamily: 'Roboto',
        color: 'white',
        textShadowColor: '#ef5350'
    },
    searchBar: {
        width: 180,
        height: 50,
        fontSize: 20,
        borderRadius: 1,
        fontFamily: 'Roboto',
        backgroundColor: '#f3e5f5',
        borderRadius: 10
    },
    findButton: {
        flex: 1,
        color: 'black'
    }
});