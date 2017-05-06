import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
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
          <Button
            title="Sin"
            color="black"
          />
          <Button
            title="Win"
            color="azure"
          />
        </View>

        <TextInput
          placeholder="Dodaj notatkę"
          onChangeText={(text) => this.setState({text})}
          multiline={true}
          numberOfLines={10}
          style={{margin: 10}}
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
    color: '#333333',
    fontStyle: 'italic',
    margin: 10,
  },
  question: {
    textAlign: 'justify',
    margin: 10,
  },
});
