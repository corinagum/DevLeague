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
  methods.remove = function(number){
    var currentNode = head;
    var nextNode = currentNode.next;
    var i = 0;
    var previousNode  = currentNode;

    if(number === 0) {
      head = currentNode.next;
    }
    // else if (nextNode === tail) {
    //   tail = currentNode;
    // }
    while (i !== number) {
      if(i === number - 1) {
        currentNode.next = nextNode.next;
        console.log(nextNode, nextNode.next);
        if(nextNode.next === null) {
          tail = currentNode;
        }
        return false;
      // } else if(nextNode === null) {
      //   tail = nextNode;
      } else {

        currentNode = nextNode;
        nextNode = nextNode.next;
      i++;
      }
    }

  };
  return methods;
}

// 4 remove scenarios: 1 = head; 1 = tail, in the middle, and if it can't find smth