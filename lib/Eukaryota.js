import LivingThing from './LivingThing.js';

export default class Eukaryota extends LivingThing {
  constructor(name, uniCellular, asexual, mobile, heterotroph) {
    super(name, uniCellular, true, false, asexual, mobile);
    this._heterotroph = heterotroph;
  }

   get heterotroph() {
     return this._heterotroph;
   }
   set heterotroph(isTrue) {
     if (typeof (isTrue) === 'boolean') {
       this._heterotroph = isTrue;
     } else {
       throw new TypeError ('Heterotroph must be true or false');
     }

   }// end heterotroph

   get autotroph() {
     return !this._heterotroph;
   }
   set autotroph(isTrue) {
     if (typeof (isTrue) === 'boolean') {
       this._heterotroph = !isTrue;
     } else {
       throw new TypeError ('Heterotroph must be true or false');
     }

   }// end autotroph
}

//heterotroph: cannot fix carbon and uses organic carbon for growth
// opposite is autotroph