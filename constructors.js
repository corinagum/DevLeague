
function Spell(name, cost, description){
  this.name = name;
  this.cost = cost;
  this.description = description;
  this.getDetails = function() {
    return (this.name + ', ' + this.cost + ', ' + this.description);
  };
}

DamageSpell.prototype = Object.create(Spell.prototype);
function DamageSpell(name, cost, damage, description) {
  Spell.call(this, name, cost, description);
  this.damage = damage;
}

function Spellcaster(name, health, mana){
  this.name = name;
  this.health = health;
  this.mana = mana;
  this.isAlive = true;

  this.inflictDamage = function(damage) {
    this.health -= damage;
    if(this.health <= 0) {
      this.health = 0;
      this.isAlive = false;
    }
  };

  this.spendMana = function(cost) {
    if(this.mana >= cost) {
      this.mana -= cost;
      return true;
    } else {
      return false;
    }
  };

  this.invoke = function(spell, target) {
    if(spell instanceof DamageSpell) {
      if (target instanceof Spellcaster) {
        if(this.spendMana(spell.cost)) {
          target.inflictDamage(spell.damage);
          return true;
        } else {
          return false;
        }
        return true;
      }
      return false;
    } else {
    if(spell instanceof Spell) {
      if(this.spendMana(spell.cost)) {
        return true;
      } else {
        return false;
      }
    }
      return false;
    }
  };



  /**
   * @method invoke
   *
   * Allows the spellcaster to cast spells.
   * The first parameter should either be a `Spell` or `DamageSpell`.
   * If it is a `DamageSpell`, the second parameter should be a `Spellcaster`.
   * The function should return `false` if the above conditions are not satisfied.
   *
   * You should use `instanceof` to check for these conditions.
   *
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
   *
   * Next check if the spellcaster has enough mana to cast the spell.
   * If it can cast a spell, it should lose mana  equal to the spell's cost.
   * If there is not enough mana, return `false`.
   *
   * If there is enough mana to cast the spell, return `true`.
   * In addition, if it is a `DamageSpell` reduce the target's health by the spell's damage value.
   *
   * Use functions you've previously created: (`inflictDamage`, `spendMana`)
   * to help you with this.
   *
   * @param  {(Spell|DamageSpell)} spell  The spell to be cast.
   * @param  {Spellcaster} target         The spell target to be inflicted.
   * @return {boolean}                    Whether the spell was successfully cast.
   */

 }