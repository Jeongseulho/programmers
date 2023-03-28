

N = int(input())
arr = [input() for _ in range(N)]

def solution(si, sj, N):
    color = arr[si][sj]
    for i in range(si, si + N):
        for j in range(sj, sj + N):
            if color != arr[i][j]:
                print('(', end='')
                solution(si, sj, N // 2)
                solution(si, sj + N // 2,N // 2)
                solution(si + N // 2, sj, N // 2)
                solution(si + N // 2, sj + N // 2, N // 2)
                print(')', end='')
                return
    if color=='1':
        print(1, end='')
    else:
        print(0, end='')

solution(0, 0, N)