function solution(life, dungeons) {
    const visited = new Array(dungeons.length).fill(false);
    let ans = 0;
    const dfs = (cnt, life) => {
        ans = Math.max(ans, cnt);
        for (let i = 0; i < dungeons.length; i++) {
            const leastLife = dungeons[i][0];
            const spendLife = dungeons[i][1];
            if (!visited[i] && life >= leastLife) {
                visited[i] = true;
                dfs(cnt + 1, life - spendLife);
                visited[i] = false;
            }
        }
    }
    
    dfs(0, life);
    return ans;
}
