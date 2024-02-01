function solution(rectangle, characterX, characterY, itemX, itemY) {
    const doubleRec = rectangle.map((posArr) => posArr.map((pos) => pos * 2));
    const map = Array.from({length : 102}, () => new Array(102).fill(0));
    
    doubleRec.forEach(([sj, si, ej, ei]) => {
        for (let i = si; i <= ei; i++) {
            for (let j = sj; j <= ej; j++) {
                if (i === si || i === ei || j === sj || j === ej) {
                    if (map[i][j] === 0) map[i][j] = 1;
                } else {
                    map[i][j] = 2;
                }
            }
        }
    })
    
    const initI = characterY * 2;
    const initJ = characterX * 2;
    const targetI = itemY * 2;
    const targetJ = itemX * 2;
    const needVisit = [[initI, initJ, 0]];
    const di = [-1, 1, 0, 0];
    const dj = [0, 0, -1, 1];
    
    map[initI][initJ] = 0;
    while (needVisit.length) {
        const [ci, cj, cnt] = needVisit.shift();
        
        if (ci === targetI && cj === targetJ) return cnt / 2;
        
        for (let k = 0; k < 4; k++) {
            const ni = ci + di[k];
            const nj = cj + dj[k];
            if (map[ni][nj] === 1) {
                needVisit.push([ni, nj, cnt + 1]);
                map[ni][nj] = 0;
            }
        }
    }
}