N = int(input())
arr = [list(map(int,input().split())) for _ in range(N)]

for i in range(1, N):
    arr[i][0] += min(arr[i-1][1], arr[i-1][2]) # i번째가 빨강이면 i-1번째에 초록? 파랑? 중 최소 비용 선택
    arr[i][1] += min(arr[i-1][0], arr[i-1][2]) # i번째가 초록이면 i-1번째에 빨강? 파랑? 중 최소 비용 선택
    arr[i][2] += min(arr[i - 1][0], arr[i - 1][1]) # i번째가 파랑이면 i-1번째에 빨강? 초록? 중 최소 비용 선택

ans = min(arr[N-1])
print(ans)