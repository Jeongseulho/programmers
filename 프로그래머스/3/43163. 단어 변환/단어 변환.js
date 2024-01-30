const isDiffOneLetter = (word1, word2) => {
    let diffCnt = 0;
    for (let i = 0; i < word1.length; i++) {
        if (word1[i] !== word2[i]) {
            diffCnt++;
            if (diffCnt > 1) return false;
        }
    }
    return diffCnt === 1 ? true : false;
}

function solution(begin, target, words) {
    const needVisit = [[begin, 0]];
    const visited = [];
    
    while (needVisit.length) {
        const [word, cnt] = needVisit.shift();
        if (word === target) return cnt;
        if (!visited.includes(word)) {
            visited.push(word);
            words.forEach((ele) => {
                if(isDiffOneLetter(ele, word)) {
                    needVisit.push([ele, cnt + 1]);   
                }
            })
        }
    }
    return 0;
}