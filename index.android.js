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
      logged: false
    };
    this.handleLoginChange = this.handleLoginChange.bind(this);
  }
  handleLoginChange(logged) {
    this.setState({
      logged
    });
  }
  render() {
    if (this.state.logged) {
      return (
        <Home></Home>
      );
    }
    return (
      <Login
        pin={this.state.pin}
        onLoginChange={this.handleLoginChange}
      ></Login>
    );
  }
}
AppRegistry.registerComponent('MeaCulpa', () => MeaCulpa);
