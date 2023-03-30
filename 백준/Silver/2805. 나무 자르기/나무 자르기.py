N, need_len = map(int, input().split())
trees = list(map(int, input().split()))
s, e = 1, max(trees)
while s<=e:
    cur_height = (s+e)//2
    total_len = 0
    for tree in trees:
        cur_len = tree - cur_height if tree>=cur_height else 0
        total_len += cur_len

    if total_len >= need_len:
        s = cur_height + 1
    else:
        e = cur_height - 1

ans = s - 1
print(ans)