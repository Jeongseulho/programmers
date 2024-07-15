const fs = require('fs');
const [n, input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const inputArr = input.trim().split(' ').map(Number);

const dp = Array(Number(n)).fill(1);

for (let i = 1; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (inputArr[j] < inputArr[i]) dp[i] = Math.max(dp[i], dp[j] + 1);
  }
}

console.log(Math.max(...dp));
