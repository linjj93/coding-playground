const flatten = require("../katas/flatten");

describe("flatten", () => {
  it("should flatten 1-dimensional array", () => {
    expect(flatten([10, 30, 50])).toEqual([10, 30, 50]);
  });

  it("should flatten 2-dimensional array", () => {
    expect(flatten([1, 2, 3, [4, 5], 6, [7, 8]])).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ]);
  });

  it("should flatten 3-dimensional array", () => {
    expect(flatten([[100, [20, 3]], [24, 5, 6], [7, [58, 9, 10]], 11])).toEqual(
      [100, 20, 3, 24, 5, 6, 7, 58, 9, 10, 11]
    );
  });

  it("should return empty array when empty array is inputed", () => {
    expect(flatten([])).toEqual([]);
  });
});
