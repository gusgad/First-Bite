import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Main from './app/screens/Main';
import Recipes from './app/screens/Recipes';
import Recipe from './app/screens/Recipe';
import NotFound from './app/screens/NotFound';

export default class fb extends Component {
    constructor(props) {
        super(props);
    }

    render() {        
        return <Screens />;
  }
}

/* All screens for rendering go here */
const Screens = StackNavigator({
    Main: {screen: Main},
    Recipes: {screen: Recipes},
    Recipe: {screen: Recipe},
});

AppRegistry.registerComponent('first-bite', () => screens);