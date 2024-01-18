function solution(clothes) {
    const clothCnt = {};
    for (const [ _, category ] of clothes) {
        if (category in clothCnt) clothCnt[category] += 1;
        else clothCnt[category] = 2;
    }
    
    console.log(clothCnt)
    return Object.values(clothCnt).reduce((acc, cur) => acc * cur, 1) - 1;
}

