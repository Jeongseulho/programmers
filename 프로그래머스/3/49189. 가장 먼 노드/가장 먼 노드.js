function solution(n, edge) {
    const adjList = Array.from({length : n + 1}, () => new Array());
    edge.forEach(([v1, v2]) => {
        adjList[v1].push(v2);
        adjList[v2].push(v1);
    })
    const distance = new Array(n + 1).fill(-1);
    distance[1] = 0;
    let needVisit = [1];
    
    while (needVisit.length) {
        const curNode = needVisit.shift();
        const adjNodes = adjList[curNode]
        adjNodes.forEach((adjNode) => {
            if (distance[adjNode] === -1) {
                distance[adjNode] = distance[curNode] + 1;
                needVisit.push(adjNode);
            }
        })
        
    }
    const maxDistance = Math.max(...distance);
    return distance.reduce((acc, cur) => cur === maxDistance ? acc + 1 : acc, 0)
}