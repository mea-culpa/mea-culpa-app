import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView,
  Button,
  ToastAndroid
} from 'react-native';
import ExaminationQuestion from './ExaminationQuestion'
import {list as examinationTemplateList} from '../Lib/ExaminationTemplate'
import {list as examinationList} from '../Lib/Examination'

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

    const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      examinationTemplateList: dataSource.cloneWithRows([]),
      examinationList: dataSource.cloneWithRows([]),
      view: ''
    };
    examinationTemplateList().then((data) => {
      this.setState({examinationTemplateList: dataSource.cloneWithRows(data)})
    })
    examinationList().then((data) => {
      this.setState({examinationList: dataSource.cloneWithRows((data))})
    })
  }

  setStateHandler(data) {
    this.setState({examination: data})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Wybierz rachunek sumienia</Text>
        <Text style={styles.new}>Nowy</Text>

        <ListView
          dataSource={this.state.examinationTemplateList}
          renderRow={(rowData) => (
            <Button
              onPress={(state)=>{
                this.props.onExaminationChange(rowData)
              }}
              title={rowData.name}
              accessibilityLabel="Learn more about this purple button"
            />
            )}
          />

        <Text style={styles.previous}>Poprzednie</Text>

        <ListView
          dataSource={this.state.examinationList}
          renderRow={(rowData) => (
            <Button
              onPress={(state)=>{
                this.props.onExaminationChange(rowData)
              }}
              title={rowData.name}
              accessibilityLabel="Learn more about this purple button"
            />
            )}
          />
      </View>
    )
  }
}
