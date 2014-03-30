var LinkedList = require('./linkedList');

// Queue implementation in prototypal instantiation using LinkedList
var makeQueue = function() {
  var instance = Object.create(queueMethods);
  instance.storage = new LinkedList();
  instance._size = 0;

  return instance;
};

var queueMethods = {
  enqueue: function(val) {
    this.storage.RPUSH(val);
    this._size++;
  },

  dequeue: function() {
    this._size = this._size && --this._size;
    return this.storage.LPOP();
  },

  size: function() {
    return this._size;
  }
};

module.exports = makeQueue;