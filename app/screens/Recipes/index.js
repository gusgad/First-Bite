import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

export default class Recipes extends Component {
  constructor(props) {
      super(props);
      this.onPressLearnMore = this.onPressLearnMore.bind(this);
  }
  onPressLearnMore() {
        
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
  
});