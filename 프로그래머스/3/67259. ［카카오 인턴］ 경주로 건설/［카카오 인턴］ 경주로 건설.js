function solution(board) {
    const N = board.length;
    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const needVisit = [[0, 0, 0, 0], [0, 0, 1, 0]];
    const minCost = Array.from({ length: N }, 
                               () => Array.from({ length: N }, 
                                                () => Array(dirs.length).fill(Infinity)));
    minCost[0][0] = [0, 0, 0, 0];
    const isInBoard = (i, j) => i >= 0 && i < N && j >= 0 && j < N && board[i][j] === 0;
    
    while(needVisit.length) {
        const [ci, cj, cDir, cost] = needVisit.shift();
        dirs.forEach(([di, dj], nDir) => {
            const ni = ci + di
            const nj = cj + dj
            if(!isInBoard(ni, nj)) return;
            
            const nCost = cost + (cDir === nDir ? 100 : 600);
            if(nCost < minCost[ni][nj][nDir]) {
                needVisit.push([ni, nj, nDir, nCost]);
                minCost[ni][nj][nDir] = nCost;
            }
        })
    }
    return Math.min(...minCost[N - 1][N - 1]);
}