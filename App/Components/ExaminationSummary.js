import React, { Component } from 'react';
import {
  ListView,
  View,
  Text,
  Button,
  Image,
  TextInput,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

import {deleteFile} from '../Lib/Examination';


export default class ExaminationSummary extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>

        <Text style={styles.title}>{this.props.examination.name}</Text>
        <Text style={{margin: 10, textAlign: 'center', fontFamily: 'Augusta', fontSize: 40, color: 'black'}}>
          # {this.props.examination.questions.filter((question) => question.sin).length}
        </Text>
        <Button
          onPress={() => {
            deleteFile(this.props.examination.filename)
            this.props.onExaminationDelete()
          }}
          color='black'
          title="Usuń ten rachunek"
          accessibilityLabel="Usuń"
        />



      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
  },
});
