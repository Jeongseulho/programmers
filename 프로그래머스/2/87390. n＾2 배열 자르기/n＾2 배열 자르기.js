function solution(n, left, right) {
    const arr = [];
    for(let i = left; i <= right; i++) {
        const row = Math.floor(i / n);
        const col = i % n;
        arr.push(Math.max(row, col) + 1);
    }
    
    return arr;
}