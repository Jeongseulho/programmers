const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const N = Number(input);

let cnt = 0;

for (let i = 5; i <= N; i *= 5) {
  const fiveCnt = Math.floor(N / i);
  cnt += fiveCnt;
}

console.log(cnt);
