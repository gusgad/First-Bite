import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, Alert, TouchableOpacity, KeyboardAvoidingView, Animated, Easing } from 'react-native';
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
        <KeyboardAvoidingView style={styles.container} behavior="padding">
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
            <TouchableOpacity title='Find' style={styles.findButton} onPress={this.onForward} color={'#f44336'}><Text style={styles.findButtonText}>FIND</Text></TouchableOpacity>
        </KeyboardAvoidingView>
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
        fontSize: 38,
        fontWeight: 'bold',
		fontFamily: 'HelveticaNeue-BoldItalic',
        color: '#f44336',
		backgroundColor: 'transparent',
    },
    searchBarContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchBarText: {
		marginBottom: 5,
        fontSize: 14,
		fontFamily: 'Helvetica Neue',
        color: 'white',
        textShadowColor: '#ef5350',
		backgroundColor: 'transparent'
    },
    searchBar: {
        width: 180,
        height: 40,
		paddingLeft: 3,
        fontSize: 18,
		fontFamily: 'Helvetica Neue',
		fontWeight: '500',
        borderRadius: 1,
        backgroundColor: '#f3e5f5',
		color: '#333333',
        borderRadius: 5,
        opacity: 0.5
    },
    findButton: {
		height: 50,
		marginBottom: 20,
		justifyContent: 'center',
    	alignItems: 'center',
		backgroundColor: '#f44336',
		borderRadius: 1,
		shadowOffset: {width: 5, height: 5},
		shadowColor: '#333333',
		shadowRadius: 5
    },
	findButtonText: {
		color: '#ffffff',
		fontSize: 17,
		fontWeight: '600',
		fontFamily: 'Helvetica Neue',
    }
});







