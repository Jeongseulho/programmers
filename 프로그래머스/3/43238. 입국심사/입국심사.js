function solution(n, times) {
    let minTime = 1;
    let maxTime = Math.max(...times) * n;
    
    while(minTime <= maxTime) {
        let time = Math.floor((minTime + maxTime) / 2);
        const passPeopleCnt = times.reduce((acc, cur) => acc + Math.floor(time / cur), 0);
        
        if (n <= passPeopleCnt) maxTime = time - 1;
        else minTime = time + 1;
    }
    
    return minTime;
}