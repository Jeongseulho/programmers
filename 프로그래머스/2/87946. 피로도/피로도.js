function solution(life, dungeons) {
    const N = dungeons.length;
    const visited = new Array(N).fill(0);
    let ans = 0;
    
    function dfs(life, cnt) {
        ans = Math.max(ans, cnt);
        
        for (let i = 0; i < N; i++) {
            if (!visited[i] && life >= dungeons[i][0]) {
                visited[i] = 1;
                dfs(life - dungeons[i][1], cnt + 1)
                visited[i] = 0;
            }
        }
    }
    
    dfs(life, 0);
    return ans;
}
