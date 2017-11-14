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

    static stackNavigatorOptions = {
        title: 'Main',
        headerStyle: {
            backgroundColor: '#FFFFFF'
        },
        headerTitleStyle: {
            color: '#33333'
        }
    }

    
    render() {        
        return <Screens />;
  }
}

const Screens = StackNavigator({
    Main: {screen: Main},
    Recipes: {screen: Recipes},
});

AppRegistry.registerComponent('first-bite', () => screens);

