import React, {Component} from 'react'
import { ListView, Alert, Text, View, TouchableHighlight, Keyboard, Button } from 'react-native'
// import _ from "lodash";

import Swiper from 'react-native-swiper';

import {write} from '../Lib/Examination';

import ExaminationQuestion from "./ExaminationQuestion";
import ExaminationSummary from "./ExaminationSummary";

export default class Examinaton extends Component {
  constructor(props) {
    super(props);
    this.handleQuestionUpdate = this.handleQuestionUpdate.bind(this);
  }

  componentWillMount() {
    if (!this.props.examination.filename) {
      // set the filename
      let filename =  this.props.examination.name + "_" + new Date().getTime();
      console.log("new filename", filename);
      const examination = this.props.examination;
      examination.filename = filename;
      this.props.onExaminationChange(examination);
    }
  }

  handleQuestionUpdate(key, question) {
    const examination = this.props.examination;
    examination.questions[key] = question;
    this.props.onExaminationChange(examination);
  }

  renderQuestions() {
    const questions = this.props.examination.questions;
    const elems = questions.map((question, key) => {
      return (
          <ExaminationQuestion
            key={key}
            question={question}
            onQuestionUpdate={() => { this.handleQuestionUpdate(key, question) }}
          ></ExaminationQuestion>
      );
    });

    elems.push((
        <ExaminationSummary
          key="summary"
          examination={this.props.examination}
          onExaminationDelete={this.props.onExaminationChange}
        ></ExaminationSummary>
    ));
    return elems;
  }

  render() {
    return (
      <Swiper
        ref='swiper'
        loop={false}
        showsButtons={true}
        onTouchStart={Keyboard.dismiss}
        onMomentumScrollEnd={Keyboard.dismiss}
        renderPagination={(index, total) => {
          return (
            <View style={{
              position: 'absolute',
              bottom: 30,
              left: 0,
              right: 0,
              flexDirection: 'column',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'transparent'
            }}>

              <Text style={{
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: 3
              }}>
                {index + 1}/{total}
              </Text>
              <Button
                onPress={() => {
                  this.refs.swiper.scrollBy(total - index);
                }}
                title="Podsumowanie"
                accessibilityLabel="Podsumowanie"
              />
            </View>
          );
        }}
      >
        {this.renderQuestions()}
      </Swiper>
    );
  }
  componentDidUpdate() {
    // write to file
    // Alert.alert("update", JSON.stringify(this.props.examination));
    console.log("Save file", this.props.examination.filename);
    write(this.props.examination.filename, this.props.examination);
  }
}
