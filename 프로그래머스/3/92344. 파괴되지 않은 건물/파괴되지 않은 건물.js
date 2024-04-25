function solution(board, skill) {
    const N = board.length;
    const M = board[0].length;
    const sumBoard = Array.from({ length : N + 1 }, () => new Array(M + 1).fill(0));
    skill.forEach(([type, r1, c1, r2, c2, degree]) => {
        degree = type === 1 ? -1 * degree : degree;
        sumBoard[r1][c1] += degree;
        sumBoard[r2 + 1][c2 + 1] += degree;
        sumBoard[r1][c2 + 1] -= degree;
        sumBoard[r2 + 1][c1] -= degree;
    })
    
    for(let i = 0; i < sumBoard.length; i++) {
        for(let j = 0; j < sumBoard[0].length - 1; j++) {
            sumBoard[i][j + 1] += sumBoard[i][j]
        }
    }
    
    for(let i = 0; i < sumBoard.length - 1; i++) {
        for(let j = 0; j < sumBoard[0].length; j++) {
            sumBoard[i + 1][j] += sumBoard[i][j]
        }
    }
    
    let ans = 0;
    
    for(let i = 0; i < N; i++) {
        for(let j = 0; j < M; j++) {
            if(sumBoard[i][j] + board[i][j] > 0) ans += 1;
        }
    }
    
    return ans;
}