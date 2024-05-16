const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const di = [-1, 1, 0, 0];
const dj = [0, 0, -1, 1];

const checkAdj = (comb) => {
  const newComb = [...comb];
  const needVisit = [newComb.shift()];
  const visited = Array.from({ length: 5 }, () => new Array(5).fill(true));
  for (const [i, j] of newComb) visited[i][j] = false;
  let visitCnt = 1;

  while (needVisit.length) {
    const [ci, cj] = needVisit.pop();
    for (let d = 0; d < 4; d++) {
      const ni = ci + di[d];
      const nj = cj + dj[d];
      if (ni >= 0 && ni < 5 && nj >= 0 && nj < 5 && !visited[ni][nj]) {
        needVisit.push([ni, nj]);
        visitCnt += 1;
        visited[ni][nj] = true;
      }
    }
  }
  return visitCnt === 7;
};

let ans = 0;
const comb = [];

const checkAllCase = (cur, cntY) => {
  if (cntY >= 4) return;
  if (comb.length === 7) {
    if (checkAdj(comb)) ans += 1;
    return;
  }

  for (let k = cur; k < 25; k++) {
    let ci = Math.floor(k / 5);
    let cj = k % 5;
    comb.push([ci, cj]);
    checkAllCase(k + 1, cntY + (input[ci][cj] === 'Y' ? 1 : 0));
    comb.pop();
  }
};

checkAllCase(0, 0);
console.log(ans);
