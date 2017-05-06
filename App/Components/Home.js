import React, { Component } from 'react';
import { View, Text, StyleSheet, ListView, Button } from 'react-native';
import ExaminationQuestion from './ExaminationQuestion'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  new: {
    textAlign: 'left',
    color: '#333333',
    marginBottom: 5,
  },
  previous: {
    textAlign: 'left',
    color: '#333333',
    marginBottom: 5,
  },
});



export default class Home extends Component {
  constructor(props) {
    super(props);
    const row = require( '../jsons/example.json');

    const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: dataSource.cloneWithRows([row, row, row]),
      view: ''
    };
  }

  setStateHandler(data) {
    this.setState({view: data})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Wybierz rachunek sumienia</Text>
        <Text style={styles.new}>Nowy</Text>

        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Button
            onPress={(state)=>{
              this.setStateHandler("ExaminationQuestion")
            }}
            title={rowData.name}
            accessibilityLabel="Learn more about this purple button"
          />}
        />

        <Text style={styles.previous}>Poprzednie</Text>

        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData.name}</Text>}
        />
      </View>
    )
  }
}
