import React, { Component } from 'react';
import {
  View,
  KeyboardAvoidingView,
  Text,
  Button,
  Image,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native';



export default class ExaminationQuestion extends Component {
  constructor(props) {
    super(props);
    this.updateNotes = this.updateNotes.bind(this);
    this.setSin = this.setSin.bind(this);
  }

  updateNotes(text) {
    let newQuestion = this.props.question;
    newQuestion.notes = text
    this.props.onQuestionUpdate(this.key, newQuestion);
  };

  setSin(sin) {
    let newQuestion = this.props.question;
    newQuestion.sin = sin;
    console.log("setSin", this.props.question, newQuestion, this.key);
    this.props.onQuestionUpdate(this.key, newQuestion);
  };

  render() {
    return (
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}>
          <Text style={styles.category}><Text style={{fontFamily: 'Augusta', fontSize: 35}}>#</Text> {this.props.question.category}</Text>
          <Text style={styles.description}>{this.props.question.description}</Text>
          <Text style={styles.question}>{this.props.question.name}</Text>

          <View style={{
            flex: 0,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
            <TouchableWithoutFeedback underlayColor="white" onPress={() => this.setSin(true)}>
              <Image source={require('./../Img/devil.png')}
                style={this.props.question.sin === true ? [styles.icon, styles.iconActive] : styles.icon} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback underlayColor="white" onPress={() => this.setSin(false)}>
              <Image source={require('./../Img/angel.png')}
                style={this.props.question.sin === false ? [styles.icon, styles.iconActive] : styles.icon} />
            </TouchableWithoutFeedback>
          </View>

          <KeyboardAvoidingView
            behavior='padding'>
            <TextInput
              defaultValue={this.props.question.notes}
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
    marginTop: 5,
    marginBottom: 1,
    color: 'black'
  },
  description: {
    textAlign: 'center',
    fontStyle: 'italic',
    margin: 1,
    padding: 0
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
