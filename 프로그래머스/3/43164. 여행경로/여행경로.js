function solution(tickets) {
    const pathList = [];
    
    const dfs = (curPlace, remainTickets, path) => {
        if (!remainTickets.length) return pathList.push(path);
        
        remainTickets.forEach(([from, to], idx) => {
            if (curPlace !== from) return;
            const nextRemainTickets = remainTickets.filter((_, i) => i !==idx );
            dfs(to, nextRemainTickets, [...path, to]);
        })
    }
    
    dfs('ICN', tickets, ['ICN']);
    
    return pathList.sort()[0];
}