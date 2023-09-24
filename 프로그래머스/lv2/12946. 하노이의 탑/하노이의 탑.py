def recursive(n, start, end, mid, ans):
    if n == 1:
        ans.append([start, end])
        return
    
    recursive(n - 1, start, mid, end, ans)
    
    ans.append([start, end])
    
    recursive(n - 1, mid, end, start, ans)

def solution(n):
    ans = []
    recursive(n, 1, 3, 2, ans)
    return ans
        