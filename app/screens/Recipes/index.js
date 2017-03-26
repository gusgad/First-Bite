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
          fetch('https://api.edamam.com/search?q=chicken&app_id=c74b07dd&app_key=91f9d47438a5ae42f845f10dda26eb5c')
          .then((response) => {
              return response.json();
          })
          .then((data) => {
              this.setState({
                dataSource: this.state.dataSource.cloneWithRows(data.hits)
              });
              console.log(data.hits);
          })
        
        
        
  }
  render() {
    return (
        <View style={styles.container}>
            <ListView
              dataSource={this.state.dataSource}
              enableEmptySections={true}
              renderRow={(data) => <Row food={data.recipe} />}
              renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
            />
        </View>
    );
  }
}

const styles = StyleSheet.create({
});