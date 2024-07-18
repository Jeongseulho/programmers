function solution(k, tangerine) {
    const cnt = {};
    for(const size of tangerine) {
        if(size in cnt) cnt[size] += 1;
        else cnt[size] = 1;
    }
    const cnts = Object.values(cnt).sort((a , b) => b - a);
    
    let sellCnt = 0;
    let typeCnt = 0;
    while(typeCnt < cnts.length) {
        sellCnt += cnts[typeCnt];
        if(sellCnt >= k) break;
        typeCnt += 1;
    }
    
    return typeCnt + 1;
}