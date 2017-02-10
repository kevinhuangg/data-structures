

// Instantiate a new graph
var Graph = function() {
  this._graph = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(val) {
  this._graph.push(val);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(val) {
  for (var i = 0; i < this._graph.length; i++) {
    if (this._graph[i] === val) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(val) {
  var idx = this._graph.indexOf(val);
  this._graph.splice(idx, 1);
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  this.edges.forEach(edge => {
    edge.forEach(ele => {
      if (ele.indexOf(fromNode) !== -1 && ele.indexOf(toNode) !== -1) {
        return true;
      }
    });
  });

  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges.push([fromNode, toNode]);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

var graph = new Graph();
/*
 * Complexity: What is the time complexity of the above functions?
 */


