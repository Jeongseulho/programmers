const moveShape = (shapePos) => {
    const minI = Math.min(...shapePos.map((pos) => pos[0]));
    const minJ = Math.min(...shapePos.map((pos) => pos[1]));
    return shapePos.map((pos) => [pos[0] - minI, pos[1] - minJ]);
}

const rotate90Block = (block) => {
    const maxI = Math.max(...block.map((pos) => pos[0]))
    return block.map((pos) => [pos[1], maxI - pos[0]]);
}

const isSame = (shape, block) => {
    return JSON.stringify(shape.sort()) === JSON.stringify(block.sort())
}

const dfs = (si, sj, board, visitFlag, N) => {
    const di = [-1, 1, 0, 0];
    const dj = [0, 0, -1, 1];
    const needVisit = [[si, sj]];
    const shapePos = [[si, sj]];
    const notVisitFlag = visitFlag ? 0 : 1;
    board[si][sj] = visitFlag;
    
    while (needVisit.length) {
        const [ci, cj] = needVisit.pop();
        for (let k = 0; k < 4; k++) {
            const ni = ci + di[k];
            const nj = cj + dj[k];
            if (ni >= 0 && ni < N && nj >= 0 && nj < N && board[ni][nj] === notVisitFlag) {
                needVisit.push([ni, nj]);
                board[ni][nj] = visitFlag;
                shapePos.push([ni, nj]);
            }
        }
    }
    return moveShape(shapePos);
}

function solution(game_board, table) {
    const N = game_board.length;
    const shapes = [];
    const blocks = [];
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (game_board[i][j] === 0) {
                const shape = dfs(i, j, game_board, 1, N);
                shapes.push(shape);
            }
            if (table[i][j] === 1) {
                const block = dfs(i, j, table, 0, N);
                blocks.push(block);
            }
        }
    }
    let ans = 0;
    
    const blockUsed = new Array(blocks.length).fill(false);
    
    shapes.forEach((shape) => {
        for (let blockIdx = 0; blockIdx < blocks.length; blockIdx++) {
            
            if (blockUsed[blockIdx]) continue;
            let block = blocks[blockIdx]
            
            if (isSame(shape, block)) {
                blockUsed[blockIdx] = true;
                ans += block.length;
                return;
            }
            
            for (let rotateCnt = 0; rotateCnt < 3; rotateCnt++) {
                block = rotate90Block(block);

                if (isSame(shape, block)) {
                    blockUsed[blockIdx] = true;
                    ans += block.length;
                    return;
                }
            }
        }
    })

    return ans;
}