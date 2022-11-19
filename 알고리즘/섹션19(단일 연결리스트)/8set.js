class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

var first = new Node("Hi");
first.next = new Node("There");
first.next.next = new Node("how");
first.next.next.next = new Node("are");
first.next.next.next.next = new Node("you");

// 이런식으로 단일 연결리스트를 만들수 있지만 굉장히 비효율적이다.

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(num) {
    if (num < 0 || num >= this.length) return null;
    let count = 0;
    let current = this.head;
    while (count !== num) {
      current = current.next;
      count++;
    }
    return current;
  }
  set(num, val) {
    let setNode = this.get(num);
    if (setNode) {
      setNode.val = val;
      return true;
    }
    return false;
  }
}

var list = new SinglyLinkedList();
console.log(list.push("HELLO"));
console.log(list.push("GoodBye"));

// 주어진 인덱스를 받은 노드의 val 바꿔주기
