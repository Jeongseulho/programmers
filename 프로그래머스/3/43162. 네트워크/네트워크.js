function solution(n, computers) {
    let visited = [false];
    let answer = 0;

    const dfs = (node) => {
        visited[node] = true;
        for (let j = 0; j < n; j++) {
            if (computers[node][j] === 1 && !visited[j]) dfs(j);
        }
    }
    
    for (let node = 0; node < n; node++) {
        if (!visited[node]) {
            dfs(node);
            answer += 1;
        };
    }
    
    return answer;
}