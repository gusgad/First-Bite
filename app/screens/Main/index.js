import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, Alert } from 'react-native';
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

export default class Main extends Component {
  constructor(props) {
      super(props);
      
      this.state = {
          textInputValue: '',
          warning: false,
      }
      
      this.onForward = this.onForward.bind(this);
  }

  onForward() {
      const { navigate } = this.props.navigation;
      if (this.state.textInputValue.length < 1) {
          Alert.alert(
              'Warning',
              'Please, provide one ore more ingredients.',
              [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ],
              { cancelable: true }
            )
      } else {
            navigate('Recipes', { recipe_search:  this.state.textInputValue });
      }
  }
    
  render() {
    const { navigate } = this.props.navigation;
    return (
        <View style={styles.container}>
            <Image style={styles.background} source={require('./background.jpg')} />
            <View style={styles.logoContainer}>
                <Text style={styles.logo}>FirstBite</Text>
                <View style={styles.searchBarContainer}>
                    <Text style={styles.searchBarText}>INGREDIENTS YOU HAVE:</Text>
                    <TextInput onChangeText={(text) => {
                                                textVal = text.split(/[ ,]+/);
                                                this.setState({textInputValue: textVal});
                                                console.log(textVal);
                                            }}
                               style={styles.searchBar} underlineColorAndroid={'#575757'} />
                </View>
            </View>
            <Button title='Find' style={styles.findButton} onPress={this.onForward} color={'#f44336'}></Button>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'space-around',
        paddingTop: 30,
        paddingBottom: 30,
        backgroundColor: '#343131'
    },
    background: {
        flex: 1,
        width: width,
        height: height,
        position: 'absolute'
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    logo: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#f44336',
        textShadowColor: '#575757',
        textShadowOffset: {width: 1, height: 1}
    },
    searchBarContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchBarText: {
        fontSize: 14,
        color: 'white',
        textShadowColor: '#ef5350'
    },
    searchBar: {
        width: 180,
        height: 40,
        fontSize: 18,
        borderRadius: 1,
        backgroundColor: '#f3e5f5',
        borderRadius: 5,
        opacity: 0.5
    },
    findButton: {
        flex: 1,
        color: 'black'
    }
});







