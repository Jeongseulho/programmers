function solution(participant, completion) {
    const cnt = {};
    for (const person of participant) {
        if (person in cnt) cnt[person] += 1;
        else cnt[person] = 1;
    }
    for (const person of completion) {
        cnt[person] -= 1;
    }
    for (const person in cnt) {
        if (cnt[person] !== 0) return person
    }
}