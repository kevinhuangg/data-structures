var Stack = function() {
  this.length = 0;
  this.storage = {};

};

Stack.prototype.size = function() {
  return this.length;
};
Stack.prototype.push = function(val) {
  this.length++;
  this.storage[this.length] = val;
};
Stack.prototype.pop = function() {
  if (this.length) {
    var deleted = this.storage[this.length];
    delete this.storage[this.length];
    this.length--;
    return deleted;
  }
};

var stack = new Stack();


