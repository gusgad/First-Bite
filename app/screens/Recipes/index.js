import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ListView } from 'react-native';
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
        fetch('https://jsonplaceholder.typicode.com/posts')
          fetch('https://jsonplaceholder.typicode.com/posts')
          .then((response) => {
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
              renderRow={(rowData) => <Text>{rowData.title}</Text>}
            />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  
});