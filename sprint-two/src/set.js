var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = null;
  //O(1) - constant
};

setPrototype.contains = function(item) {
  return item in this._storage;
  //O(1) - constant
};


setPrototype.remove = function(item) {
  delete this._storage[item];
  //O(1) - constant
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
