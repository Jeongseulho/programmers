function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < parseInt(n ** 0.5) + 1; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function convert(n, base) {
  const ans = [];
  while (n > 0) {
    ans.push(n % base);
    n = parseInt(n / base);
  }
  return ans.reverse().join('');
}

function solution(n, k) {
  let cnt = 0;
  const k진법의수 = convert(n, k);
  const nums = k진법의수.split('0');
  for (const num of nums) {
    if (num && isPrime(parseInt(num))) {
      cnt += 1;
    }
  }

  return cnt;
}

