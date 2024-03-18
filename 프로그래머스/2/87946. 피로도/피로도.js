function solution(life, dungeons) {
    const dungeonsCnt = dungeons.length
    const visited = new Array(dungeonsCnt).fill(false);
    let ans = 0;
    
    const dfs = (curLife, visitCnt) => {
        ans = Math.max(ans, visitCnt);
        
        for(let i = 0; i < dungeonsCnt; i++) {
            const leastLife = dungeons[i][0];
            const spendLife = dungeons[i][1];
            if(!visited[i] && curLife >= leastLife) {
                visited[i] = true;
                dfs(curLife - spendLife, visitCnt + 1);
                visited[i] = false;
            }
        }
    }
    dfs(life, 0);
    return ans;
}
