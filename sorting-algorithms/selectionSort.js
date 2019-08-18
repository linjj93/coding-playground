const assert = require("assert");

const selectionSort = array => {
  const len = array.length;
  for (let i = 0; i < len; i++) {
    let minimum = array[i];
    let swapIndex = i;
    for (let j = i; j < len; j++) {
      if (array[j] < minimum) {
        minimum = array[j];
        swapIndex = j;
      }
    }

    array[swapIndex] = array[i];
    array[i] = minimum;
  }
  return array;
};

const actual = selectionSort([10, 39, 8, 17, 16, 5, 43, 3, 20, 1]);
const expected = [1, 3, 5, 8, 10, 16, 17, 20, 39, 43];
assert.deepStrictEqual(actual, expected);
