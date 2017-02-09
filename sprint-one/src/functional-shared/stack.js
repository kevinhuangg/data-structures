var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {};
  stack.length = 0;
  stack._storage = {};

  extend(stack, stackMethods);
  return stack;
};

var extend = function(instance, methods) {
  for (var k in methods) {
    instance[k] = methods[k];
  }
};

var stackMethods = {
  size: function() { 
    return this.length;
  },
  push: function(val) {
    this.length++;
    this._storage[this.length] = val;
  },
  pop: function() {
    if (this.length) {
      var deleted = this._storage[this.length];
      delete this._storage[this.length];
      this.length--;
      return deleted;
    }
  }

};

// stackMethods.size = function() {
//   return 0;
// };




