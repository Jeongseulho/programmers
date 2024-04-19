function solution(n, wires) {
    let ans = 100;
    for (let delWireIdx = 0; delWireIdx < wires.length; delWireIdx++) {
        const delWires = wires.filter((_, idx) => idx !== delWireIdx)
        const adjList = Array.from({length : n + 1}, () => []);
        delWires.forEach(([v1, v2]) => {
            adjList[v1].push(v2);
            adjList[v2].push(v1);
        })
        
        const visited = [delWires[0][0]];
        const needVisit = [delWires[0][0]];
        
        while (needVisit.length) {
            const node = needVisit.pop();
            adjList[node].forEach((adjNode) => {
                if (!visited.includes(adjNode)) {
                    visited.push(adjNode);
                    needVisit.push(adjNode);
                }
            })
        }
        const otherCnt = n - visited.length;
        const diff = Math.abs(otherCnt - visited.length)
        ans = Math.min(diff, ans);
    }
    return ans;
}