function solution(numbers) {
    const ans = new Set();
    for(let i = 0; i < numbers.length; i++) {
        const sum = numbers[i];
        for(let j = i + 1; j < numbers.length; j++) {
            ans.add(sum + numbers[j]);
        }
    }
    
    return Array.from(ans).sort((a, b) => a - b);
}