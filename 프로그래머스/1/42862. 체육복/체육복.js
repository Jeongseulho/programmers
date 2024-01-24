function solution(n, lost, reserve) {
    const clothesCnt = new Array(n + 1).fill().map((ele, idx) => idx === 0 ? null : 1)
    lost.forEach((student) => clothesCnt[student] -= 1 );
    reserve.forEach((student) => clothesCnt[student] += 1);
    
    for (let i = 1; i < n + 1; i++) {
        if (!clothesCnt[i]) {
            if (clothesCnt[i - 1] === 2) {
                clothesCnt[i - 1] -= 1;
                clothesCnt[i] += 1;
                continue;
            }
            if (clothesCnt[i + 1] === 2) {
                clothesCnt[i + 1] -= 1;
                clothesCnt[i] += 1;
                continue;
            }
        }
    }
    console.log(clothesCnt)
    return clothesCnt.reduce((acc, cur) => cur > 0 ? acc + 1 : acc, 0)
}