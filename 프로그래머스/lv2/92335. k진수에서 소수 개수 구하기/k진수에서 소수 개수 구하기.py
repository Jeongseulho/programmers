def isPrime(n):
    if n == 1:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True


def convert(n, q):
    rev_base = ''

    while n > 0:
        n, mod = divmod(n, q)
        rev_base += str(mod)

    return rev_base[::-1]


def solution(n, k):
    cnt = 0
    k진법의수 = convert(n, k)
    nums = str(k진법의수).split('0')
    for num in nums:
        if num and isPrime(int(num)):
            cnt += 1

    return cnt

