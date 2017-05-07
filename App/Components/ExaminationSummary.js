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
import Sound from 'react-native-sound'


import {deleteFile} from '../Lib/Examination';


export default class ExaminationSummary extends Component {
  constructor(props) {
    super(props);
  }

  knocking() {
    const knockSound = new Sound("knocking.mp3", (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      console.log('duration in seconds: ' + knockSound.getDuration() + 'number of channels: ' + knockSound.getNumberOfChannels());
    })
    console.log(require('../data/knocking.mp3'),knockSound.isLoaded())
    knockSound.play((success) => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
  }

  render() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const dataSource = ds.cloneWithRows(this.props.examination.questions.filter((question) => question.sin));
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
            this.knocking()
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
