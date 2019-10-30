import Eukaryota from './Eukaryota.js';

export default class Animal extends Eukaryota {
  constructor(name, symmetry) {
    super(name, false, false, true, true);
    this._symmetry = symmetry;
  }
   get symmetry() {
     return this._symmetry;
   }
   set symmetry(isTrue) {
     if (typeof (isTrue) === 'string') {
       this._symmetry = isTrue;
     } else {
       throw new TypeError ('Symmetry must a string');
     }

   }// end symmetry
}
