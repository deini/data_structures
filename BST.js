var queue = require('./queue');

var Tree = function(val) {
  this.value = val;
  this.left = null;
  this.right = null;
};

Tree.prototype = {

  add: function(val) {
    var current = this;

    while(current) {
      if(val < current.value) {
        if(current.left) {
          current = current.left;
        } else {
          current.left = new Tree(val);
          return;
        }
      } else if(val > current.value) {
        if(current.right) {
          current = current.right;
        } else {
          current.right = new Tree(val);
          return;
        }
      } else { // Ignore if item already exists
        return;
      }
    }
  },

  contains: function(target) {
    var current = this;

    while(current) {
      if(current.value === target) {
        return true;
      }
      if(target < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  },

  DFtraverse: function(cb) {
    cb(this.value);

    if(this.left) {
      this.left.DFtraverse(cb);
    }
    if(this.right) {
      this.right.DFtraverse(cb);
    }
  },

  BFtraverse: function(cb) {
    var q = queue();
    var current = this;

    do {
      cb(current.value);

      if(current.left) {
        q.enqueue(current.left);
      }
      if(current.right) {
        q.enqueue(current.right);
      }
      current = q.dequeue();
    } while(current);
  }
};
