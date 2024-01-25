function solution(number, k) {
    const stack = [];
    for (const num of number) {
        if (!stack.length) {
            stack.push(num);
            continue;
        }
        if (k > 0) {
            while (k > 0 && stack.length && stack[stack.length - 1] < num) {
                stack.pop();
                k--;
            }
            stack.push(num);
            continue;
        }
        
        stack.push(num);
    }
    
    while (k > 0) {
        stack.pop();
        k--;
    }
    
    return stack.join('');
}