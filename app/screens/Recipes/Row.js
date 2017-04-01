import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, ListView } from 'react-native';
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'stretch',
  },
  label: {
    fontSize: 17,
    color: 'white',
    marginTop: 3,
    fontWeight: 'bold',
    textShadowColor: '#F6F6F6',
    textShadowOffset: {width: 0.5, height: 0.5},
    textAlign: 'center'
  },
  info: {
    fontSize: 14,
    padding: 10,
    
  },
  photo: {
    height: 150,
    borderRadius: 1,
    opacity: 0.8,

  },
  backdropView: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export const Row = (props) => (
  <View style={styles.container}>
    <Image source={{ uri: props.food.image}} style={styles.photo}>
        <View style={styles.backdropView}>
            <Text style={styles.label}>
                  {`${props.food.title}`}
            </Text>
        </View>
    </Image>
  </View>
);