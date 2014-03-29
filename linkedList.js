var Node = function(val) {
  this.value = val;
  this.next = null;
  this.prev = null;
};

var LinkedList = function() {
  this.head = null;
  this.tail = null;
};

//LPUSH, LPOP, RPUSH, RPOP, contains, remove duplicates, reverse in place, insert @ index
LinkedList.prototype.print = function() {
  var current = this.head;
  while(current) {
    console.log(current.value);
    current = current.next;
  }
};

LinkedList.prototype.LPUSH = function(val) {
  if(!this.head) {
    this.head = new Node(val);
    this.tail = this.head;
    return;
  }
  var temp = this.head;
  this.head = new Node(val);
  temp.prev = this.head;
  this.head.next = temp;
};

LinkedList.prototype.RPUSH = function(val) {
  if(!this.tail) {
    this.head = new Node(val);
    this.tail = this.head;
    return;
  } 
  this.tail.next = new Node(val);
  this.tail.next.prev = this.tail;
  this.tail = this.tail.next;
};

LinkedList.prototype.LPOP = function(val) {
  if(!this.head) {
    return null;
  }
  var temp = this.head;
  if(this.head === this.tail) {
    this.head = null;
    this.tail = null;
  } else {
    this.head = this.head.next;
  }
  return temp.value;
};

LinkedList.prototype.RPOP = function(val) {
  if(!this.tail) {
    return null;
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
};

LinkedList.prototype.contains = function(val) {
  var current = this.head;

  while(current) {
    if(current.value === val) {
      return true;
    }
    current = current.next;
  }
  return false;
};

LinkedList.prototype.removeDuplicates = function() {
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
};

LinkedList.prototype.reverse = function() {
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
};

///////////////////////////////////////
var list = new LinkedList();
list.LPUSH(1);
list.LPUSH(3);
list.LPUSH(2);
list.LPUSH(1);
list.LPUSH(1);
list.RPUSH(4);
list.RPUSH(1);
list.RPUSH(1);
list.print();
// console.log(".........");
// console.log(list.LPOP());
// console.log(list.RPOP());
console.log(".........");
// list.print();
// console.log(list.contains(3));
// console.log(list.head.value, list.tail.value);
// list.reverse();
// console.log(list.head.value, list.tail.value);
list.removeDuplicates();
list.print();