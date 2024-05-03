function solution(info, edges) {
    const ans = [];
    const visited = Array(info.length).fill(0);
    
    const dfs = (sheep, wolf) => {
        if(sheep > wolf) ans.push(sheep);
        else return;
        
        for(const [parent, child] of edges) {
            if(visited[parent] && !visited[child]) {
                visited[child] = true;
                if(info[child]) dfs(sheep, wolf + 1);
                else dfs(sheep + 1, wolf);
                visited[child] = false;
            }
        }
    }
    
    visited[0] = true;
    dfs(1, 0);
    
    return Math.max(...ans);
}