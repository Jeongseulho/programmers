def dfs(startNode):
    needVisitStack = [startNode]
    visited = []
    while needVisitStack:
        curNode = needVisitStack.pop()
        if curNode not in visited:
            needVisitStack.extend(adj_list[curNode])
            visited.append(curNode)

    return visited



N = int(input())
M = int(input())
adj_list = [[] for _ in range(N+1)]
for _ in range(M):
    v1, v2 = map(int, input().split())
    adj_list[v1].append(v2)
    adj_list[v2].append(v1)


dfsArr = dfs(1)
print(len(dfsArr)-1)
