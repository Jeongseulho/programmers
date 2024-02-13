const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, K] = input[0].split(' ');
input.shift();
const maxLine = Math.max(...input);

const isPossible = (lines, len, K) => {
  const caseK = lines.reduce((acc, cur) => Math.floor(cur / len) + acc, 0);
  if (caseK >= K) return true;
  return false;
};

let left = 0;
let right = maxLine;
while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  if (isPossible(input.map(Number), mid, K)) left = mid + 1;
  else right = mid - 1;
}

console.log(right);
