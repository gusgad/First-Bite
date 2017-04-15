import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, ListView } from 'react-native';
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');


export default class Recipes extends Component {
  constructor(props) {
      super(props);
  }
    
    
  componentDidMount() {
    
          fetch('http://food2fork.com/api/search?key=1ac1d8dde20033351e584a6e3f85300e&q=shredded%20chicken').then((response) => {
              return response.json();
          })
          .then((data) => {
              this.setState({
                dataSource: this.state.dataSource.cloneWithRows(data.recipes)
              });
              console.log(data.recipes);
          })
        
        
        
  }
  render() {
    return (
        <View style={styles.container}>
            <Text>Sup</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    separator: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#EEEEEE',
      }
});