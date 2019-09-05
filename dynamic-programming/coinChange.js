const denominations = [1, 2, 5];

function coinChange(coins, total, memo = []) {
  const len = coins.length;
  const table = [[]];
  for (let i = 0; i <= total; i++) {
    table[0][i] = 0;
  }

  for (let j = 1; j <= len; j++) {
    const newRow = new Array(total + 1).fill(0);
    newRow[0] = 1;
    table.push(newRow);
  }

  for (let i = 1; i < len + 1; i++) {
    for (let j = 1; j < total + 1; j++) {
      const zeroIfCoinIsBiggerThanValue =
        j - coins[i - 1] < 0 ? 0 : table[i][j - coins[i - 1]];
      table[i][j] = table[i - 1][j] + zeroIfCoinIsBiggerThanValue;
    }
  }

  return table[len][total];
}

module.exports = coinChange;
