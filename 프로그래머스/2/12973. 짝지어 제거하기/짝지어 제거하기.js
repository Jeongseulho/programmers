function solution(s) {
    const stack = [];
    for (const str of s) {
        // 스택이 비어있지 않고, 현재 문자가 스택의 마지막 요소와 같으면 제거
        if (stack.length > 0 && stack.at(-1) === str) {
            stack.pop(); // 같은 문자 제거
        } else {
            stack.push(str); // 다른 문자는 스택에 추가
        }
    }
    
    // 스택이 비어있으면 모든 쌍이 제거되었으므로 1, 남아있으면 0
    return stack.length === 0 ? 1 : 0;
}
