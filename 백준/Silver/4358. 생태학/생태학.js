const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let N = input.length;
const treeCnt = new Map();
for (const tree of input) {
  if (treeCnt.has(tree)) {
    treeCnt.set(tree, treeCnt.get(tree) + 1);
  } else {
    treeCnt.set(tree, 1);
  }
}

for (const tree of [...treeCnt.keys()].sort()) {
  console.log(`${tree} ${((treeCnt.get(tree) / N) * 100).toFixed(4)}`);
}
