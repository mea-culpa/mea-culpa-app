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
  Image
} from 'react-native';

import Login from "./App/Components/Login";
import Home from "./App/Components/Home";

export default class MeaCulpa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
      examination: null
    };
    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handleExaminationChange = this.handleExaminationChange.bind(this);
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
    if (!this.state.logged) {
      return (
        <Login
          pin={this.state.pin}
          onLoginChange={this.handleLoginChange}
        ></Login>
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
