const assert = require("assert");

const insertionSort = array => {
  const len = array.length;
  for (let i = 0; i < len; i++) {
    for (j = i + 1; j > 0; j--) {
      if (array[j] < array[j - 1]) {
        const temp = array[j - 1];
        array[j - 1] = array[j];
        array[j] = temp;
      } else {
        break;
      }
    }
  }

  return array;
};

const actual = insertionSort([10, 39, 8, 17, 16, 5, 43, 3, 20, 1]);
const expected = [1, 3, 5, 8, 10, 16, 17, 20, 39, 43];
assert.deepStrictEqual(actual, expected);
