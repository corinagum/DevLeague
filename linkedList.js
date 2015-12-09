/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
  var methods = {};
  var head = null;
  var tail = null;
  var length = 0;

 function createNode (value) {
    return {
      value: value,
      next: null
    };
  }

  methods.getHead = function(){
    return head;
  };

  methods.getTail = function(){
    return tail;
  };

  methods.add = function(value){
    var newNode = createNode(value);

    if(tail === null) {
      head = newNode;
    } else {
      tail.next = newNode;
    }
      tail = newNode;
      length++;
      return newNode; // do we need to fix this?
  };

  methods.get = function(index){
    var currentNode = this.getHead();
    var i = 0;

    while (i < index) {
      if(currentNode === tail) {
        return false;
      }
      currentNode = currentNode.next;
      i++;
    }
    return currentNode;
  };

  methods.insert = function(value, index){

    var currentNode = this.get(index);
    var previousNode = this.get(index - 1);
    var tempNode = createNode(value);


    if( index >= length || index < 0) {
      return false;
    } else if(index === 0) {
      // tempNode = createNode(value);
      tempNode.next = currentNode;
      head = tempNode;

    } else {
      // tempNode = createNode(value);
      previousNode.next = tempNode;
      tempNode.next = currentNode;
      }
    length++;
  };
  methods.remove = function(number){
    var currentNode = head;
    var nextNode = currentNode.next;
    var i = 0;

    if(number === 0) {
      head = currentNode.next;
    }
    while (i !== number) {
      if(i === number - 1) {
        currentNode.next = nextNode.next;
        if(nextNode.next === null) {
          tail = currentNode;
        }
        return false;
      } else {
        currentNode = nextNode;
        if (currentNode.next === null) {
          return false;
        }
        nextNode = nextNode.next;
      i++;
      length --;
      }
    }

  };
  return methods;
}

// Joe's version https://gist.github.com/JoeKarlsson1/5e42597528876e40e208