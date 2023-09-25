def solution(n):
    answer = [[0 for _ in range(1, i+1)] for i in range(1, n+1)]
    x, y = -1, 0 
    num = 1
    
    for i in range(n): # 방향
        for _ in range(i, n): # 좌표 구하기
            if i % 3 == 0: # 하
                x += 1
            elif i % 3 == 1: # 우
                y += 1
            else: # 상
                x -= 1
                y -= 1
            answer[x][y] = num
            num += 1
            
    return sum(answer, [])