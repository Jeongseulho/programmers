
K = int(input())
infos = [list(map(int, input().split())) for _ in range(6)]
right = 1
left = 2
down = 3
up = 4
maxHeight = 0
maxWidth = 0
for ele in infos:
    curDir = ele[0]
    curLen = ele[1]
    if (curDir == up or curDir == down) and curLen>maxHeight:
        maxHeight = curLen

    if (curDir == right or curDir == left) and curLen>maxWidth:
        maxWidth = curLen

smallBoxArea = infos[0][1] * infos[-1][1]
for i in range(1, 6):
    prevDir = infos[i-1][0]
    curDir = infos[i][0]
    if (prevDir == down and curDir == left) or (prevDir == left and curDir == up) or (prevDir == right and curDir == down) or (prevDir == up and curDir == right):
        smallBoxArea = infos[i][1] * infos[i-1][1]

ans = (maxHeight*maxWidth - smallBoxArea) * K
print(ans)