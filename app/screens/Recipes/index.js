import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, ListView } from 'react-native';
import {Row} from './Row'
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

let arraynew = [];

export default class Recipes extends Component {
  constructor(props) {
      super(props);
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      
      this.state = {
          dataSource: ds.cloneWithRows([])
      };
  }
  componentDidMount() {
    
          fetch('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=potatoes&limitLicense=false&number=5&ranking=1', {
              headers: {
                'X-Mashape-Key': 'WkJT8eg81hmsh7rTfWojaqxJ83uhp1pT07gjsnLUt7DOAZDKsX',
                  'Accept': 'application/json',
              }
            }).then((response) => {
              return response.json();
          })
          .then((data) => {
              this.setState({
                dataSource: this.state.dataSource.cloneWithRows(data)
              });
              console.log(data);
          })
        
        
        
  }
  render() {
    return (
        <View style={styles.container}>
            <ListView
              dataSource={this.state.dataSource}
              enableEmptySections={true}
              renderRow={(data) => <Row food={data} />}
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
        backgroundColor: '#EEEEEE',
      }
});