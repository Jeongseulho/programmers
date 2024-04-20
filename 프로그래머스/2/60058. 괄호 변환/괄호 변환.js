const isBalance = (str) => {
    return str.length / 2 === [...str].filter((s) => s === '(').length;
}
    
const isRight = (str) => {
    const stack = [];
    for (const s of str) {
        if (s === '(') stack.push(s);
        else {
            if (stack.at(-1) === '(') stack.pop();
            else return false;
        }
    }
    return stack.length ? false : true;
}
    
function solution(p) {
    if (!p) return '';
    if (isRight(p)) return p;
    let [u, v] = ['', ''];
    let [sCnt, eCnt] = [0, 0];
    
    for (let i = 0; i < p.length; i += 2) {
        u += p.slice(i, i + 2);
        if (isBalance(u)) {
            v = p.slice(i + 2);
            break;
        }
    }
    
    if (isRight(u)) return u + solution(v);
    
    u = u.slice(1, u.length - 1).split("")
    for (let i = 0; i < u.length; i++) {
        const reversed = u[i] === ')' ? '(' : ')';
        u[i] = reversed;
    }
    
    return '(' + solution(v) + ')' + u.join('');
}