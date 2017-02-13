

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[index] === undefined) { //if theres nothing at that index
    this._storage[index] = [];//add a bucket
  }
  this._storage[index].push([k, v]);

  if (this._storage[index][0][0] === k) { //checks for repeate keys and replaces v
    this._storage[index][0][1] = v;
  } else if (this._storage[index][1][0] === k) {
    this._storage[index][1][1] = v;
  }
  //O(1) - constant
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[index][0] && this._storage[index][0][0] === k) {
    return this._storage[index][0][1];
  }
  if (this._storage[index][0] && this._storage[index][1][0] === k) {
    return this._storage[index][1][1];
  }
  //O(1) - constant
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage[index] = this._storage[index].filter(function(val) {
    return val[0] !== k;
  });
  //O(n) - linear
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


