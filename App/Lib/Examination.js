import RNFS from 'react-native-fs';
import {ToastAndroid} from 'react-native'

export function list() {
  // RNFS.unlink(`${RNFS.DocumentDirectoryPath}/examinations`)
  RNFS.mkdir(`${RNFS.DocumentDirectoryPath}/examinations`);
//   RNFS.writeFile(`${RNFS.DocumentDirectoryPath}/examinations/futer${new Date().getTime()}.json`, JSON.stringify({
//       "name": "Rachnek dla doroslych",
//       "description": "",
//       "categories": [{
//           "name": "Wobec Boga",
//           "description": "Bo gdzie jest twój skarb, tam będzie i serce twoje (Mt 6,21)",
//           "questions": [{
//               "question": "Czy wierzysz w Jego Miłosierdzie?",
//               "notes": "text",
//               "sin": false,
//               "last_update": "2017-05-06T09:59:06+00:00"
//           }, {
//               "question": "Jaki jest twój obraz Boga? Czy bardziej się go boisz niż kochasz?",
//               "notes": "text",
//               "sin": false,
//               "last_update": "2017-05-06T09:59:06+00:00"
//           }]
//       }]
//   }
// ), 'utf8')
  return RNFS.readDir(`${RNFS.DocumentDirectoryPath}/examinations`)
    .then(files =>
      Promise.all(files.map(
        file => (RNFS.readFile(file.path, 'utf8'))
      ))
      .then(stringDataArray => (stringDataArray.map(
        stringData => JSON.parse(stringData)
      )))
    );
}

export function load(name) {
  return JSON.parse(RNFS.readFile(`${RNFS.DocumentDirectoryPath}/examinations/${name}.json`, 'utf8'));
}

export function write(name, object) {
  return RNFS.writeFile(`${RNFS.DocumentDirectoryPath}/examinations/${name}.json`, JSON.stringify(object), 'utf8');
}

export function deleteFile(name) {
  return RNFS.unlink(`${RNFS.DocumentDirectoryPath}/examinations/${name}.json`)
}
