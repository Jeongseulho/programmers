const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i < parseInt(num ** 0.5) + 1; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function solution(n, k) {
    const convertNum = n.toString(k);
    const numList  = convertNum.split('0');
    let cnt = 0;
    numList.forEach((num) => {
        if (num && isPrime(Number(num))) cnt += 1;
    })
    return cnt;
}

