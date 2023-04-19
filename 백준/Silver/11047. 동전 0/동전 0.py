N, K = map(int, input().split())
coins = [int(input()) for _ in range(N)]
coins.reverse()

sum_coin = 0
idx = 0
cnt = 0
while True:
    if sum_coin == K:
        break
    if K - sum_coin >= coins[idx]:
        cnt += 1
        sum_coin += coins[idx]
    else:
        idx += 1

print(cnt)