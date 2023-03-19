
N = int(input())
columnList = [list(map(int, input().split())) for _ in range(N)]
columnList.sort(key=lambda x: x[0])

highestColumn = sorted(columnList, key=lambda x: (-x[1], x[0]))[0]

midMaxHeightPos = highestColumn[0]
for i in range(N):
    if midMaxHeightPos == columnList[i][0]:
        midMaxHeightIdx = i
        break

ans = highestColumn[1]

curHeight = columnList[0][1]
for i in range(midMaxHeightIdx):
    ans += curHeight * (columnList[i + 1][0] - columnList[i][0])
    nextHeight = columnList[i + 1][1]
    if curHeight < nextHeight:
        curHeight = nextHeight

curHeight = columnList[-1][1]
for i in range(N - 1, midMaxHeightIdx, -1):
    ans += curHeight * (columnList[i][0] - columnList[i - 1][0])
    nextHeight = columnList[i - 1][1]
    if curHeight < nextHeight:
        curHeight = nextHeight

print(ans)
