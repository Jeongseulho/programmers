function solution(word) {
    let ans = 0;
    const alphabet = ['A', 'E', 'I', 'O', 'U'];
    let isFindAns = 0;
    let cnt = 0;
    
    const dfs = (str) => {
        if(str.length > 5 || isFindAns) return;
        if(str === word) {
            isFindAns = true;
            ans = cnt;
            return;
        }
        cnt ++;
        for(let i = 0; i < alphabet.length; i++) {
            dfs(str + alphabet[i]);
        }
    }    
    dfs('');
    return ans;
}