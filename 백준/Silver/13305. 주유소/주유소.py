N = int(input())
dist = list(map(int, input().split()))
cost = list(map(int, input().split()))

curIdx = 0
nextIdx = 1
sumCost = 0
while curIdx < N - 1:
    totalDist = dist[curIdx]
    while nextIdx < N-1 and cost[curIdx] < cost[nextIdx]:
        totalDist += dist[nextIdx]
        nextIdx += 1

    sumCost += cost[curIdx] * totalDist

    curIdx = nextIdx
    nextIdx += 1

print(sumCost)