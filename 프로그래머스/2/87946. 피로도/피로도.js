function solution(life, dungeons) {
    const N = dungeons.length
    const visited = Array(N).fill(false);
    let maxVisit = 0;
    
    const dfs = (curLife, cnt) => {
        maxVisit = Math.max(cnt, maxVisit);
        for(let i = 0; i < N; i++) {
            const [least, spend] = dungeons[i];
            if(curLife >= least && !visited[i]) {
                visited[i] = true;
                dfs(curLife - spend, cnt + 1);
                visited[i] = false;
            }
        }
    }
    
    dfs(life, 0);
    return maxVisit;
}
