const fs = require('fs');
const board = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((arr) => arr.split(' ').map(Number));

const di = [1, 1, 0, -1];
const dj = [0, 1, 1, 1];

let winner = 0;
let ansI,
  ansJ = 0;

const isInRange = (i, j) => i >= 0 && i < 19 && j >= 0 && j < 19;

const check = (si, sj, sColor) => {
  for (let d = 0; d < 4; d++) {
    let [ni, nj] = [si + di[d], sj + dj[d]];
    let cnt = 1;

    while (isInRange(ni, nj) && board[ni][nj] === sColor) {
      cnt += 1;
      ni += di[d];
      nj += dj[d];
    }

    if (cnt === 5) {
      let prevSi = si - di[d];
      let prevSj = sj - dj[d];
      if (isInRange(prevSi, prevSj) && board[prevSi][prevSj] === sColor) break;
      winner = sColor;
      ansI = si;
      ansJ = sj;
      return;
    }
  }
};

for (let si = 0; si < 19; si++) {
  for (let sj = 0; sj < 19; sj++) {
    if (board[si][sj] !== 0) check(si, sj, board[si][sj]);
  }
}

console.log(winner);
if (winner !== 0) console.log(ansI + 1, ansJ + 1);