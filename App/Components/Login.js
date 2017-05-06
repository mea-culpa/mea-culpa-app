import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput
} from 'react-native';

import {
  list
} from "../Lib/ExaminationTemplate";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pin: '',
      pinSet: false
    };
    this.handlePinTextInputChange = this.handlePinTextInputChange.bind(this);

    list().then(result => {
      console.log(result);
    });
  }
  handlePinTextInputChange(text) {
    this.setState({
      pin: text
    });
    if (text === "1234") {
      this.props.onLoginChange(true);
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./../Img/mea-culp-logo-1024.png')} style={{width: 200, height: 200}}/>
        <TextInput
          keyboardType="numeric"
          style={{width: 100, height: 40, textAlign: "center"/*, borderBottomColor: 'black', borderBottomWidth: 1*/}}
          value={this.state.pin}
          onChangeText={this.handlePinTextInputChange}
          placeholder="PIN"
          secureTextEntry={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
