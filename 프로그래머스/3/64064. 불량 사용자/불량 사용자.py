def isInclude(str1, str2):
    for i in range(len(str1)):
        if str1[i] == str2[i] or str2[i] == '*':
            pass
        else:
            return False
    return True

def solution(user_id, banned_id):
    case = [[] for _ in range(len(banned_id))]
    for uid in user_id:
        for idx, bid in enumerate(banned_id):
            if len(uid) == len(bid) and isInclude(uid, bid):
                case[idx].append(uid)
        
    all_set = []
    cnt = 0
    
    print(case)
    
    def recursive(idx, cur_set):
        nonlocal cnt
        
        if idx == len(case):
            set_cur_set = set(cur_set)
            if set_cur_set not in all_set:
                all_set.append(set_cur_set)
                cnt += 1
            
            return
        
        for i in range(len(case[idx])):
            if case[idx][i] not in cur_set:
                recursive(idx + 1, cur_set + [case[idx][i]])
    
    recursive(0, [])
            
    return cnt
    