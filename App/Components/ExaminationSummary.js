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


const Footer = (props) => (
  <View>
    <Button
      onPress={() => {
        deleteFile(props.examination.filename)
        props.onExaminationDelete()
      }}
      title="Usuń"
      color="#841584"
      accessibilityLabel="Usuń"
      style={{margin: 20, width: 50}}
    />
  </View>
);

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
        justifyContent: 'center',
      }}>
        <Text style={styles.title}>{this.props.examination.name}</Text>
        <Text style={{marginLeft: 10,}}>Twoje grzechy:</Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text style={{marginLeft: 10,}}>{`\u2022 ${rowData.name}`}</Text>}
          renderFooter={() =>
            <Footer examination={this.props.examination} onExaminationDelete={this.props.onExaminationDelete}/>
          }
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
