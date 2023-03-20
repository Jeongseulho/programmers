def hanoi(n, start, mid, end):
    if n == 1:
        moves.append([start, end])
    else:
        hanoi(n - 1, start, end, mid)
        moves.append([start, end])
        hanoi(n - 1, mid, start, end)


N = int(input())
moves = []
hanoi(N, 1, 2, 3)

print(len(moves))
for move in moves:
    print(*move)
