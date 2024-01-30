function solution(maps) {
    const maxI = maps.length - 1;
    const maxJ = maps[0].length - 1;
    const needVisit = [[0, 0, 1]];
    
    // 상하좌우
    const di = [-1, 1, 0, 0];
    const dj = [0, 0, -1, 1];
    
    while(needVisit.length) {
        const [ci, cj, cnt] = needVisit.shift();
        if (ci === maxI && cj === maxJ) return cnt;

        for (let i = 0; i < 4; i++) {
            const ni = ci + di[i];
            const nj = cj + dj[i];
            if (0 <= ni && ni <= maxI && 0 <= nj && nj <= maxJ && maps[ni][nj]) {
                needVisit.push([ni, nj, cnt + 1]);
                maps[ni][nj] = 0;
            }
        }
    }
    return -1;
}