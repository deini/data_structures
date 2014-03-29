var LinkedList = require('./linkedList');

// Stack implementation in functional instantiation using LinkedList
var makeStack = function() {
  var storage = new LinkedList(); // You can use a normal array too
  var _size = 0;

  var instance = {
    push: function(value) {
      storage.RPUSH(value);
      _size++;
    },

    pop: function() {
      _size = _size && --_size;
      return storage.RPOP(); 
    },

    size: function() {
      return _size;
    }
  };
  return instance;
};
