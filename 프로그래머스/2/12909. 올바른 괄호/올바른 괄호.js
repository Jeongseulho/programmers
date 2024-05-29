function solution(s){
    const stack = [];
    for(const str of s) {
        if(str === '(') stack.push(str);
        else {
            if(stack.at(-1) === '(') stack.pop();
            else return false;
        }
    }
    return stack.length === 0 ? true : false;
}