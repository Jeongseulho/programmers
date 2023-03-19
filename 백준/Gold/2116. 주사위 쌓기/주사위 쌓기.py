

N = int(input())
diceList = [0]*N
for i in range(N):
    A, B, C, D, E, F = map(int,input().split())
    dice = [[A,F],[B,D],[C,E]]
    diceList[i] = dice
ans = 0
for startDiceUp in range(1,7):
    prevDiceUp = startDiceUp

    maxVal = 0
    for dice in diceList:
        for i in range(3):
            if prevDiceUp in dice[i] and i != 0:
                dice[0], dice[i] = dice[i], dice[0]

        curDiceUp = list(filter(lambda x: x != prevDiceUp, dice[0]))[0]
        a = max(dice[1])
        b = max(dice[2])
        maxVal += max(a,b)
        prevDiceUp = curDiceUp

    ans = max(ans, maxVal)

print(ans)