// Linked List implementation in Pseudoclasical Instantiation

var Node = function(val) {
  this.value = val;
  this.next = null;
  this.prev = null;
};

var LinkedList = function() {
  this.head = null;
  this.tail = null;
};

LinkedList.prototype = {
  print: function() {
    var current = this.head;
    while(current) {
      console.log(current.value);
      current = current.next;
    }
  },

  LPUSH: function(val) {
    if(!this.head) {
      this.head = new Node(val);
      this.tail = this.head;
      return;
    }
    var temp = this.head;
    this.head = new Node(val);
    temp.prev = this.head;
    this.head.next = temp;
  },

  RPUSH: function(val) {
    if(!this.tail) {
      this.head = new Node(val);
      this.tail = this.head;
      return;
    } 
    this.tail.next = new Node(val);
    this.tail.next.prev = this.tail;
    this.tail = this.tail.next;
  },

  LPOP: function(val) {
    if(!this.head) {
      return undefined;
    }
    var temp = this.head;
    if(this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    return temp.value;
  },

  RPOP: function(val) {
    if(!this.tail) {
      return undefined;
    }
    var temp = this.tail;

    if(this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    return temp.value;
  },

  contains: function(val) {
    var current = this.head;

    while(current) {
      if(current.value === val) {
        return true;
      }
      current = current.next;
    }
    return false;
  },

  removeDuplicates: function() {
    var values = {};

    var current = this.head;

    while(current) {
      if(!values[current.value]) {
        values[current.value] = true;
      } else {
        current.prev.next = current.next;
        if(current.next) {
          current.next.prev = current.prev;
        }
      }
      current = current.next;
    }
  },

  reverse: function() {
    var current = this.head;

    while(current) {
      var next = current.next;
      current.next = current.prev;
      current.prev = next;
      current = next;
    }
    var temp = this.tail;
    this.tail = this.head;
    this.head = temp;
  }
};

// Export LinkedList
module.exports = LinkedList;
