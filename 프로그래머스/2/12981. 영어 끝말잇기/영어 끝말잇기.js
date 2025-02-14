function solution(n, words) {
    let round = 0;
    let logs = new Set();
    for(let i = 0; i < words.length; i++) {
        if(i % n === 0) round += 1;
        if(logs.has(words[i])) return [i % n + 1, round];
        if(i > 0 && !words[i].startsWith(words[i - 1].at(-1))) return [i % n + 1, round];
        logs.add(words[i]);
    }
    return [0, 0];
}