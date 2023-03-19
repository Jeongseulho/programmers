def isPrimeNum(num):
    if num == 1:
        return False
    for i in range(2, int(num**0.5)+1):
        if num % i == 0:
            return False
    return True


for _ in range(int(input())):
    num = int(input())

    a, b = num//2, num//2
    while a > 0:
        if isPrimeNum(a) and isPrimeNum(b):
            print(a, b)
            break
        else:
            a -= 1
            b += 1
