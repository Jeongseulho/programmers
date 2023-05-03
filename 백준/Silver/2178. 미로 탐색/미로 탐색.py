def bfs():
    needVisit = [(0,0)]
    while needVisit:
        ci, cj = needVisit.pop(0)
        for di, dj in ((-1,0),(1,0),(0,1),(0,-1)):
            ni, nj = ci + di, cj + dj
            if 0<=ni<N and 0<=nj<M and arr[ni][nj] == 1:
                needVisit.append((ni,nj))
                arr[ni][nj] = arr[ci][cj] + 1


N, M = map(int, input().split())
arr = [list(map(int, input())) for _ in range(N)]
bfs()
print(arr[N-1][M-1])