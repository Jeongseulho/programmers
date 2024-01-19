function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i < Math.floor(num / 2) + 1 ; i++) {
        if (num % i === 0) return false; 
    }
    return true;
}

function permutation(perm, rests, output, n) {
    if (perm.length === n) {
        return output.push(perm);
    }
    
    rests.forEach((item, idx, arr) => {
        permutation(
        [...perm, item],
        [...rests.slice(0, idx), ...rests.slice(idx + 1)],
        output,
        n,
        );
    })
}


function solution(numbers) {
    let allCase = []
    let cnt = 0;
    for (let i = 1; i < numbers.length + 1; i++) {
        const oneCase = []
        permutation([], numbers.split(''), oneCase, i)
        allCase = [...allCase, ...oneCase]
    }
    
    const numSet = [];
    
    for (const perm of allCase) {
        const num = Number(perm.join(''))
        if (numSet.includes(num)) continue;
        else {
            numSet.push(num);
            if (isPrime(num)) cnt++;
        }
    }
    return cnt;
}