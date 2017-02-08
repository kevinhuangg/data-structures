var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var newestIdx = 1;
  var oldestIdx = 1;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[newestIdx] = value;
    newestIdx++;
  };

  someInstance.dequeue = function() {
    if (newestIdx !== oldestIdx) {
      var deleted = storage[oldestIdx];
      delete storage[oldestIdx];
      oldestIdx++;
      return deleted;
    }
  };

  someInstance.size = function() {
    return newestIdx - oldestIdx;
  };

  return someInstance;
};
