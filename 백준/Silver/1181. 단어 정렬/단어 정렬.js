const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift();
const removeDuplicate = [...new Set(input)];

removeDuplicate.sort((a, b) => {
  if (a.length > b.length) return 1;
  if (a.length < b.length) return -1;
});

removeDuplicate.sort((a, b) => {
  if (a.length === b.length) return a.localeCompare(b);
});

removeDuplicate.forEach((ele) => {
  console.log(ele);
});
