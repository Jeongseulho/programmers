function solution(strs, t) {
    const targetLength = t.length;
    const dp = new Array(targetLength).fill(Infinity);
    
    for (let subStrLen = 0; subStrLen < targetLength; subStrLen++) {
        const subStr = t.substr(0, subStrLen + 1);
        
        for (const str of strs) {
            if (subStr.endsWith(str)) {
                const lenDiff = subStr.length - str.length;
                if (lenDiff === 0) dp[subStrLen] = 1;
                else dp[subStrLen] = Math.min(dp[subStrLen], dp[lenDiff - 1] + 1);
            }
        }
    }
    return dp[targetLength - 1] === Infinity ? -1 : dp[targetLength - 1];
}