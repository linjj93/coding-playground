const assert = require("assert");

const moveZeros = array => {
  const i = 0;
  const len = array.length;
  while (i < len) {
    if (array[i] === 0) {
      array.splice(i, 1);
      array.push(0);
      len--;
    } else {
      i++;
    }
  }
  return array;
};

const original = [false, 1, 0, 1, 2, 0, 1, 3, "a"];
const actual = moveZeros(original);
const expected = [false, 1, 1, 2, 1, 3, "a", 0, 0];

assert.deepStrictEqual(actual, expected);
