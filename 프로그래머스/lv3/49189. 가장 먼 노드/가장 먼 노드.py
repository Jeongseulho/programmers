from collections import deque

def solution(n, edge):
    adj_list = [[] for _  in range(n + 1)]
    for v1, v2 in edge:
        adj_list[v1].append(v2)
        adj_list[v2].append(v1)
    distance = [-1] * (n+1)
    distance[1] = 0
    
    
    need_visit = deque()
    need_visit.append(1)
    
    while need_visit:
        cur_node = need_visit.popleft()
        for adj_node in adj_list[cur_node]:
            if distance[adj_node]  == -1:
                need_visit.append(adj_node)
                distance[adj_node] = distance[cur_node] + 1
    
    max_d = 0
    cnt = 0
    for i in range(len(distance)):
        if distance[i] == max_d:
            cnt += 1
            continue
        if distance[i] > max_d:
            cnt = 1
            max_d = distance[i]
            continue
    
    return cnt