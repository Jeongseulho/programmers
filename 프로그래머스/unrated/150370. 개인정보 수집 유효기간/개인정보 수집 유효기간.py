def getExpirePeriod(contractTerm, terms):
    for term in terms:
        if contractTerm in term:
            _, expirePeriod = term.split(' ')
            return int(expirePeriod)


def getExpireDate(contractDate, expirePeriod):
    contractY, contractM, contractD = map(int, contractDate.split('.'))
    expireY = contractY
    expireD = contractD
    expireM = contractM + expirePeriod

    if expireM > 12:
        div, mod = divmod(expireM, 12)
        if mod == 0:
            expireY += (div - 1)
            expireM = 12
        else:
            expireY += div
            expireM = mod

    return expireY, expireM, expireD


def isOver(expireY, expireM, expireD, todayY, todayM, todayD):
    if expireY < todayY:
        return True
    if expireY > todayY:
        return False

    if expireM < todayM:
        return True
    if expireM > todayM:
        return False

    if expireD <= todayD:
        return True
    if expireD > todayD:
        return False


def solution(today, terms, privacies):
    todayY, todayM, todayD = map(int, today.split('.'))
    answer = []
    idx = 1
    for privacie in privacies:
        contractDate, contractTerm = privacie.split(' ')
        expirePeriod = getExpirePeriod(contractTerm, terms)
        expireY, expireM, expireD = getExpireDate(contractDate, expirePeriod)
        if isOver(expireY, expireM, expireD, todayY, todayM, todayD):
            answer.append(idx)
        idx += 1
    return answer


today = "2020.12.01"
terms = ["A 12"]
privacies = ["2019.12.01 A"]

ans = solution(today, terms, privacies)
print(ans)
