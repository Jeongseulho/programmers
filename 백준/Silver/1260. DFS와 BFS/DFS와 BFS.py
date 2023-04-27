def dfs(startNode):
    for arr in adj_list:
        arr.sort(reverse=True)

    needVisitStack = [startNode]
    visited = []
    while needVisitStack:
        curNode = needVisitStack.pop()
        if curNode not in visited:
            needVisitStack.extend(adj_list[curNode])
            visited.append(curNode)

    return visited


def bfs(startNode):
    for arr in adj_list:
        arr.sort()

    needVisitQueue = [startNode]
    visited = []
    while needVisitQueue:
        curNode = needVisitQueue.pop(0)
        if curNode not in visited:
            needVisitQueue.extend(adj_list[curNode])
            visited.append(curNode)

    return visited


N, M, startNode = map(int, input().split())
adj_list = [[] for _ in range(N+1)]
for _ in range(M):
    v1, v2 = map(int, input().split())
    adj_list[v1].append(v2)
    adj_list[v2].append(v1)


dfsArr = dfs(startNode)
bfsArr = bfs(startNode)
print(*dfsArr)
print(*bfsArr)