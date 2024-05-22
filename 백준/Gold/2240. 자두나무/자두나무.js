const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [timeLimit, moveLimit] = input[0].split(' ').map(Number);
const treeNum = input.slice(1).map(Number);
treeNum.unshift(0);

const dp = Array.from({ length: timeLimit + 1 }, () =>
  new Array(moveLimit + 1).fill(0),
);

for (let time = 1; time <= timeLimit; time++) {
  const isGet = treeNum[time] === 1;
  dp[time][0] = dp[time - 1][0] + (isGet ? 1 : 0);

  for (let moveCnt = 1; moveCnt <= moveLimit; moveCnt++) {
    const isGetFirstTree = moveCnt % 2 === 0 && treeNum[time] === 1;
    const isGetSecondTree = moveCnt % 2 === 1 && treeNum[time] === 2;
    const isGet = isGetFirstTree || isGetSecondTree;

    const stopCase = dp[time - 1][moveCnt] + (isGet ? 1 : 0);
    const moveCase = dp[time - 1][moveCnt - 1] + (isGet ? 1 : 0);

    dp[time][moveCnt] = Math.max(stopCase, moveCase);
  }
}

console.log(Math.max(...dp[timeLimit]));
