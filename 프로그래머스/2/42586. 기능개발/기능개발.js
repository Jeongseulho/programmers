function solution(progresses, speeds) {
    const completeDays = progresses.map((progress, idx) => Math.ceil((100 - progress) / speeds[idx]));
    const ans = [];
    let prev = completeDays[0];
    let cnt = 1;
    for(let i = 1; i < completeDays.length; i++) {
        if(prev >= completeDays[i]) cnt += 1;
        else {
            ans.push(cnt);
            cnt = 1;
            prev = completeDays[i];
        }
    }
    ans.push(cnt);
    
    return ans;
}