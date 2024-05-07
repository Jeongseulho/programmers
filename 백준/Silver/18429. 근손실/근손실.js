const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, K] = input[0].split(' ').map(Number);
const weights = input[1].split(' ').map(Number);

const allCase = [];
const permutation = (perm, rests) => {
  if (perm.length === N) {
    allCase.push([...perm]);
    return;
  }
  rests.forEach((ele, idx) => {
    permutation(
      [...perm, ele],
      [...rests.slice(0, idx), ...rests.slice(idx + 1)],
    );
  });
};

permutation([], weights);

let ans = 0;
for (const oneCase of allCase) {
  let curWeight = 500;
  let valid = true;
  for (const weight of oneCase) {
    curWeight -= K;
    curWeight += weight;
    if (curWeight < 500) {
      valid = false;
      break;
    }
  }
  if (valid) ans += 1;
}

console.log(ans);
