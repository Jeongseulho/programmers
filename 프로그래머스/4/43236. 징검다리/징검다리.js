function solution(distance, rocks, n) {
    let minD = 0;
    let maxD = distance;
    rocks = [0, ...rocks.sort((a, b) => a - b), distance];
    
    while (minD <= maxD) {
        const midD = Math.floor((minD + maxD) / 2);
        
        let prev = rocks[0];
        let delCnt = 0;
        for (let i = 1; i < rocks.length; i++) {
            if ((rocks[i] - prev) < midD) delCnt++;
            else prev = rocks[i];
        }
        
        if (delCnt > n) maxD = midD - 1;
        else minD = midD + 1;
    }
    
    return maxD;
}