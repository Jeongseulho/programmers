function solution(arr) {
    let zeroCnt = 0;
    let oneCnt = 0;
    
    const checkSame = (r, c, size) => {
        const first = arr[r][c];
        for (let i = r; i < r + size; i++) {
            for (let j = c; j < c + size; j++) {
                if (arr[i][j] !== first) return false;
            }
        }
        return true;
    };

    const divide = (r, c, size) => {
        if (checkSame(r, c, size)) {
            if (arr[r][c] === 0) zeroCnt++;
            else oneCnt++;
            return;
        }

        let newSize = size / 2;
        divide(r, c, newSize);                  // 왼쪽 위
        divide(r, c + newSize, newSize);        // 오른쪽 위
        divide(r + newSize, c, newSize);        // 왼쪽 아래
        divide(r + newSize, c + newSize, newSize);  // 오른쪽 아래
    };

    let n = arr.length;
    divide(0, 0, n);
    
    return [zeroCnt, oneCnt];
}
