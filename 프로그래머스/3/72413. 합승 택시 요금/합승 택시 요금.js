function solution(n, s, a, b, fares) {
    const dist = Array.from({ length : n }, () => new Array(n).fill(Infinity));
    for(let i = 0; i < n ; i++) dist[i][i] = 0;
    fares.forEach(([from, to, weight]) => {
        dist[from - 1][to - 1] = weight;
        dist[to - 1][from - 1] = weight;
    })
    
    for(let node = 0; node < n; node++) {
        for(let i = 0; i < n; i++) {
            for(let j = 0; j < n; j++) {
                dist[i][j] = Math.min(dist[i][j], dist[i][node] + dist[node][j])
            }
        }
    }
    
    let ans = dist[s - 1][a - 1] + dist[s - 1][b - 1]
    for(let cross = 0; cross < n; cross++) {
        const cost = dist[s - 1][cross] + dist[cross][a - 1] + dist[cross][b - 1];
        ans = Math.min(ans, cost)
    }
    
    return ans;
}