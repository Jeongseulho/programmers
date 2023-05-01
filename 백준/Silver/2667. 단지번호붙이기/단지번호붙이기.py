def getHouseCnt(si, sj):
    needVisit = [(si, sj)]
    visitCnt = 0
    while needVisit:
        curI, curJ = needVisit.pop()
        if (curI, curJ) not in visited:
            visited.append((curI, curJ))
            visitCnt += 1
            for di,dj in ((-1, 0), (1, 0), (0, -1), (0, 1)):
                ni, nj = curI + di, curJ + dj
                if 0<=ni<N and 0<=nj<N and (ni,nj) and arr[ni][nj] == '1':
                    needVisit.append((ni, nj))
    return visitCnt


N = int(input())
arr = [input() for _ in range(N)]
ans = []
visited = []
for i in range(N):
    for j in range(N):
        if arr[i][j] == '1' and (i,j) not in visited:
            visitCnt = getHouseCnt(i, j)
            ans.append(visitCnt)

print(len(ans))
for cnt in sorted(ans):
    print(cnt)