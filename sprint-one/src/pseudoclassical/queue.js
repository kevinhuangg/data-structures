var Queue = function() {
  this.length = 0;
  this.storage = {};

};

Queue.prototype.size = function() {
  return this.length;
};
Queue.prototype.enqueue = function(val) {
  this.length++;
  this.storage[this.length] = val;
};
Queue.prototype.dequeue = function() {
  if (this.length) {
    var deleted = this.storage[1];
    for (var i = this.length; i > 1; i--) {
      this.storage[this.length - 1] = this.storage[this.length]; 
    }
    this.length--;
    return deleted;
  }
};

var queue = new Queue();



