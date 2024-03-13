function solution (n, stations, w) {
    let answer = 0;
    const coverage = w * 2 + 1;
    
    const lastCoverIdx = stations.reduce((acc, cur) => {
        const notCoverEndIdx = cur - w - 1;
        const notCoverStartIdx = acc;
        const notCoverCnt = notCoverEndIdx - notCoverStartIdx;
        answer += notCoverCnt > 0 ? Math.floor((notCoverCnt - 1) / coverage) + 1 : 0;
        return cur + w;
    }, 0);
    
    const remainNotCoverCnt = n - lastCoverIdx;
  
    if(remainNotCoverCnt > 0) answer += Math.floor((remainNotCoverCnt - 1) / coverage) + 1;
    
    return answer;
}