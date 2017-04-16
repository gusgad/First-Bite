import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, ListView } from 'react-native';
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');


export default class Recipes extends Component {
  constructor(props) {
      super(props);
      this.rId = this.props.data;
  }
    
    
  componentDidMount() {
        fetch('http://food2fork.com/api/get?key=1ac1d8dde20033351e584a6e3f85300e&rId=35171').then(response => 
            response.json().then(data => {
                return data;
            })
        ).then((data) => {
            console.log(data.recipe.ingredients)
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