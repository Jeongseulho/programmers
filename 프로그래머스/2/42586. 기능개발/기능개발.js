function solution(progresses, speeds) {
    const ans = [];
    let checkIdx = 0;
    while(progresses.some((progress) => progress < 100)) {
        for(let i = 0; i < progresses.length; i++) progresses[i] += speeds[i];
        
        let cnt = 0;
        for(let j = checkIdx; j < progresses.length; j++) {
            if(progresses[j] >= 100) cnt += 1;
            else {
                checkIdx = j;
                break;
            }
        }
        
        if(cnt !== 0) ans.push(cnt);
    }
    return ans;
}