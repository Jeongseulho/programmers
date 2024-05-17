function solution(play_time, adv_time, logs) {
    const timeToSec = (time) => {
        const [h, m, s] = time.split(':').map(Number);
        return h * 3600 + m * 60 + s;
    }
    
    const secToTime = (sec) => {
        let HH = sec / 3600 >> 0;
        let MM = (sec / 60 >> 0) % 60;
        let SS = sec % 60;

        HH = HH > 9 ? HH : '0' + HH;
        MM = MM > 9 ? MM : '0' + MM;
        SS = SS > 9 ? SS : '0' + SS;

        return `${HH}:${MM}:${SS}`
    }
    
    const totalSec = timeToSec(play_time);
    const playSum = new Array(totalSec).fill(0);
    
    logs.forEach((log) => {
        const [start, end] = log.split('-').map(timeToSec);
        playSum[start] += 1;
        playSum[end] -= 1;
    })
    
    for(let i = 0; i < playSum.length - 1; i++) playSum[i + 1] += playSum[i];
    for(let i = 0; i < playSum.length - 1; i++) playSum[i + 1] += playSum[i];
    
    const advSec = timeToSec(adv_time);
    let maxPlay = playSum[advSec - 1];
    let maxPlayStartSec = 0;
    for(let advStart = 1; advStart <= (playSum.length - advSec); advStart++) {
        const sum = playSum[advStart - 1 + advSec] - playSum[advStart - 1];
        if(sum > maxPlay) {
            maxPlayStartSec = advStart;
            maxPlay = sum;
        }
    }
    
    return secToTime(maxPlayStartSec);
}