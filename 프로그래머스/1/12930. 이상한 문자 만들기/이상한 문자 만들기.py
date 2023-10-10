def solution(s):
    ans = ''
    
    cur_idx = 0
    for alpha in s:
        
        if alpha == ' ':
            cur_idx = 0
            ans += ' '
            continue
            
        if cur_idx % 2 == 0:
            ans += alpha.upper()
        else:
            ans += alpha.lower()
        cur_idx += 1
    
    return ans
            