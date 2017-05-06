import RNFS from 'react-native-fs';


export function isSet() {
  return RNFS.exists(`${RNFS.DocumentDirectoryPath}/pin`);
}

export function load(name) {
  return RNFS.readFile(`${RNFS.DocumentDirectoryPath}/pin`, 'utf8');
}

export function write(pin) {
  return RNFS.writeFile(`${RNFS.DocumentDirectoryPath}/pin`, pin, 'utf8');
}
