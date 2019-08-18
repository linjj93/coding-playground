const swap = (queue, parent, child) => {
  const temp = queue[child];
  queue[child] = queue[parent];
  queue[parent] = temp;
};

const getParentIndex = childIndex => {
  return Math.floor((childIndex - 1) / 2);
};

class Node {
  constructor(val) {
    this.val = val;
  }
}

class BinaryMaxHeap {
  constructor() {
    this.priorityQueue = [];
  }

  getFirst() {
    return this.priorityQueue[0];
  }

  heapifyUp(val) {
    const newVal = val;

    if (!this.priorityQueue.length) {
      this.priorityQueue = [val];
      return;
    }

    const newIndex = this.priorityQueue.length;
    let parentIndex = getParentIndex(newIndex);
    let parentVal = this.priorityQueue[parentIndex];
    this.priorityQueue.push(newVal);
    do {
      if (newVal > parentVal) {
        console.log("in do while");

        swap(this.priorityQueue, parentIndex, newIndex);

        parentIndex = getParentIndex(parentIndex);

        parentVal = this.priorityQueue[parentIndex];
      }
    } while (parentIndex > 0);
    if (newVal > parentVal) {
      swap(this.priorityQueue, parentIndex, newIndex);
    }
  }

  heapifyDown() {}
}

module.exports = {
  BinaryMaxHeap
};
