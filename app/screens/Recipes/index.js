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
      
      this.recipe_search = this.props.data.recipe_search;
      this.state = {
          dataSource: ds.cloneWithRows([])
      };
      
      console.log(this.recipe_search)
  }
    
    
  componentDidMount() {
    
          fetch(`http://food2fork.com/api/search?key=1ac1d8dde20033351e584a6e3f85300e&q=shredded%20${this.recipe_search}`).then((response) => {
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
            <ListView
              dataSource={this.state.dataSource}
              enableEmptySections={true}
              renderRow={(data) => <Row food={data} navigator={this.props.navigator} />}
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