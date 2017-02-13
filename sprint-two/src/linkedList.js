var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null; 

  list.addToTail = function(value) {
    var node = new Node(value);
    if (this.head === null) { //case for 1 node
      this.head = node;
    } else { //case for 2 nodes
      this.head.next = node;
    }
    this.tail = node;
    
    //O(1) - constant
  };

  list.removeHead = function() {
    var oldHead = this.head;
    if (this.head !== null) {
      this.head = oldHead.next;
    }
    return oldHead.value;
    
    //O(1) - constant
  };

  list.contains = function(target, node) {
    var node = node || this.head;
    if (node.value === target) { //if current node contains target value return true
      return true;
    }
    if (node.next === null) { //if we reach end of the list and nothing
      return false;           //has been found return false
    }
    return this.contains(target, node.next);
    //O(n) - linear
  };
  
  list.find = function(value) {
    var currentNode = this.head
    while (currentNode.value !== value){
      currentNode = currentNode.next;
    }
    return currentNode
  }
  
  list.insert = function(value, prevValue) {
    var newNode = new Node(value);
    var oldNode = this.find(prevValue);
    newNode.next = oldNode.next;
    oldNode.next = newNode;
  }


  return list;
};

var Node = function(value) {
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
