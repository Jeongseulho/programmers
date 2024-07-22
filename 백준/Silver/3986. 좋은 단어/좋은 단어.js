const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = input[0];
const strArr = input.slice(1);

let cnt = 0;
for (const str of strArr) {
  const stack = [];
  for (const s of str) {
    if (stack.length && stack[stack.length - 1] === s) {
      stack.pop();
    } else {
      stack.push(s);
    }
  }
  if (!stack.length) cnt++;
}

console.log(cnt);
