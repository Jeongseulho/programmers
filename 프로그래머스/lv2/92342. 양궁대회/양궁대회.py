def solution(n, info):
    global answer, result  # 전역 변수 선언

    def score(ryan):  # 총 점수 계산 함수
        s = 0  # 초기화
        for i in range(11):  # 공격 점수는 0부터 10까지 총 11개이므로 11번 반복
            if ryan[i] == info[i] == 0:  # 만약 라이언이 해당 점수를 얻지 못하고, 상대방도 해당 점수를 얻지 못한 경우 건너뛰기
                continue
            if ryan[i] > info[i]:  # 라이언이 해당 점수를 더 많이 얻은 경우
                s += 10 - i  # 10에서 해당 점수를 뺀 값을 총 점수에 더하기
            else:  # 상대방이 해당 점수를 더 많이 얻은 경우
                s -= 10 - i  # 10에서 해당 점수를 뺀 값을 총 점수에서 빼기
        return s  # 최종 총 점수 반환

    def dfs(idx, left, ryan):  # 깊이 우선 탐색 함수
        global answer, result  # 전역 변수 선언
        if idx == -1 and left:  # 모든 점수에 대한 시도가 끝나고 라이언이 남은 화살을 가지고 있을 때
            return  # 반환
        if left == 0:  # 라이언이 모든 화살을 사용했을 때
            s = score(ryan)  # 라이언의 총 점수 계산
            if result < s:  # 현재 최고 점수보다 크다면
                answer = ryan[:]  # 최적의 화살 사용 방법 저장
                result = s  # 최고 점수 갱신
            return  # 반환

        for i in range(left, -1, -1):  # 현재 남은 화살 수를 사용하여 가능한 모든 방법을 시도
            ryan[idx] = i  # 현재 점수에 대해 i개의 화살을 사용
            dfs(idx-1, left-i, ryan)  # 다음 점수에 대해 시도
            ryan[idx] = 0  # 초기화

    answer = [0 for _ in range(11)]  # 최적의 화살 사용 방법 초기화
    result = 0  # 최고 점수 초기화
    dfs(10, n, [0 for _ in range(11)])  # 깊이 우선 탐색 수행
    # 최적의 화살 사용 방법 반환, 만약 최고 점수가 0이라면 불가능한 경우이므로 -1 반환
    return answer if result != 0 else [-1]
