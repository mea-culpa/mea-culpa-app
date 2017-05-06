import RNFS from 'react-native-fs';
import {ToastAndroid} from 'react-native'

export function list() {
  // RNFS.unlink(`${RNFS.DocumentDirectoryPath}/examinations`)
  return RNFS.mkdir(`${RNFS.DocumentDirectoryPath}/examinations`)
    .then(() => RNFS.readDir(`${RNFS.DocumentDirectoryPath}/examinations`))
    .then(files =>
      Promise.all(files.map(
        file => (RNFS.readFile(file.path, 'utf8'))
      ))
      .then(stringDataArray => (stringDataArray.map(
        stringData => JSON.parse(stringData)
      )))
    );
}

export function write(name, object) {
  return RNFS.writeFile(`${RNFS.DocumentDirectoryPath}/examinations/${name}.json`, JSON.stringify(object), 'utf8');
}

export function deleteFile(name) {
  console.log("Deleting file", name);
  return RNFS.unlink(`${RNFS.DocumentDirectoryPath}/examinations/${name}.json`)
}
