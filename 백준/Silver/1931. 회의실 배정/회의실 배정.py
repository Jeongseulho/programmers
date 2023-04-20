

N = int(input())
time_line = [list(map(int, input().split())) for _ in range(N)]
time_line.sort(key= lambda x:(x[1],x[0]))

ans = 1
prev_end = time_line[0][1]
for i in range(1, N):
    cur_start = time_line[i][0]
    cur_end = time_line[i][1]
    if prev_end <= cur_start:
        prev_end = cur_end
        ans += 1

print(ans)