function solution(numbers, target) {
    let ans = 0;
    const dfs = (sum, idx) => {
        if(idx === numbers.length) {
            if(sum === target) ans += 1;
            return;
        }
        
        dfs(sum - numbers[idx], idx + 1);
        dfs(sum + numbers[idx], idx + 1);
    }
    
    dfs(0, 0);
    return ans;
}