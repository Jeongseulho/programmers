function solution(life, dungeons) {
    const visited = Array(dungeons.length).fill(false);
    let maxCnt = 0;
    const dfs = (cnt, life) => {
        maxCnt = Math.max(maxCnt, cnt);
        for(let i = 0; i < dungeons.length; i++) {
            const leastLife = dungeons[i][0];
            const spendLife = dungeons[i][1];
            if(!visited[i] && life >= leastLife) {
                visited[i] = true;
                dfs(cnt + 1, life - spendLife);
                visited[i] = false;
            }
        }
    }
    
    dfs(0, life);
    return maxCnt;
}
