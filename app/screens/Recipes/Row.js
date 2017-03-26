import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, ListView } from 'react-native';
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginLeft: 12,
    fontSize: 16
  },
  info: {
    marginLeft: 10,
    fontSize: 12,
    padding: 10
  },
  photo: {
    height: 80,
    width: 80,
    borderRadius: 5,
  }
});

export const Row = (props) => (
  <View style={styles.container}>
    <Image source={{ uri: props.food.image}} style={styles.photo} />
    <View>
        <Text style={styles.label}>
          {`${props.food.label}`}
        </Text>
        <Text style={styles.info}>This guuuuuuuuuy jajajajajarrrrrjjajajajjajaa</Text>
    </View>
  </View>
);