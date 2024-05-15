function solution(info, query) {
    // 해쉬 만들기
    const hash = new Map();
    info.forEach((row) => {
        const [lang, job, exp, food, score] = row.split(' ');
        const key = lang + job + exp + food;
        if(hash.has(key)) hash.get(key).push(Number(score));
        else hash.set(key, [Number(score)]);
    })
    for(const row of hash) {
        row[1].sort((a, b) => a - b);
    }
    
    
    // 쿼리 다시 만들기
    const queries = query.map((q) => {
        return q.split(' ').filter((ele) => {
            if(ele === 'and' || ele === '-') return false;
            else return true;
        });
    })
    
    const binarySearchLeft = (arr, item) => {
        let low = 0;
        let high = arr.length;
        while(low <= high) {
            let mid = parseInt((low + high) / 2);
            if(arr[mid] >= item) high = mid - 1;
            else low = mid + 1;
        }
        return low;
    }
    
    const ans = [];
    
    queries.forEach((q) => {
        const score = q.pop();
        const rightKeys = [...hash.keys()].
            filter((key) => q.every((condition) => key.includes(condition)));
        const rightCnt = rightKeys.reduce((acc, cur) => {
            const wronglastIdx = binarySearchLeft(hash.get(cur), score);
            if(wronglastIdx > (hash.get(cur).length - 1)) return acc;
            else return acc + hash.get(cur).length - wronglastIdx;
        }, 0)
        ans.push(rightCnt);
    })
    
    return ans;
}