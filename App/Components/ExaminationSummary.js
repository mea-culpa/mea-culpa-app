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
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const dataSource = ds.cloneWithRows(this.props.examination.questions.filter((question) => question.sin));
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
      }}>
        <Text>{this.props.examination.name}</Text>
        <Text>Twoje grzechy:</Text>
        <ListView
          dataSource={dataSource}
          renderRow={(rowData) => <Text>*{rowData.name}</Text>}
        />
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
