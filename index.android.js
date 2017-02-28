import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Navigator } from 'react-native';
import Main from './app/screens/Main';
import Recipes from './app/screens/Recipes';

export default class fb extends Component {
  constructor(props) {
      super(props);
  }
  
  renderScene(route, navigator) {
      if(route.title == 'Main') {
          return(<Main navigator={navigator} />);
      }
                 
      if(route.title == 'Recipes') {
          return(<Recipes/>);
      }
  }
    
  render() {
      
    
      
    return (
        <Navigator
        initialRoute={{title: 'Main'}}
        renderScene={this.renderScene}
        />
    );
  }
}

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('fb', () => fb);
