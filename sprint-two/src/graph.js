

// Instantiate a new graph
var Graph = function() {
  this._graph = {};
  
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(val) {
  this._graph[val] = [];
  //O(1) - constant
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(val) {
  return val in this._graph;
  //O(1) - constant note: cannot find how 'in' is implemented on MDN website
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(val) {
  if (this.contains(val)) { //if our graph has this node
    for (var i = 0; i < this._graph[val].length; i++) {
      this._graph[this._graph[val][i]].splice(this._graph[this._graph[val][i]].indexOf(val), 1);
    }
    delete this._graph[val];
  }
  // O(n) - linear
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this._graph[fromNode].indexOf(toNode) !== -1 && this._graph[toNode].indexOf(fromNode) !== -1;
  // O(n) - linear
};  

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this._graph[fromNode].push(toNode);
  this._graph[toNode].push(fromNode);
  // O(1) - constant
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.hasEdge(fromNode, toNode)) {
    this._graph[fromNode].splice(this._graph[fromNode].indexOf(toNode), 1);
    this._graph[toNode].splice(this._graph[toNode].indexOf(fromNode), 1); 
  }
  // O(n) - linear
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this._graph) {
    cb(parseInt(key));
  }
  //O(n) - linear
};

var graph = new Graph();
/*
 * Complexity: What is the time complexity of the above functions?
 */


