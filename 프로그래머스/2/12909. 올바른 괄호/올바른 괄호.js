function solution(s){
    const stack = [];
    for (const str of s) {
        if (str === "(") {
            stack.push(str)
        } else {
            if (stack.length === 0 || stack.pop() !== "(") {
                return false
            }
        }
    }
    if (stack.length) {
        return false
    }
    return true
}