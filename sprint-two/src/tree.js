var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];

  // extend treeMethods into newTree
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var treeNode = new Tree(value);
  this.children.push(treeNode);
  
  //O(1) - constant
};

treeMethods.contains = function(target) {

  var found = false;
  var checkTree = function(node) {
    if (node.value === target) {
      found = true;
    }
    if (node.children && !found) {
        //loop over children array
      for (var i = 0; i < node.children.length; i++) {
        checkTree(node.children[i]);
      }
    }  
  };
  checkTree(this);
  return found;
  //O(n) - linear
};
treeMethods.remove = function(target) {
  if (this.children) {
    for (var i = 0; i < this.children.length; i++) {
      var child = this.children[i]
      if (child.value === target) {
        this.children.splice(i,1);
        return ;
      }
      child.remove(target);
    }
  }
  // O(n) - linear
};






/*
 * Complexity: What is the time complexity of the above functions?
 */
