import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, ListView } from 'react-native';
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');


export default class Recipes extends Component {
  constructor(props) {
      super(props);
      this.rId = this.props.data.recipe_id;
      this.state = {
          recipe: '',
          ingredients: []
      }
      console.log(this.rId);
  }
    
    
  componentDidMount() {
        fetch(`http://food2fork.com/api/get?key=1ac1d8dde20033351e584a6e3f85300e&rId=${this.rId}`)
        .then(response => 
            response.json().then(data => {
                return data;
            })
        )
        .then((data) => {
            //console.log(data.recipe)
            this.setState({
                recipe: data.recipe,
                ingredients: data.recipe.ingredients
            })
        })
  }
    
  render() {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{this.state.recipe.title}</Text>
            </View>
            <Image source={{uri: this.state.recipe.image_url}} style={styles.photo} />
            <View style={styles.ingredientsContainer}>
                <Text style={styles.ingredientsTitle}>Ingredients</Text>
                    {
                        this.state.ingredients.map((ingredient, index) => {
                            return (<Text key={index} style={styles.ingredient}>{ingredient}</Text>);
                        })
                    }
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
    },
    titleContainer: {
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#6c2289'
    },
    title: {
        fontSize: 20,
        fontFamily: 'sans-serif-thin',
        textAlign: 'center',
        color: 'white',
        marginBottom: 5,
        paddingLeft: 10,
        paddingRight: 10
    },
    photo: {
        height: 200,
        borderRadius: 1,
        opacity: 0.8,
        padding: 5,
        marginBottom: 10
  },
  ingredientsContainer: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10
  },
  ingredientsTitle: {
        fontSize: 24,
        fontFamily: 'sans-serif-thin',
        textAlign: 'center',
        marginBottom: 10,
        color: '#424242'
  },
  ingredient: {
       backgroundColor: '#424242',
       borderRadius: 5,
       margin: 2,
       color: 'white',
       fontFamily: 'monospace'
  },
    separator: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#EEEEEE',
      }
});