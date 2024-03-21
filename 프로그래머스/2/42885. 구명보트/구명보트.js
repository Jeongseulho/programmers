function solution(people, limit) {
    people.sort((a, b) => a - b);
    let startIdx = 0;
    let endIdx = people.length - 1;
    let cnt = 0;
    
    while (startIdx <= endIdx) {
        const sum = people[startIdx] + people[endIdx];
        if (sum <= limit) {
            startIdx++;
        }
        endIdx--;
        cnt++;
    }
    return cnt;
}