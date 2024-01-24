function getNodeCount(adjList) {
    const visited = [];
    let needVisit = [1];
    
    while (needVisit.length) {
        const node = needVisit.pop();
        if (!visited.includes(node)) {
            visited.push(node);
            needVisit = [...needVisit, ...adjList[node]]
        }
    }
    
    return visited.length;
}

function solution(n, wires) {
    let ans = 100;
    for (let disConnectWire = 0; disConnectWire < wires.length; disConnectWire++) {
        const adjList = new Array(n + 1).fill(null).map(() => []);
        for (let i = 0; i < wires.length; i++) {
            if (i === disConnectWire) continue;
            const [v1, v2] = wires[i];
            adjList[v1].push(v2);
            adjList[v2].push(v1);
        }
        
        const cnt = getNodeCount(adjList);
        const otherCnt = n - cnt
        const diff = Math.abs(cnt - otherCnt)
        ans = Math.min(diff, ans)
    }
    return ans;
}