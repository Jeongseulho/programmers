const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, ...scores] = input;
scores = scores[0].split(' ').map(Number);
const maxScore = Math.max(...scores);
scores = scores.map((num) => (num / maxScore) * 100);

const avg = scores.reduce((acc, cur) => acc + cur, 0) / N;
console.log(avg);
