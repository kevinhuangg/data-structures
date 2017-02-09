var Stack = function() {
  var stack = Object.create(stackMethods);
  stack.length = 0;
  stack.storage = {};

  return stack;
};

var stackMethods = {};
stackMethods.size = function() {
  return this.length;
};
stackMethods.push = function(val) {
  this.length++;
  this.storage[this.length] = val; 
};
stackMethods.pop = function() {
  if (this.length) {
    var deleted = this.storage[this.length];
    delete this.storage[this.length];
    this.length--;
    return deleted;
  }
};


