import LivingThing from './LivingThing.js';

export default class Archaea extends LivingThing {
  constructor(name) {
    super(name, true, false, true, true, false);
  }
}