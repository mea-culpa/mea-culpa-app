import RNFS from 'react-native-fs';


export function remove() {
  return RNFS.unlink(`${RNFS.DocumentDirectoryPath}/pin`);
}

export function load(name) {
  return RNFS.exists(`${RNFS.DocumentDirectoryPath}/pin`)
    .then(exists => {
      if (!exists) {
        return '';
      }
      return RNFS.readFile(`${RNFS.DocumentDirectoryPath}/pin`, 'utf8');
    });
}

export function write(pin) {
  return RNFS.writeFile(`${RNFS.DocumentDirectoryPath}/pin`, pin, 'utf8');
}
