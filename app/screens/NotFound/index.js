import React, { Component } from 'react';
var ProgressBar = require('ProgressBarAndroid');
import { StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');


export default class NotFound extends Component {
    constructor(props) {
        super(props);
      
        this.onBack = this.onBack.bind(this);
    }

    onBack() {
        this.props.navigator.pull({
        	title: 'Main'
      	});
    }

  render() {
    return (
		<TouchableHighlight onPress={this.onBack} style={styles.container} underlayColor={'white'} activeOpacity={0.8} >
			<Image style={styles.photo} source={require('./404.jpg')}>
				<View style={styles.backdropView}>
					<Text style={styles.labelHeading}>Ooops!</Text>
					<Text style={styles.label}>We have no recipes for your ingredients. Please TAP the screen to search once more!</Text>
				</View>
			</Image>
		</TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
    container: {
		flex: 1,
		height: height,
		width: width,
		backgroundColor: '#f3e5f5'
	},
	labelHeading: {
		fontSize: 24,
		color: 'white',
		marginTop: 3,
		fontWeight: 'bold',
		textShadowColor: '#F6F6F6',
		textShadowOffset: {width: 0.5, height: 0.5},
		textAlign: 'center',
		fontFamily: 'monospace'
	},
	label: {
		fontSize: 17,
		color: 'white',
		marginTop: 3,
		fontWeight: 'bold',
		textShadowColor: '#F6F6F6',
		textShadowOffset: {width: 0.5, height: 0.5},
		textAlign: 'center',
		fontFamily: 'monospace'
	},
	photo: {
		height: height,
		width: width,
		borderRadius: 1,
		opacity: 0.8,
	},
	backdropView: {
		flex: 1,
		backgroundColor: 'rgba(0,0,0,0.5)',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 5
	}
});