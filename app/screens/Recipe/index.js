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
            //console.log('recipe', this.state.recipe)
        })
  }
    
  render() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{this.state.recipe.title}</Text>
            <Image source={{uri: this.state.recipe.image_url}} style={styles.photo} />
            <View>
                    {
                        this.state.ingredients.map((ingredient, index) => {
                            return (<Text key={index}>{ingredient}</Text>);
                        })
                    }
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontFamily: 'sans-serif-thin',
        textAlign: 'center',
        textDecorationLine: 'underline',
        color: '#1C1C1C',
        marginBottom: 5
    },
    photo: {
        height: 200,
        borderRadius: 1,
        opacity: 0.8,
        padding: 5,
        marginBottom: 15
  },
    separator: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#EEEEEE',
      }
});