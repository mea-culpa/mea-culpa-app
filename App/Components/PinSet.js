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
  load, write
} from "../Lib/Pin";

export default class PinSet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pin_1: '',
      pin_2: ''
    };
    this.handlePin1TextInputChange = this.handlePin1TextInputChange.bind(this);
    this.handlePin2TextInputChange = this.handlePin2TextInputChange.bind(this);
    load()
    .then(pin => {
      this.props.onPinChange(pin);
    });
  }
  handlePin1TextInputChange(text) {
    this.setState({
      pin_1: text
    });
  }
  handlePin2TextInputChange(text) {
    this.setState({
      pin_2: text
    });

    if (this.state.pin_1 === text) {
      write(this.state.pin_1)
        .then(() => {
          this.props.onPinChange(this.state.pin_1);
        })
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./../Img/mea-culp-logo-1024.png')} style={{width: 200, height: 200}}/>
        <Text>Przed pierwszym użyciem ustaw swój PIN:</Text>
        <TextInput
          autoFocus={true}
          keyboardType="numeric"
          style={{width: 100, height: 40, textAlign: "center"/*, borderBottomColor: 'black', borderBottomWidth: 1*/}}
          value={this.state.pin_1}
          onChangeText={this.handlePin1TextInputChange}
          placeholder="PIN"
          secureTextEntry={true}
          returnKeyType="next"
          onSubmitEditing={(event) => {
            this.refs.SecondInput.focus();
          }}
        />
        <TextInput
          ref='SecondInput'
          keyboardType="numeric"
          style={{width: 100, height: 40, textAlign: "center"/*, borderBottomColor: 'black', borderBottomWidth: 1*/}}
          value={this.state.pin_2}
          onChangeText={this.handlePin2TextInputChange}
          placeholder="POTWIERDŹ"
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
