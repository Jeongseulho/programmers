function solution(a) {
    const leftMin = Array(a.length).fill(0);
    const rightMin = Array(a.length).fill(0);
    leftMin[0] = a[0];
    rightMin[a.length - 1] = a[a.length - 1];
    for(let i = 1; i < a.length; i++) {
        leftMin[i] = Math.min(leftMin[i - 1], a[i]);
    }
    for(let i = a.length - 2; i > -1; i--) {
        rightMin[i] = Math.min(rightMin[i + 1], a[i]);
    }
    
    let cnt = 2;
    for(let i = 1; i < a.length - 1; i++) {
        const num = a[i];
        const leftMinNum = leftMin[i - 1];
        const rightMinNum = rightMin[i + 1];
        if(!(leftMinNum < num && rightMinNum < num)) cnt += 1;
    }
    
    return cnt;
}