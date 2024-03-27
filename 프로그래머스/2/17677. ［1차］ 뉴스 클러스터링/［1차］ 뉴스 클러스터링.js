const isAlpha = (s) => {
    return s.charCodeAt() >= 97 && s.charCodeAt() <= 122;
}

const genSet = (str) => {
    str = str.toLowerCase();
    const result = [];
    
    for(let i = 0; i < str.length - 1; i++) {
        if(isAlpha(str[i]) && isAlpha(str[i + 1])) {
            result.push(str[i] + str[i + 1]);
        }
    }
    return result;
}

function solution(str1, str2) {
    const CONSTANT = 65536;
    const [setStr1, setStr2] = [genSet(str1), genSet(str2)];
    if(setStr1.length === 0 && setStr2.length === 0) return CONSTANT;
    
    const set = new Set([...setStr1, ...setStr2]);
    let interLen = 0, unionLen = 0;
    set.forEach((uniqueEle) => {
        const existsLen1 = setStr1.filter((ele) => uniqueEle === ele).length;
        const existsLen2 = setStr2.filter((ele) => uniqueEle === ele).length;
        interLen += Math.min(existsLen1, existsLen2);
        unionLen += Math.max(existsLen1, existsLen2);
    });
    
    return Math.floor((interLen / unionLen) * CONSTANT);
}