//  console.log('worked');
import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static load() {
    const data = read();
    return data
      .then((response) => {
        const saving = json(response);
        return saving;
      }).catch((error) => {
        console.log(error);
      });
  }
}
