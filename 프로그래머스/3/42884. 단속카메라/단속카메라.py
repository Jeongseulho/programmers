def solution(routes):
    routes.sort(key = lambda x : x[1])
    ans = 1
    last_end = routes[0][1]
    for i in range(1, len(routes)):
        cur_start = routes[i][0]
        if last_end < cur_start:
            ans += 1
            last_end = routes[i][1]
        
    return ans