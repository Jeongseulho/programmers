function solution(s) {
    let cnt = 0;
    let delCnt = 0;

    const trans = (x) => {
        const ones = x.split('').filter(s => s === '1');
        const c = ones.length;
        
        cnt += 1;
        delCnt += x.length - c; 

        return c.toString(2);
    };

    while (s !== '1') { 
        s = trans(s);
    }

    return [cnt, delCnt];
}
