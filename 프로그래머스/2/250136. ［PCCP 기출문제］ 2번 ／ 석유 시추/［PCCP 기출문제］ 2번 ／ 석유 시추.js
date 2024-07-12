function solution(land) {
    let maxTotalCnt = 0;
    const [lenI, lenJ] = [land.length, land[0].length];
    const oilNumLand = Array.from({length : lenI}, () => Array(lenJ).fill(0));
    let oilNum = 1;
    let oilSizeMap = new Map();
    
    const dfs = (si, sj) => {
        oilNumLand[si][sj] = oilNum;
        let visitCnt = 1;
        const di = [-1, 1, 0, 0];
        const dj = [0, 0, -1, 1];
        const needVisit = [[si, sj]];
        while(needVisit.length) {
            const [ci, cj] = needVisit.pop();
            for(let d = 0; d < 4; d++) {
                const [ni, nj] = [ci + di[d], cj + dj[d]];
                if(ni > -1 && ni < lenI && nj > -1 && nj < lenJ && !oilNumLand[ni][nj] && land[ni][nj]) {
                    oilNumLand[ni][nj] = oilNum;
                    needVisit.push([ni, nj]);
                    visitCnt += 1;
                }
            }
        }
        oilSizeMap.set(oilNum, visitCnt);
    }
    
    for(let i = 0; i < lenI; i++) {
        for(let j = 0; j < lenJ; j++) {
            if(land[i][j] && !oilNumLand[i][j]) {
                dfs(i, j);
                oilNum += 1;
            }
        }
    }
    
    let maxOilSize = 0;
    for(let k = 0; k < lenJ; k++) {
        const oilNumSet = new Set();
        for(let l = 0; l < lenI; l++) {
            if(oilNumLand[l][k]) oilNumSet.add(oilNumLand[l][k]);
        }
        let oilSize = 0;
        oilNumSet.forEach((oilNum) => oilSize += oilSizeMap.get(oilNum));
        maxOilSize = Math.max(maxOilSize, oilSize)
    }
    
    return maxOilSize;
}