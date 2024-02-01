function solution(tickets) {
    const ansList = [];
    const dfs = (nowPlace, remainTickets, path) => {
        if (remainTickets.length === 0) {
            ansList.push(path);
            return;
        };
        
        remainTickets.forEach((ticket, idx, tickets) => {
            const [from, to] = ticket;
            
            if (from !== nowPlace) return;
            
            const nextRemianTickets = tickets.filter((_, nextTicketIdx) => nextTicketIdx !== idx)
            dfs(to, nextRemianTickets, [...path, to])
        })
    }
    
    dfs("ICN", tickets, ["ICN"]);
    return ansList.sort()[0];
}