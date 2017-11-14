import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight, TextInput, ListView, ActivityIndicator } from 'react-native';
import {Row} from './Row'
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

let arraynew = [];

export default class Recipes extends Component {
  constructor(props) {
      super(props);
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      
      const { params } = this.props.navigation.state;
      
      this.recipe_search = params.recipe_search.toString();
      this.state = {
          dataSource: ds.cloneWithRows([]),
          animating: true
      };
      
      this.onBack = this.onBack.bind(this);
      console.log(this.recipe_search)
  }
    
  onBack() {
    navigate('Main');
  }
    
  componentDidMount() {
        const { navigate } = this.props.navigation;
          fetch(`http://food2fork.com/api/search?key=1ac1d8dde20033351e584a6e3f85300e&q=${this.recipe_search}`).then((response) => {
              return response.json();
          })
          .then((data) => {
              if (data.recipes.length == 0) {
                  console.log("No results");
                  navigate('NotFound');
              }
              this.setState({
                dataSource: this.state.dataSource.cloneWithRows(data.recipes)
              });
              this.setState({
                  animating: false
              })
              console.log(data.recipes);
          })
          .catch((err) => {
              // handle the error
            console.log(err, "not found");
            navigate('NotFound', { err:  err });
          })
        
        
        
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
        <View style={styles.container}>
            <ActivityIndicator
            animating={this.state.animating}
            style={styles.spinner}
            color="#f44336"
            size="large"
            />
            <TouchableHighlight style={styles.button}><Text style={styles.buttonText}>Back</Text></TouchableHighlight>
            <ListView
              dataSource={this.state.dataSource}
              enableEmptySections={true}
              renderRow={(data) => <Row food={data} navigator={navigate} />}
              renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
            />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    separator: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
    spinner: {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        width: width,
        height: height,
        backgroundColor: 'rgba(0,0,0,0.8)'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: 50,
        backgroundColor: 'rgba(244, 64, 52, 0.87)',
        paddingLeft: 5
    },
    buttonText: {
        fontSize: 20,
        color: 'rgba(0, 0, 0, 0.9)'
    }
});