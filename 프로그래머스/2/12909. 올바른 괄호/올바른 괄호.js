function solution(s){
    const stack = [];
    for(const str of s) {
        if(str === ')') {
            if(stack.pop() !== '(') return false;
        } else stack.push(str);
    }
    
    return stack.length ? false : true;
}