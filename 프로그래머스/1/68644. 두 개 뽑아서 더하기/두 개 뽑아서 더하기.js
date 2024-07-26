function solution(numbers) {
    const ans = new Set();
    const combination = (comb, rests, output, n) => {
        if (comb.length == n) return output.add(comb.reduce((acc, cur) => acc + cur, 0));
        rests.forEach((item, idx) => {
            combination([...comb, item], rests.slice(idx + 1), output, n);
        });
    };
    combination([], numbers, ans, 2);
    
    return [...ans].sort((a, b) => a - b);
}