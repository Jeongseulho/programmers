function solution(n, edge) {
    const dist = new Array(n + 1).fill(-1);
    const needVisit = [1];
    dist[1] = 0;
    const adjList = Array.from({ length : n + 1 }, () => []);
    edge.forEach(([v1, v2]) => {
        adjList[v1].push(v2);
        adjList[v2].push(v1);
    })
    
    while(needVisit.length) {
        const node = needVisit.shift();
        adjList[node].forEach((adjNode) => {
            if(dist[adjNode] === -1) {
                needVisit.push(adjNode);
                dist[adjNode] = dist[node] + 1;
            }
        })
    }
    
    const maxDist = Math.max(...dist);
    return dist.filter((d) => d === maxDist).length;
}