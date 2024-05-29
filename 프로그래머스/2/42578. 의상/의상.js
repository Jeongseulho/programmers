function solution(clothes) {
    const clothesCnt = {};
    for(const [_, type] of clothes) {
        if(type in clothesCnt) clothesCnt[type] += 1;
        else clothesCnt[type] = 2;
    }
    return Object.values(clothesCnt).reduce((acc, cur) => acc * cur, 1) - 1;
}

