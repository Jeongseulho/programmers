function solution(word) {
    let ans = 0;
    let cnt = 0;
    let isFindAns = false;
    const alphabet = ['A', 'E', 'I', 'O', 'U'];
    const dfs = (subWord) => {
        if (isFindAns || subWord.length > 5) return;
        if (subWord === word) {
            return ans = cnt;
        }
        cnt += 1;
        for (let i = 0; i < 5; i++) {
            dfs(subWord + alphabet[i]);
        }
    }
    dfs('');
    return ans;
}