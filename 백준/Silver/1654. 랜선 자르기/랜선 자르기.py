init_line_cnt, need_line_cnt = map(int, input().split())
lines = [int(input()) for _ in range(init_line_cnt)]
start, end = 1, max(lines)

while start <= end:  # start, end가 교차할 때 까지
    mid = (start + end) // 2 
    lines_cnt = 0  # 랜선 수
    for line in lines:
        lines_cnt += line // mid  # 분할 된 랜선 수

    if lines_cnt >= need_line_cnt:  # 정답이지만 더 큰값 있나 찾으러 다음 루프 진행
        start = mid + 1
    else: # 정답이 아니라 길이를 줄여보기
        end = mid - 1

print(end)