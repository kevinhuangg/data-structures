var Queue = function() {
  
  var queue = {};
  queue.length = 0;
  queue._storage = {};

  extend(queue, queueMethods);
  return queue;
};

var extend = function(instance, methods) {
  for (var k in methods) {
    instance[k] = methods[k];
  }
};

var queueMethods = {
  size: function() { 
    return this.length;
  },
  enqueue: function(val) {
    this.length++;
    this._storage[this.length] = val;
  },
  dequeue: function() {
    if (this.length) {
      var deleted = this._storage[1];
      delete this._storage[1];
      for (var i = this.length; i > 1; i--) {
        this._storage[i - 1] = this._storage[i];
      }
      this.length--;
      return deleted;
    }
  }

};


