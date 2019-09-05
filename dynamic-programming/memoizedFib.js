const assert = require("assert");

function memoizedFib(num, memo = []) {
  if (memo[num] != undefined) return memo[num];
  if (num == 0) {
    memo[0] = 0;
  } else if (num == 1) {
    memo[1] = 1;
  } else {
    memo[num] = memoizedFib(num - 2, memo) + memoizedFib(num - 1, memo);
  }

  return memo[num];
}

assert.deepEqual(memoizedFib(0), 0);
assert.deepEqual(memoizedFib(1), 1);
assert.deepEqual(memoizedFib(2), 1);
assert.deepEqual(memoizedFib(3), 2);
assert.deepEqual(memoizedFib(4), 3);
assert.deepEqual(memoizedFib(5), 5);
assert.deepEqual(memoizedFib(6), 8);
