function solution(d, budget) {
    d.sort((a, b) => a - b);
    let cnt = 0;
    for(const req of d) {
        budget -= req;
        if(budget < 0) break;
        else cnt += 1;
    }
    
    return cnt;
}