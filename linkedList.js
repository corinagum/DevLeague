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
      return tail; // do we need to fix this?
    }
  };

  methods.get = function(number){
    var i = 0;
    var currentNode = head;
    if(i === number) {
      return currentNode;
    } else {
      while(i !== number) {
        if(currentNode.next === null && i!== number) {
          return false;
        } else { currentNode = currentNode.next;
          i++;
        }
      }
      return currentNode;
    }
  };
  methods.insert = function(){};
  methods.remove = function(number) {
    var i = 0;
    var currentNode = head;
    if(i === number) {
      head.value = currentNode.next;
    } else{
      while(i !== number) {
        if(currentNode.next === null && i!== number) {
          return false;
      } else {
        currentNode = currentNode.next;
      }
    }
  }
  return methods;
};

