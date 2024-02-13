const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin').toString().trim());

let num = 666;
let cnt = 0;
while (true) {
  if (String(num).includes('666')) cnt++;
  if (cnt === input) {
    console.log(num);
    break;
  }
  num++;
}
