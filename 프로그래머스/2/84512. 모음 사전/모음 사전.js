function solution(word) {
    let ans = 0;
    const alpha = ['A', 'E', 'I', 'O', 'U'];
    let cnt = 0;
    let isFindAns = false;
    
    function dfs(str) {
        if (isFindAns || str.length > 5) {
            return;
        }
        
        if (str === word) {
            isFindAns = true;
            ans = cnt;
            return;
        }
        
        cnt++;
        
        for (let i = 0; i < alpha.length; i++) {
            dfs(str + alpha[i])
        }
    }
    
    dfs("");
    return ans;
}