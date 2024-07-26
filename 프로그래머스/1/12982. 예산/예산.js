function solution(d, budget) {
    d.sort((a, b) => a - b);
    
    let cnt = 0;
    for(const money of d) {
        budget -= money;
        if(budget < 0) return cnt;
        cnt += 1;
    }
    
    return d.length;
}