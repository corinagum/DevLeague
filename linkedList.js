/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
  var methods = {};
  var head = null;
  var tail = null;

  methods.getHead = function(){
    return head;
  };

  methods.getTail = function(){
    return tail;
  };

  methods.add = function(value){
    var newNode = {
      value: value,
      next: null
    };

    if(head === null && tail === null) {
      head = newNode;
      tail = newNode;
      return newNode;
    } else {
      tail.next = newNode;
      tail = newNode;
    }

    // if(value === undefined) {
    //   this.value = value;
    //   this.next = null;
    //   head = this.value;
    //   tail = this.value;
    //   return this;
    // }
    // else if(this.value===null) {
    //   this.value = Value;
    //   this.next = null;
    //   return this;
    // }
    // else {
    //   this.next.add();
    // }
  };

  methods.remove = function(){};
  methods.get = function(){};
  methods.insert = function(){};

  return methods;
}

var linkedList = linkedListGenerator();
