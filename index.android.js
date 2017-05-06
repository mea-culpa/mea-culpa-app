/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  BackHandler
} from 'react-native';

import Login from "./App/Components/Login";
import Home from "./App/Components/Home";
import Examination from "./App/Components/Examination"
import PinSet from "./App/Components/PinSet"

export default class MeaCulpa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pin: null,
      logged: false,
      examination: null
    };
    this.handlePinChange = this.handlePinChange.bind(this);
    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handleExaminationChange = this.handleExaminationChange.bind(this);

    BackHandler.addEventListener('hardwareBackPress', () => {
      if (this.state.examination) {
        this.setState({
          examination: null
        });
        return true;
      }
      if (this.state.logged) {
        this.setState({
          logged: false
        });
        return true;
      }
      return false;
    });
  }
  handlePinChange(pin) {
    this.setState({
      pin
    });
  }
  handleLoginChange(logged) {
    this.setState({
      logged
    });
  }
  handleExaminationChange(examination) {
    this.setState({
      examination
    });
  }
  render() {
    if (!this.state.pin) {
      return (
        <PinSet
          onPinChange={this.handlePinChange}
        ></PinSet>
      );
    }

    if (!this.state.logged) {
      return (
        <Login
          pinSet={this.state.pin}
          onLoginChange={this.handleLoginChange}
        ></Login>
      );
    }

    if (this.state.examination) {
      return (
        <Examination
          examination={this.state.examination}
          onExaminationChange={this.handleExaminationChange}
        ></Examination>
      );
    }

    return (
      <Home
        onExaminationChange={this.handleExaminationChange}
      ></Home>
    );
  }
}
AppRegistry.registerComponent('MeaCulpa', () => MeaCulpa);
