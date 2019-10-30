import Animal from './Animal.js';

export default class Cnidarian extends Animal {
  constructor(name, body) {
    super(name, 'bilateral');
    this._body = body;
  }
   get body() {
     return this._body;
   }
   set body(isTrue) {
     if (typeof (isTrue) === 'string') {
       this._body = isTrue;
     } else {
       throw new TypeError ('Body must a string');
     }

   }// end body
}