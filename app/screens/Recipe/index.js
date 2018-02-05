import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity, ScrollView, ListView } from 'react-native';
import { NavigationActions } from 'react-navigation';
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');


export default class Recipes extends Component {
    constructor(props) {
        super(props);
        
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        
        console.log('recipe props', this.props.navigation.state.params.recipe_id)
        this.rId = this.props.navigation.state.params.recipe_id;
        this.state = {
            recipe: '',
            dataSource: ds.cloneWithRows([]),
        }
        
            this.backAction = NavigationActions.back({
            key: null
            });
        
        this.onBack = this.onBack.bind(this);
        console.log(this.rId);
    }
    
    
    componentDidMount() {
        fetch(`http://food2fork.com/api/get?key=1ac1d8dde20033351e584a6e3f85300e&rId=${this.rId}`)
        .then(response => 
            response.json().then(data => {
                console.log('response', data)
                return data;
            })
        )
        .then((data) => {
            this.setState({
                recipe: data.recipe,
                dataSource: this.state.dataSource.cloneWithRows(data.recipe.ingredients)
            })
        })
    }
	
	onBack() {
		this.props.navigation.dispatch(this.backAction);
	}
    
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{this.state.recipe.title}</Text>
                </View>
                <Image source={{uri: this.state.recipe.image_url}} style={styles.photo} />
                <ScrollView style={styles.ingredientsContainer}>
                    <Text style={styles.ingredientsTitle}>Ingredients:</Text>
                    <ListView
                    dataSource={this.state.dataSource}
                    enableEmptySections={true}
                    renderRow={(data) =><Text style={styles.ingredient}>{data}</Text>}
                    renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
                    />
                    <TouchableOpacity style={styles.otherButton} onPress={this.onBack} color={'#f44336'}><Text style={styles.otherButtonText}>Other recipes</Text></TouchableOpacity>
                </ScrollView>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    titleContainer: {
        justifyContent: 'space-around',
        alignItems: 'center',
		padding: 15,
        backgroundColor: '#f44336',
    },
    title: {
        fontSize: 20,
		fontWeight: '500',
		fontFamily: 'Helvetica Neue',
        textAlign: 'center',
        color: '#FFFFFF',
    },
    photo: {
        height: 200,
        borderRadius: 1,
        opacity: 0.8,
        padding: 5,
        marginBottom: 10
    },
    ingredientsContainer: {
            height: 200,
            paddingLeft: 10,
            paddingRight: 10,
            marginBottom: 10
    },
    ingredientsTitle: {
            fontSize: 24,
            fontFamily: 'Helvetica Neue',
            textAlign: 'left',
            marginTop: 15,
            marginBottom: 10,
            color: '#424242'
    },
    ingredient: {
        marginTop: 2,
        marginBottom: 2,
        paddingTop: 12,
        paddingBottom: 12,
        borderRadius: 3,
        fontSize: 16,
        textAlign: 'left',
        textAlignVertical: 'center',
        fontFamily: 'Helvetica Neue',
        color: 'white',
        backgroundColor: 'rgba(244, 64, 52, 0.87)',
        paddingLeft: 5
    },
    separator: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#EEEEEE',
      },
	otherButton: {
		height: 50,
		marginTop: 10,
		marginBottom: 10,
		justifyContent: 'center',
    	alignItems: 'center',
		backgroundColor: '#f44336',
		borderRadius: 1,
		shadowOffset: {width: 5, height: 5},
		shadowColor: '#333333',
		shadowRadius: 5
    },
	otherButtonText: {
		color: '#ffffff',
		fontSize: 17,
		fontWeight: '600',
		fontFamily: 'Helvetica Neue',
    }
});