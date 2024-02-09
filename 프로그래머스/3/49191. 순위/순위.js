const getCnt = (startNode, n, graph, winToOrLoseTo) => {
    const needVisit = [startNode];
    const visited = new Array(n + 1).fill(false);
    visited[startNode] = true;
    
    while (needVisit.length) {
        const node = needVisit.pop();
        graph[node][winToOrLoseTo].forEach((adjNode) => {
            if (!visited[adjNode]) {
                needVisit.push(adjNode);
                visited[adjNode] = true;
            }
        })
    }
    return visited.filter((node) => node).length - 1;
}

function solution(n, results) {
    let ans = 0;
    const graph = Array.from({length : n + 1}, () => ({ winTo : [], loseTo : []}));
    results.forEach(([winner, loser]) => {
        graph[winner].winTo.push(loser);
        graph[loser].loseTo.push(winner);
    })
    for (let i = 1; i < n + 1; i++) {
        const winnerCnt = getCnt(i, n, graph, "winTo");
        const loserCnt = getCnt(i, n, graph, "loseTo");
        if (winnerCnt + loserCnt === n - 1) ans++;
    }
    return ans;
}