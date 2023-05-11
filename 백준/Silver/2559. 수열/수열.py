N, K = map(int, input().split())
arr = list(map(int, input().split()))
dp = [sum(arr[:K])]
for i in range(1, N-K+1):
    prevSum = dp[i-1]
    dp.append(prevSum-arr[i-1]+arr[i-1+K])

print(max(dp))