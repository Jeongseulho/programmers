from collections import deque

def isDiffOneAlpha(word1, word2):
    diff_cnt = 0
    word1_list = list(word1)
    word2_list = list(word2)
    for i in range(len(word1_list)):
        if word1_list[i] != word2_list[i]:
            diff_cnt += 1
            if diff_cnt > 1:
                return False
    
    return True

def bfs(begin, target, words):
    need_visit = deque()
    need_visit.append((begin, 0))
    visited = deque()
    
    while need_visit:
        cur_word, cnt = need_visit.popleft()
        visited.append(cur_word)
        cnt += 1
        if cur_word == target:
            return cnt - 1
        for word in words:
            if isDiffOneAlpha(word, cur_word) and word not in visited:
                print(word, cnt)
                need_visit.append((word, cnt))
    
    return 0
    
    
def solution(begin, target, words):
    ans = bfs(begin, target, words)
    return ans
        