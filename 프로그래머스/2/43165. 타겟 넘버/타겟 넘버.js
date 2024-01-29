function solution(numbers, target) {
    let ans = 0;
    const count = (sum, idx) => {
        if (idx === numbers.length) {
            if (sum === target) ans += 1;
            return;
        }
        
        count(sum + numbers[idx], idx + 1);
        count(sum - numbers[idx], idx + 1);
    }
    
    count(0, 0);
    return ans;
}