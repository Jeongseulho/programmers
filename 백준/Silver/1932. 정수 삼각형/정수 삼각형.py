
N = int(input())
arr = [list(map(int,input().split())) for _ in range(N)]
for i in range(1,N):
    arr[i][0] += arr[i-1][0]

    for j in range(1,i):
        arr[i][j] += max(arr[i-1][j-1], arr[i-1][j])

    arr[i][i] += arr[i-1][i-1]

print(max(arr[N-1]))