var BinarySearchTree = function(value) {
  //create tree obj
  var tree = Object.create(BSTmethods);
  //properties: val, left, right
  tree.value = value;
  tree.left = null;
  tree.right = null;

  return tree;
};

var BSTmethods = {

  insert: function(val) {
    
    var newNode = BinarySearchTree(val);
    
    var searchTree = function(tree) {
      if (val < tree.value) {
        if (!tree.left) {
          tree.left = newNode;
          return;
        } else {
          searchTree(tree.left);
        }
      }
      if (val > tree.value) {
        if (!tree.right) {
          tree.right = newNode;
          return;
        } else {
          searchTree(tree.right);
        }
      }
    };
    searchTree(this);
    //O(log n) - logarithmic
  },

  contains: function(val) { //function: accepts a value and returns a boolean 
                          //reflecting whether or not the value is contained in the tree
                          //val will be a number
    // declear a variable called flag and set to false;
    var flag = false;
    // create a function called checkTree that takes an argument of tree
    var checkTree = function(tree) {
      // if val is less than tree.value
      if (val < tree.value) {
        // if tree.left exists and val is equal to tree.value
        if (tree.left && val === tree.left.value) {
          flag = true;
          return;
        }
        // if tree.left exists and val is not equal to tree.value
        if (tree.left && val !== tree.left.value) {
          checkTree(tree.left);
        }
        // if tree.left doesnot exist
        if (!tree.left) {
          return;      
        }
      }
      // if val is geater than tree.value
      if (val > tree.value) {   
        // if tree.right exists and val is equal to tree.value
        if (tree.right && val === tree.right.value) {
          flag = true;
          return;
        }
        // if tree.right exists and val is not equal to tree.value
        if (tree.right && val !== tree.right.value) {
          checkTree(tree.right);
        }
        // if tree.right doesnot exist
        if (!tree.right) {
          return;    
        }
      }
    };
    checkTree(this);
    return flag;
    //O(log n) - logarithmic

  },

  depthFirstLog: function(cb) { //accepts a callback and executes it on every value contained in the tree
    
    var checkChildren = function(tree) {
      if (tree) {
        cb(tree.value);
      }
      if (tree.left) {
        checkChildren(tree.left);
      }
      if (tree.right) {
        checkChildren(tree.right);
      }

    };

    checkChildren(this);
  }
  //O(n) - linear
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
