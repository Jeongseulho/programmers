function solution(number, k) {
    const stack = [];
    for(const num of number) {
        while(k > 0 && stack.length && Number(stack[stack.length - 1]) < Number(num)) {
            k--;
            stack.pop();
        }
        stack.push(num);
    }
    return stack.slice(0, number.length - k).join('');
}