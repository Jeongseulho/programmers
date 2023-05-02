

def dfs(si, sj):
    needVisit = [(si,sj)]
    while needVisit:
        curPos = needVisit.pop()
        arr[curPos[0]][curPos[1]] = 0
        for di, dj in ((1,0),(-1,0),(0,1),(0,-1)):
            ni, nj = di+curPos[0], dj+curPos[1]
            if 0<=ni<N and 0<=nj<M and arr[ni][nj]:
                needVisit.append((ni,nj))

T = int(input())
for tc in range(1, T+1):
    M, N, K = map(int, input().split())
    arr = [[0]*M for _ in range(N)]
    for _ in range(K):
        x, y = map(int,input().split())
        arr[y][x] = 1

    cnt = 0
    for i in range(N):
        for j in range(M):
            if arr[i][j]:
                cnt+=1
                dfs(i,j)

    print(cnt)