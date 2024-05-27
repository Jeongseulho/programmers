function solution(n, m, x, y, r, c, k) {
    let [dCnt, lCnt, rCnt, uCnt] = [r - x, y - c, c - y, x - r]
                                        .map((d) => Math.max(0, d));
    const moveCnt = dCnt + lCnt + rCnt + uCnt;
    const remainMove = k - moveCnt;
    if(remainMove < 0 || remainMove % 2 === 1) return 'impossible';
    const row = x + dCnt;
    const remainDown = n - row;
    const remainUDMove = Math.min(remainMove / 2, remainDown);
    const remainLRMove = remainMove / 2 - remainUDMove;
    
    dCnt += remainUDMove;
    uCnt += remainUDMove;
    lCnt += remainLRMove;
    rCnt += remainLRMove;
    
    let ans = '';
    ans += 'd'.repeat(dCnt);
    
    let cj = y
    while (lCnt > 0) {
        if (cj > 1) {
            cj--;
            ans += "l";
        } else {
            ans += "rl";
            rCnt--;
        }
        lCnt--;
    }
    
    ans += 'r'.repeat(rCnt);
    ans += 'u'.repeat(uCnt);
    
    return ans;
}