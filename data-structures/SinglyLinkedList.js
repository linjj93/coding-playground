class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

module.exports = class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  getFirst() {
    return this.head.val;
  }

  getLast() {
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode.val;
  }

  get(position) {
    if (position === 1) {
      return this.getFirst();
    }
    let i = 1;
    let currentNode = this.head;
    while (i < position) {
      currentNode = currentNode.next;
      i++;
    }
    return currentNode.val;
  }

  set() {}

  shift() {
    const deletedHead = this.head;
    this.head = this.head.next;
    return deletedHead.val;
  }

  unshift(val) {
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    return this.head.val;
  }

  push(val) {
    if (this.head === null) {
      this.head = new Node(val);
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = new Node(val);
    }
    return val;
  }

  pop() {
    let currentNode = this.head;
    while (currentNode.next.next) {
      currentNode = currentNode.next;
    }
    const deletedTail = currentNode.next;
    currentNode.next = null;
    return deletedTail.val;
  }
};
