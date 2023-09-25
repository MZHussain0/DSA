/**
 You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the jth ​bank. Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.
 */

function maximumWealth(accounts) {
  let maxWealth = 0;

  accounts.forEach((account) => {
    let sum = account.reduce((a, b) => a + b);
    if (sum > maxWealth) maxWealth = sum;
  });

  return maxWealth;
}

console.log(
  maximumWealth([
    [1, 2, 3],
    [3, 2, 1],
    [5, 8, 5],
  ])
);

function maxWealth(accounts, customer = 0, wealth = 0) {
  if (customer === accounts.length) return wealth;
  return maxWealth(
    accounts,
    customer + 1,
    Math.max(
      wealth,
      accounts[customer].reduce((a, b) => a + b)
    )
  );
}

console.log(
  maxWealth([
    [1, 2, 3],
    [3, 2, 1],
    [5, 8, 5],
  ])
);
