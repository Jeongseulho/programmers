def solution(n, computers):
    ans = 0
    
    isVisit = [0 for _ in range(n)]
    def dfs(start_node):
        need_visit = [start_node]
        visited = [start_node]
        while need_visit:
            cur_node = need_visit.pop()
            for connected_node in range(n):
                if computers[cur_node][connected_node] and connected_node not in visited:
                    need_visit.append(connected_node)
                    visited.append(connected_node)
                    isVisit[connected_node] = 1
                    

    for node in range(n):
        if isVisit[node]:
            continue
        dfs(node)
        ans += 1
    
    return ans
            