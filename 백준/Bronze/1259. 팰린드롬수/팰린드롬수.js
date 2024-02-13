const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input.forEach((ele) => {
  if (ele === '0') return;
  const reversed = ele.split('').reverse().join('');
  if (Number(ele) === Number(reversed)) console.log('yes');
  else console.log('no');
});
