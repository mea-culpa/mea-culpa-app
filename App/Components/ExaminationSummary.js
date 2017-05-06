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
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>*{rowData.name}</Text>}
        />
        <Button
          onPress={() => {}}
          title="Usuń"
          color="#841584"
          accessibilityLabel="Usuń"
        />
      </View>
    );
  }
}
