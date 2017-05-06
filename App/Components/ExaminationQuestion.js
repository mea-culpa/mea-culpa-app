import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';


export default class ExaminationQuestion extends Component {
  render() {
    let category = {
      name : "Wobec Boga",
      description : "Bo gdzie jest twój skarb, tam będzie i serce twoje (Mt 6,21)"
    };
    let question = {
      name: "Czy wierzysz w Jego Miłosierdzie?",
      notes: "text",
      sin: false,
    };
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
      }}>
        <Text style={styles.category}>{category.name}</Text>
        <Text style={styles.description}>{category.description}</Text>
        <Text style={styles.question}>{question.name}</Text>

        <View style={{
          flex: 0,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
          <Image source={require('./../Img/devil.png')} style={styles.icon} />
          <Image source={require('./../Img/angel.png')} style={styles.icon} />
        </View>

        <TextInput
          placeholder="Dodaj notatkę"
          onChangeText={(text) => this.setState({text})}
          multiline={true}
          numberOfLines={10}
          style={{
            margin: 10,
            borderWidth: 0.5,
            borderColor: '#0f0f0f',
          }}
        />

      </View>
    );
  }
}


const styles = StyleSheet.create({
  category: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
  },
  description: {
    textAlign: 'center',
    fontStyle: 'italic',
    margin: 10,
  },
  question: {
    textAlign: 'justify',
    color: '#333333',
    margin: 10,
  },
  icon: {
    width: 60,
    height: 60,
  }
});
