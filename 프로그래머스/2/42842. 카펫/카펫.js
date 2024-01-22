function getBrownCnt(yx, yy) {
    return 4 + 2 * yy + 2 * yx
}

function solution(brown, yellow) {
    if (yellow === 1) return [ 3, 3 ]
    for (let yy = 1; yy < Math.floor(yellow / 2) + 1; yy++) {
        if (yellow % yy !== 0) continue;
        const yx = yellow / yy
        if (brown === getBrownCnt(yx, yy)) return [ yx + 2, yy + 2 ]
    }
}