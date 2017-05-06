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
import Examination from "./App/Components/Examination"

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
