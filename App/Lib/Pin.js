import RNFS from 'react-native-fs';


export function isSet() {
  return RNFS.exists(`${RNFS.DocumentDirectoryPath}/pin.json`);
}

