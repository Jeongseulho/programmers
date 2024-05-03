function solution(n, info) {
    let ans;
    let maxScore = 0;
    
    const getScoreDiff = (Linfo) => {
        let Lscore = 0;
        let Ascore = 0;
        for(let i = 0; i < 11; i++) {
            if(Linfo[i] === info[i] && info[i] === 0) continue;
            if(Linfo[i] > info[i]) Lscore += (10 - i);
            else Ascore += (10 - i);
        }
        return Lscore - Ascore;
    }
    
    const dfs = (idx, left, curInfo) => {
        if(left === 0) {
            const score = getScoreDiff(curInfo)
            if(score > maxScore) {
                ans = curInfo;
                maxScore = score;
            }
            return;
        }
        
        if(idx === -1) return;
        
        for(let i = left; i > -1; i--) {
            const nextInfo = [...curInfo];
            nextInfo[idx] += i;
            dfs(idx - 1, left - i, nextInfo);
        }
    }
    
    dfs(10, n, new Array(11).fill(0));
    
    return ans || [-1]
}