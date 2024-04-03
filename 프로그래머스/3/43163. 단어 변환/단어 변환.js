const isDiffOneLetter = (curWord, nextWord) => {
    let diffCnt = 0;
    curWord = curWord.split('');
    nextWord = nextWord.split('');
    for (let i = 0; i < curWord.length; i++) {
        if (curWord[i] !== nextWord[i]) diffCnt += 1;
    }
    return diffCnt === 1 ? true : false;
}

function solution(begin, target, words) {
    const needVisit = [[begin, 0]];
    const visited = new Array(words.length).fill(false);
    while (needVisit.length) {
        const [ curWord, step ] = needVisit.shift();
        if (curWord === target) return step;
        words.forEach((word, idx) => {
            if (!visited[idx] && isDiffOneLetter(curWord, word)) {
                needVisit.push([ word, step + 1]);
                visited[idx] = true;
            }
        })
    }
    return 0;
}