const assert = require("assert");

const flatten = array => {
  const result = [];
  array.forEach(element => {
    if (Array.isArray(element)) {
      result.push(...flatten(element));
    } else {
      result.push(element);
    }
  });
  return result;
};

const original = [1, [2,3], [4, [5, 6]], 7, [8], [[]]]
const actual = flatten(original)
const expected = [1,2,3,4,5,6,7,8];

assert.deepStrictEqual(actual, expected)




// module.exports = flatten;
