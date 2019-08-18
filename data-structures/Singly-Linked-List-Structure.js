class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    console.log(this);
    return this;
  }

  pop() {
    const deletedTail = this.tail;
    if (!this.length) {
      return undefined;
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      console.log("length 1", this);
      return deletedTail;
    }
    let current = this.head;
    while (current.next.next !== null) {
      current = current.next;
    }

    current.next = null;
    this.tail = current;
    this.length--;
    console.log(this);

    return deletedTail;
  }

  shift() {
    if (!this.length) return undefined;
    if (this.length === 1) {
      this.pop();
      return;
    }
    const oldHead = this.head;
    this.head = oldHead.next;
    this.length--;
    console.log(this);
    return oldHead;
  }

  unshift(val) {
    if (!this.length) {
      this.push(val);
      return;
    } else {
      const newNode = new Node(val);
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    console.log(this);

    return this;
  }

  get(index) {
    if (index < 0 || index > this.length - 1) return undefined;
    let counter = 0;
    let currentNode = this.head;
    while (counter < index) {
      currentNode = currentNode.next;
      counter++;
    }
    console.log(currentNode);
    return currentNode;
  }

  set(index, val) {
    if (index < 0 || index > this.length - 1) return undefined;
    const currentNode = this.get(index);
    currentNode.val = val;
    console.log(this);
    return this;
  }
}

const list = new SinglyLinkedList();
list.unshift("World");
list.unshift("Is");
list.push("Doomed");
list.get(2);
list.get(1);
list.get(0);

list.set(2, "not doomed");
