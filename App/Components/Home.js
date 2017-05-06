import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView,
  Button,
  ToastAndroid,
  TouchableHighlight
} from 'react-native';
import moment from 'moment';

import ExaminationQuestion from './ExaminationQuestion'
import {list as examinationTemplateList} from '../Lib/ExaminationTemplate'
import {list as examinationList} from '../Lib/Examination'
import {clone} from '../Lib/Cloner'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'black',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  new: {
    fontSize: 18,
    textAlign: 'left',
    color: '#333333',
    marginBottom: 5,
  },
  previous: {
    fontSize: 18,
    textAlign: 'left',
    color: '#333333',
    marginBottom: 5,
    marginTop: 5,
  },
  list_element: {
    // backgroundColor: 'black',
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 2,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    borderColor: 'black'
  }
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
      console.log("futer", data);
      this.setState({examinationList: dataSource.cloneWithRows((data))})

    })
  }

  setStateHandler(data) {
    this.setState({examination: data})
  }

  handleDate(filename){
    return moment(parseInt(filename.split("_")[1].split(".")[0])).format("hh:mm DD-MM-YY")
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Wybierz rachunek sumienia</Text>
        <Text style={styles.new}>Nowy</Text>

        <ListView
          dataSource={this.state.examinationTemplateList}
          renderRow={(rowData) => (
            <TouchableHighlight onPress={() => this.props.onExaminationChange(clone(rowData))}>
              <Text style={styles.list_element}>{rowData.name}</Text>
            </TouchableHighlight>
            )}
          />

        <Text style={styles.previous}>Poprzednie</Text>

        <ListView
          dataSource={this.state.examinationList}
          renderRow={(rowData) => (
            <TouchableHighlight
              onPress={()=>{
                this.props.onExaminationChange(rowData)
              }}>
              <Text style={styles.list_element}>{`${rowData.name} - ${(rowData.filename)?this.handleDate(rowData.filename):''}`}</Text>
            </TouchableHighlight>
            )}
          />
        <Button
          title="Zresetuj PIN"
          onPress={this.props.onPinReset}
        ></Button>
      </View>
    )
  }
}
