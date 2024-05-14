const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [T, W] = input[0].split(' ').map(Number);
const treeNum = input.slice(1).map(Number);

const dp = Array.from({ length: T + 1 }, () => new Array(W + 1).fill(0));

for (let time = 1; time <= T; time++) {
  for (let moveCnt = 0; moveCnt <= W; moveCnt++) {
    if (moveCnt === 0) {
      dp[time][moveCnt] =
        dp[time - 1][moveCnt] + (treeNum[time - 1] === 1 ? 1 : 0);
    } else {
      dp[time][moveCnt] =
        Math.max(dp[time - 1][moveCnt], dp[time - 1][moveCnt - 1]) +
        (treeNum[time - 1] === (moveCnt % 2) + 1 ? 1 : 0);
    }
  }
}

console.log(Math.max(...dp[T]));
