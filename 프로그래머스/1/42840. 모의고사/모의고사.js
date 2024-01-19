function solution(answers) {
    const firstAns = new Array(answers.length).fill(0).map((_, i) => i % 5 + 1);
    
    const secondPattern = [2, 1, 2, 3, 2, 4, 2, 5];
    const secondAns = new Array(answers.length)
    .fill(0)
    .map((_, i) => secondPattern[i % secondPattern.length]);
    
    const thirdPattern = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const thirdAns = new Array(answers.length)
    .fill(0)
    .map((_, i) => thirdPattern[i % thirdPattern.length]);
    
    let cnt = [0, 0, 0];
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === firstAns[i]) {
            cnt[0] += 1;
        }
        if (answers[i] === secondAns[i]) {
            cnt[1] += 1;
        }
        if (answers[i] === thirdAns[i]) {
            cnt[2] += 1;
        }
    }
    
    const maxCnt = Math.max(...cnt);
    
    return cnt.map((ele, idx) => ele === maxCnt ? idx + 1 : -1).filter((ele) => ele !== -1).sort();
}