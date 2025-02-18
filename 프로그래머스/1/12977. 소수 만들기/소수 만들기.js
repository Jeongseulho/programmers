function solution(nums) {
    let cnt = 0;
    const numsComb = [];
    const comb = (combination, rests) => {
        if(combination.length === 3) {
            return numsComb.push(combination.reduce((acc, cur) => acc + cur, 0));
        }
        rests.forEach((rest, idx) => {
            comb([...combination, rest], rests.slice(idx + 1));
        })
    }
    const isPrime = (num) => {
        for(let i = 2; i < num; i++) {
            if(num % i === 0) return false;
        }
        return true;
    }
    
    comb([], nums);
    for(const num of numsComb) {
        if(isPrime(num)) cnt += 1;
    }
    
    return cnt;
}