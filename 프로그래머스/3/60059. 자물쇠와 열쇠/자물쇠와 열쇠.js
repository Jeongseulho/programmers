function solution(key, lock) {
    const M = key.length;
    const N = lock.length;
    const boardLen = N + M * 2 - 2;
    const lockS = M - 1;
    const lockE = M + N - 2;
    let board = Array.from({ length:boardLen }, () => new Array(boardLen).fill(0));
    for(let i = lockS; i <= lockE; i++) {
        for(let j = lockS; j <= lockE; j++) {
            board[i][j] = lock[i - lockS][j - lockS]
        }
    }
    
    const rotate = (arr) => {
        return arr[0].map((row, idx) => arr.map((col) => col[idx]).reverse());
    }
    
    const insertKey = (si, sj, board, key) => {
        for(let i = si; i < si + M; i++) {
            for(let j = sj; j < sj + M; j++) {
                board[i][j] += key[i - si][j - sj];
            }
        }
        return board;
    }
    
    const isAns = (board) => {
        for(let i = lockS; i <= lockE; i++) {
            for(let j = lockS; j <= lockE; j++) {
                if(board[i][j] !== 1) return false;
            }
        }
        return true;
    }
    
    for(let i = 0; i < boardLen-M+1; i++) {
        for(let j = 0; j < boardLen-M+1; j++) {
        
            for(let k = 0; k < 4; k++) {
                key = rotate(key);
                const insertedBoard = insertKey(i, j, board.map((row) => [...row]), key);
                if(isAns(insertedBoard)) return true;
            }
            
        }
    }
    return false;
}