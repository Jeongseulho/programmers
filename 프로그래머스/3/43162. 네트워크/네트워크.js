function solution(n, computers) {
    const visited = new Array(n).fill(false);
    let netCnt = 0;
    
    const dfs = (node) => {
        visited[node] = true;
        for (let nextNode = 0; nextNode < n; nextNode++) {
            if (computers[node][nextNode] && !visited[nextNode]) dfs(nextNode);
        }
    };
    
    for (let node = 0; node < n; node++) {
        if (!visited[node]) {
            dfs(node);
            netCnt += 1;
        }
    }
    
    return netCnt;
}