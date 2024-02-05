function solution(n, times) {
    let minTime = 1;
    let maxTime = Math.max(...times) * n;
    
    while (minTime < maxTime) {
        const midTime = Math.floor((minTime + maxTime) / 2);
        const peopleCnt = times.reduce((acc, spentTime) => acc + Math.floor(midTime / spentTime), 0);
              
        if (peopleCnt >= n) maxTime = midTime;
        else minTime = midTime + 1;
    }
    
    return minTime;
}