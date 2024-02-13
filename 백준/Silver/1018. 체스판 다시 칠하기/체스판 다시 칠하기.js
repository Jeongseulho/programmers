const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [size, ...board] = input;
const [N, M] = size.split(' ').map(Number);
board = board.map((el) => el.split(''));
const ans = [];

for (let si = 0; si < N - 7; si++) {
  for (let sj = 0; sj < M - 7; sj++) {
    let whiteStartCnt = 0;
    let blackStartCnt = 0;
    for (let ci = si; ci < si + 8; ci++) {
      for (let cj = sj; cj < sj + 8; cj++) {
        if ((ci + cj) % 2 === 0) {
          if (board[ci][cj] === 'W') blackStartCnt++;
          if (board[ci][cj] === 'B') whiteStartCnt++;
        } else {
          if (board[ci][cj] === 'W') whiteStartCnt++;
          if (board[ci][cj] === 'B') blackStartCnt++;
        }
      }
    }
    ans.push(whiteStartCnt);
    ans.push(blackStartCnt);
  }
}

console.log(Math.min(...ans));
