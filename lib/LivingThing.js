export default class LivingThing {
  constructor(name, uniCellular, trueNucleus, anaerobic, asexual, mobile) {
    this._name = name;
    this._uniCellular = uniCellular;
    this._trueNucleus = trueNucleus;
    this._anaerobic = anaerobic;
    this._asexual = asexual;
    this._mobile = mobile;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get uniCellular() {
    return this._uniCellular;
  }

  set uniCellular(cell) {
    if (typeof (cell) === 'boolean') {
      return this._uniCellular = cell;
    } else {
      throw new TypeError('unicellular must be true or false');
    }
  }

  get multiCellular() {
    return !this._uniCellular;
  }

  set multiCellular(cell) {
    if (typeof (cell) === 'boolean') {
      this._uniCellular = !cell;
    } else {
      throw new TypeError('multicellular must be true or false');
    }
  }
  get eukaryote() {
    return this._trueNucleus;
  }

  set eukaryote(nucleus) {
    if (typeof (nucleus) === 'boolean') {
      this._trueNucleus = nucleus;
    } else {
      throw new TypeError('trueNucleus must be true or false');
    }
  }
  get prokaryote() {
    return !this._trueNucleus;
  }

  set prokaryote(nucleus) {
    if (typeof (nucleus) === 'boolean') {
      this._trueNucleus = !nucleus;
    } else {
      throw new TypeError('trueNucleus must be true or false');
    }
  }
  get anaerobic() {
    return this._anaerobic;
  }

  set anaerobic(noOxygen) {
    if (typeof (noOxygen) === 'boolean') {
      this._anaerobic = noOxygen;
    } else {
      throw new TypeError('anaerobic must be true or false');
    }
  }
  get aerobic() {
    return !this._anaerobic;
  }

  set aerobic(noOxygen) {
    if (typeof (noOxygen) === 'boolean') {
      this._anaerobic = !noOxygen;
    } else {
      throw new TypeError('anaerobic must be true or false');
    }
  }
  get asexual() {
    return this._asexual;
  }

  set asexual(noSex) {
    if (typeof (noSex) === 'boolean') {
      this._asexual = noSex;
    } else {
      throw new TypeError('asexual must be true or false');
    }
  }
  get sexual() {
    return !this._asexual;
  }

  set sexual(noSex) {
    if (typeof (noSex) === 'boolean') {
      this._asexual = !noSex;
    } else {
      throw new TypeError('asexual must be true or false');
    }
  }
  get mobile() {
    return this._mobile;
  }

  set mobile(mobility) {
    if (typeof (mobility) === 'boolean') {
      this._mobile = mobility;
    } else {
      throw new TypeError('mobile must be true or false');
    }
  }
  get immobile() {
    return !this._mobile;
  }

  set immobile(mobility) {
    if (typeof (mobility) === 'boolean') {
      this._mobile = !mobility;
    } else {
      throw new TypeError('mobile must be true or false');
    }
  }
} // end LivingThings class

