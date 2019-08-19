const SinglyLinkedList = require("../data-structures/SinglyLinkedList");

describe("singly linked list", () => {
  let list;
  beforeEach(() => {
    list = new SinglyLinkedList();
  });
  it("should return newly shifted value", () => {
    list.unshift("First Node");
    expect(list.getFirst()).toBe("First Node");
  });

  it("should return 2nd value when get(2) is called", () => {
    list.unshift("First Value");
    list.unshift("Second Value");
    expect(list.get(2)).toBe("First Value");
  });

  it("should return head when shifted", () => {
    list.unshift("First Value");
    list.unshift("Second Value");
    const oldHead = list.shift();
    expect(oldHead).toBe("Second Value");
    expect(list.getFirst()).toBe("First Value");
  });

  it("should return last value when pushed", () => {
    list.push(1);
    const result = list.push(2);

    expect(result).toBe(2);

    expect(list.get(2)).toBe(2);
  });

  it("should return the last node in the list when popped", () => {
    list.push(1);
    list.push(2);
    list.push(3);
    expect(list.getLast()).toBe(3);
    const popped = list.pop();
    expect(popped).toBe(3);
    expect(list.getLast()).toBe(2);
  });
});
