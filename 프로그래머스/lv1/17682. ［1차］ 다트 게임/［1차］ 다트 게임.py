def solution(dartResult):
    dart_stack = list(dartResult)
    ans = 0

    cur_sign = 1
    mul_two_cnt = 0
    power = 0
    while dart_stack:
        dart = dart_stack.pop()

        if dart.isdigit():

            if dart == '0' and dart_stack and dart_stack[-1] == '1':
                dart_stack.pop()
                dart = '10'

            if mul_two_cnt > 2:
                ans += (int(dart) ** power) * cur_sign * 4
                mul_two_cnt -= 2
            elif mul_two_cnt > 0:
                ans += (int(dart) ** power) * cur_sign * 2
                mul_two_cnt -= 1
            else:
                ans += (int(dart) ** power) * cur_sign

            if cur_sign == -1:
                cur_sign = 1

        elif dart == '#':
            cur_sign = -1
        elif dart == '*':
            mul_two_cnt += 2
        elif dart == 'T':
            power = 3
        elif dart == 'D':
            power = 2
        elif dart == 'S':
            power = 1

    return ans


