function solution(n, results) {
    const winnnerAdjList = Array.from({ length : n + 1 }, () => []);
    const loserAdjList = Array.from({ length : n + 1 }, () => []);
    results.forEach(([winner, loser]) => {
        winnnerAdjList[winner].push(loser);
        loserAdjList[loser].push(winner);
    })
    
    const getCnt = (winOrLose, start) => {
        const adjList = winOrLose === 'win' ? loserAdjList : winnnerAdjList;
        const visited = [];
        const needVisit = [start]
        
        while(needVisit.length) {
            const person = needVisit.pop();
            adjList[person].forEach((adjPerson) => {
                if(!visited.includes(adjPerson)) {
                    needVisit.push(adjPerson);
                    visited.push(adjPerson);
                }
            })
        }
        return visited.length;
    }
    
    let ans = 0;
    for(let person = 1; person <= n; person++) {
        const winCnt = getCnt('win', person)
        const loseCnt = getCnt('lose', person)
        if(winCnt + loseCnt === n - 1) ans += 1;
    }
    
    return ans;
}