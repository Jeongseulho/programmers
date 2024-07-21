function solution(s) {
    const stack = [];
    for (const str of s) {
        if (stack.length > 0 && stack.at(-1) === str) {
            stack.pop();
        } else {
            stack.push(str);
        }
    }
    
    return stack.length ? 0 : 1;
}
