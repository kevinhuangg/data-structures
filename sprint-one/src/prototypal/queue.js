var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = Object.create(queueMethods);
  queue.length = 0;
  queue.storage = {};

  return queue;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.length;
};
queueMethods.enqueue = function(val) {
  this.length++;
  this.storage[this.length] = val; 
};
queueMethods.dequeue = function() {
  if (this.length) { //breaks if we add the length second
    var deleted = this.storage[1];
    delete this.storage[1];
    for (var i = this.length; i > 1; i--) {
      this.storage[this.length - 1] = this.storage[this.length];
    }
    this.length--;
    return deleted;
  }
};


