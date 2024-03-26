function solution(progresses, speeds) {
    const ans = [];
    let checkIdx = 0;
    while (true) {
        if (progresses.every((ele) => ele >= 100)) break;
        progresses.forEach((ele, idx, arr) => {
            arr[idx] += speeds[idx]
        })
        let cnt = 0;
        for (let i = checkIdx; i < progresses.length; i++) {
            if (progresses[i] >= 100) {
                cnt++;
                continue;
            }
            checkIdx = i;
            break;
        }
        if (cnt !== 0) ans.push(cnt);
    }
    return ans;
}