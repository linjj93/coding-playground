const { BinaryMaxHeap } = require("../Data Structures/Binary-Heap");

describe("Binary Max Heap", () => {
  it("should return root when calling for highest priority", () => {
    const heap = new BinaryMaxHeap();
    heap.heapifyUp(5);
    expect(heap.getFirst()).toBe(5);
  });

  it("should heapify up 10 to be parent of 5", () => {
    const heap = new BinaryMaxHeap();
    heap.heapifyUp(5);
    heap.heapifyUp(10);
    expect(heap.getFirst()).toBe(10);
  });

  it("should heapify up 7 to be parent of 5, but not of 10", () => {
    const heap = new BinaryMaxHeap();
    heap.heapifyUp(5);
    heap.heapifyUp(10);
    heap.heapifyUp(7);
    expect(heap.getFirst()).toBe(10);
  });

  it.only("should heapify up 15 to be parent of 10", () => {
    const heap = new BinaryMaxHeap();
    heap.heapifyUp(5);
    console.log("GOING TO ADD 10");
    heap.heapifyUp(10);
    console.log("GOING TO ADD 7");
    heap.heapifyUp(7);
    console.log("GOING TO ADD 15");
    heap.heapifyUp(15);
    expect(heap.getFirst()).toBe(15);
  });
});
