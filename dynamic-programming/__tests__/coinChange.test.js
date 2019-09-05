const coinChange = require("../coinChange");

describe("coin Change", () => {
  it("should return 0 if there are no coins", () => {
    const result = coinChange([], 2);
    expect(result).toBe(0);
  });

  it("should only return 1 way of changing $0 when there are coins", () => {
    const result = coinChange([1], 0);
    expect(result).toBe(1);
  });

  it("should return 1 way of changing any amount with only a $1 coin", () => {
    const result = coinChange([1], 3);
    expect(result).toBe(1);
    const anotherResult = coinChange([1], 5);
    expect(anotherResult).toBe(1);
  });

  it("should return 2 ways of changing $3 with $1 and $2", () => {
    const result = coinChange([1, 2], 3);
    expect(result).toBe(2);
  });

  it("should return 4 ways of changing $5 with $1, $2, $5", () => {
    const result = coinChange([1, 2, 5], 5);
    expect(result).toBe(4);
  });
});
