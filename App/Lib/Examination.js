import RNFS from 'react-native-fs';


export function list() {
  return RNFS.readDir(`${RNFS.DocumentDirectoryPath}/examinations`);
}

export function load(name) {
  return JSON.parse(RNFS.readFile(`${RNFS.DocumentDirectoryPath}/examinations/${name}.json`, 'utf8'));
}

export function write(name, object) {
  return RNFS.writeFile(`${RNFS.DocumentDirectoryPath}/examinations/${name}.json`, JSON.stringify(object), 'utf8');
}

