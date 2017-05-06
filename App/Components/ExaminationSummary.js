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
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      //TODO: this does not render the updated values
      dataSource: ds.cloneWithRows(props.examination.questions.filter((question) => question.sin)),
    };

  }

  render() {
    return (

      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
      }}>
        <Text>{this.props.examination.name}</Text>
        <Text>Twoje grzechy:</Text>
        <Button
          onPress={() => {
            deleteFile(this.props.examination.filename)
            this.props.onExaminationDelete()
          }}
          title="Usuń"
          color="#841584"
          accessibilityLabel="Usuń"
        />
      </View>
    );
  }
}
