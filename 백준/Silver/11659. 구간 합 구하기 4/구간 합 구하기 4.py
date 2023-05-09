N, M = map(int, input().split())
nums = list(map(int, input().split()))
sum_nums = [0]
mySum = 0
for i in range(N):
    mySum += nums[i]
    sum_nums.append(mySum)

for _ in range(M):
    start, end = map(int, input().split())
    ans = sum_nums[end] - sum_nums[start-1]
    print(ans)