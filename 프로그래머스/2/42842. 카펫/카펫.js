const getBrownCnt = (yellowRow, yellowCol) => {
    return (yellowCol + 2) * 2 + yellowRow * 2; 
}

function solution(brown, yellow) {
    for (let yellowRow = 1; yellowRow <= yellow; yellowRow++) {
        if (yellow % yellowRow === 0) {
            const yellowCol = yellow / yellowRow;
            if (getBrownCnt(yellowRow, yellowCol) === brown) return [yellowCol + 2, yellowRow + 2];
        }
    }
}