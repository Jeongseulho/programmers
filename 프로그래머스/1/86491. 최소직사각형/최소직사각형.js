function solution(sizes) {
    const resizes = sizes.map((wallet) => wallet.sort((a, b) => a - b));
    let maxRow = 0;
    let maxCol = 0;
    for (let i = 0; i < resizes.length; i++) {
        maxRow = Math.max(maxRow, resizes[i][0]);
        maxCol = Math.max(maxCol, resizes[i][1]);
    }
    return maxRow * maxCol;
}

