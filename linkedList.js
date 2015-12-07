/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
  var methods = {};

  methods.getHead = function(){
    if(this.value === undefined) {
      return null;
    }
      return this.value;
  };
  methods.getTail = function(){
    if(this.value === undefined) {
      return null;
    }
    else if(this.value!==null) {
      return this.next;
    }
    return this.value.getTail();
  };
  methods.add = function(){
    this.getTail().next === {
      value: null,
      next: null
    };

  };
  methods.remove = function(){};
  methods.get = function(){};
  methods.insert = function(){};

  return methods;
}

var linkedList = linkedListGenerator();
linkedList.getHead();