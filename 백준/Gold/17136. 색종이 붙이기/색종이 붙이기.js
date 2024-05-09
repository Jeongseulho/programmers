const fs = require('fs');
const input = fs
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.trim().split(' ').map(Number));

function findFirstOne(arr) {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (arr[i][j] == 1) {
        return [i, j];
      }
    }
  }
  return [10, 10];
}

let min = 1000;

solve(input, [0, 0, 0, 0, 0, 0]);
if (min == 1000) console.log(-1);
else console.log(min);

function solve(arr, paper) {
  const [x, y] = findFirstOne(arr);
  if (x == 10 && y == 10) {
    const cnt = paper.reduce((r, v) => {
      return r + v;
    }, 0);
    min = Math.min(min, cnt);
    return;
  } else {
    const possible = check(x, y, arr);
    for (let size = possible; size >= 1; size--) {
      if (paper[size] < 5) {
        arr = fillZero(arr, x, y, size);
        paper[size]++;
        solve(arr, paper);
        paper[size]--;
        arr = fillOne(arr, x, y, size);
      }
    }
  }
}

function check(x, y, arr) {
  let size = 5;
  while (true) {
    let flag = true;
    for (let i = x; i < x + size; i++) {
      for (let j = y; j < y + size; j++) {
        if (i >= 10 || j >= 10 || arr[i][j] == 0) {
          flag = false;
          break;
        }
      }
      if (!flag) break;
    }
    if (!flag) size--;
    else return size;
  }
}

function fillOne(arr, x, y, size) {
  for (let i = x; i < x + size; i++) {
    for (let j = y; j < y + size; j++) {
      arr[i][j] = 1;
    }
  }
  return arr;
}

function fillZero(arr, x, y, size) {
  for (let i = x; i < x + size; i++) {
    for (let j = y; j < y + size; j++) {
      arr[i][j] = 0;
    }
  }
  return arr;
}
