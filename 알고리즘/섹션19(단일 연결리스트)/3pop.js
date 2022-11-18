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

  // 새로운 tail을 찾기위한 메소드 예시
  traverse() {
    var current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}

var list = new SinglyLinkedList();
console.log(list.push("HELLO"));
console.log(list.push("GoodBye"));
