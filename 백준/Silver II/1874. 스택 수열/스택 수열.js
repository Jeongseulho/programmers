const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, ...resultArr] = input.map(Number);

let ans = [];
const stack = [];
let curNum = 1;

for (let i = 0; i < N; i++) {
  const targetNum = resultArr[i];

  while (curNum <= targetNum) {
    stack.push(curNum);
    curNum++;
    ans.push('+');
  }

  const stackPop = stack.pop();
  if (stackPop !== targetNum) {
    ans = ['NO'];
    break;
  }
  ans.push('-');
}

console.log(ans.join('\n'));
