

N = int(input())
times = sorted(map(int, input().split()))
ans = 0
for i in range(N):
    ans += sum(times[:i+1])

print(ans)