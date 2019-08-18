const assert = require("assert");

const bubbleSort = array => {
  const len = array.length;
  let noSwaps;
  for (let i = 0; i < len; i++) {
    noSwaps = true;
    for (let j = 0; j < len - i; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return array;
};

const actual = bubbleSort([10, 39, 8, 17, 16, 5, 43, 3, 20, 1]);
const expected = [1, 3, 5, 8, 10, 16, 17, 20, 39, 43];
assert.deepStrictEqual(actual, expected);

// note use of noSwaps for optimisation
// loop ends when there are no more swaps needed, prevents unnecessary looping
