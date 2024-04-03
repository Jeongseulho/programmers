function solution(m, n, puddles) {
    const MOD = 1000000007;
    const dp = Array.from({ length: n }, () => Array(m).fill(0));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            
            if (i === 0 && j === 0) {
                dp[0][0] = 1;
                continue;
            }
            
            const isPuddle = puddles.some(([x, y]) => x === j + 1 && y === i + 1)
            if (isPuddle) {
                dp[i][j] = 0;
            } else {
                const up = i > 0 ? dp[i - 1][j] : 0;
                const down = (j > 0 ? dp[i][j - 1] : 0);
                dp[i][j] = (up + down) % MOD;
            }
        }
    }
    return dp[n - 1][m - 1];
}