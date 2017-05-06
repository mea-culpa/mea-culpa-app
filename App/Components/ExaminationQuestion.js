import React, { Component } from 'react';
import {
  View,
  KeyboardAvoidingView,
  Text,
  Button,
  Image,
  TextInput,
  StyleSheet,
  TouchableHighlight
} from 'react-native';



export default class ExaminationQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {question: props.question};
    this.updateNotes = this.updateNotes.bind(this);
    this.setSin = this.setSin.bind(this);
  }

  updateNotes(text) {
    this.setState((state) => {
      let newQuestion = state.question;
      newQuestion.notes = text
      this.props.onQuestionUpdate(this.key, newQuestion);
      return {
        question: newQuestion,
      };
    });
  };

  setSin(sin) {
    this.setState((state) => {
      let newQuestion = state.question;
      newQuestion.sin = sin;
      this.props.onQuestionUpdate(this.key, newQuestion);
      return{
        question: newQuestion,
      };
    });
  };

  render() {
    return (
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}>
          <Text style={styles.category}>{this.state.question.category}</Text>
          <Text style={styles.description}>{this.state.question.description}</Text>
          <Text style={styles.question}>{this.state.question.name}</Text>

          <View style={{
            flex: 0,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
            <TouchableHighlight underlayColor="white" onPress={() => this.setSin(true)}>
              <Image source={require('./../Img/devil.png')}
                style={this.state.question.sin ? [styles.icon, styles.iconActive] : styles.icon} />
            </TouchableHighlight>
            <TouchableHighlight underlayColor="white" onPress={() => this.setSin(false)}>
              <Image source={require('./../Img/angel.png')}
                style={this.state.question.sin ? styles.icon : [styles.icon, styles.iconActive]} />
            </TouchableHighlight>
          </View>

          <KeyboardAvoidingView
            behavior='padding'>
            <TextInput
              defaultValue={this.state.question.notes}
              onChangeText={(text) => this.updateNotes(text)}
              multiline={true}
              placeholder="Miejsce na twoje notatki..."
              numberOfLines={5}
              style={{
                textAlignVertical: 'top',
                margin: 10,
                marginBottom: 30
              }}
              underlineColorAndroid="transparent"
            />

          </KeyboardAvoidingView>

        </View>
    );
  }
}


const styles = StyleSheet.create({
  category: {
    fontSize: 25,
    textAlign: 'center',
    margin: 5
  },
  description: {
    textAlign: 'center',
    fontStyle: 'italic',
    margin: 5
  },
  question: {
    textAlign: 'justify',
    color: '#333333',
    margin: 10,
  },
  icon: {
    width: 60,
    height: 60,
    opacity: 0.1
  },
  iconActive: {
    opacity: 1
  }
});
