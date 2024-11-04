function solution(a) {
    let numCnt = {};
    for(const num of a) {
        if(num in numCnt) numCnt[num] += 1;
        else numCnt[num] = 1;
    }
    numCnt = Object.entries(numCnt).sort((a, b) => b[1] - a[1]);
    
    let maxLen = 0;
    for(let [common, cnt] of numCnt) {
        common = Number(common);
        if(maxLen / 2 >= cnt) continue;
        
        let len = 0;
        for(let i = 0; i < a.length - 1; i++) {
            if((a[i] === common || a[i + 1] === common) && a[i] !== a[i + 1]) {
                len += 2;
                i++;
            }
        }
        
        maxLen = Math.max(len, maxLen);
    }
    
    return maxLen;
}