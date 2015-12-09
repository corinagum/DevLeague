import Eukaryota from './Eukaryota.js';

export default class Plant extends Eukaryota {
  constructor(name) {
    super(name, false, true, false, false);
  }
}
