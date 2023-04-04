def div_team(i, use_cnt):
    global min_diff

    if use_cnt > N // 2:
        return

    if i == N:
        if use_cnt == N // 2:
            start_team = [idx for idx in range(N) if bits[idx]]
            link_team = [idx for idx in range(N) if not bits[idx]]
            diff = cal(start_team, link_team)
            min_diff = min(diff, min_diff)
        return

    bits[i] = 1
    div_team(i + 1, use_cnt + 1)
    bits[i] = 0
    div_team(i + 1, use_cnt)


def cal(start_team, link_team):
    start_team_sum = 0
    for start_mem1 in start_team:
        for start_mem2 in start_team:
            if start_mem1 != start_mem2:
                start_team_sum += arr[start_mem1][start_mem2]

    link_team_sum = 0
    for link_mem1 in link_team:
        for link_mem2 in link_team:
            if link_mem1 != link_mem2:
                link_team_sum += arr[link_mem1][link_mem2]

    return abs(start_team_sum - link_team_sum)


N = int(input())
arr = [list(map(int, input().split())) for _ in range(N)]
bits = [0] * N
min_diff = float('inf')
div_team(0, 0)

print(min_diff)
