def check(y):
    for i in range(y):
        if col[y] == col[i] or abs(col[y] - col[i]) == y - i:
            return False
    return True


def nQueen(y):
    global result
    if y == N:
        result += 1
    else:
        for x in range(N):
            col[y] = x  # 일단 y행, x열에 두고
            if check(y):  # col 리스트로 위의 y행 x열에 두어도 되는지 확인
                nQueen(y + 1)  # 두어도 되는거면 다음행인 y+1로가서 더 깊이 들어간다


N = int(input())
result = 0
col = [0 for _ in range(N)]
nQueen(0)
print(result)
