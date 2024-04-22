function solution(m, musicinfos) {
    m = filterString(m);
    let ans = [];
    for(let i=0; i < musicinfos.length; i++) {
        const [start, end, title, pattern] = musicinfos[i].split(",");
        const duration = countTime(start, end);
        
        let music = filterString(pattern);
        
        while(music.length < duration) {
            music += music;
        }
        if(duration < music.length) music = music.slice(0, duration + 1);
        
        if(music.includes(m)) {
            if(!ans.length || duration > ans[1]) ans = [title, duration];
        }
    }
        
    return ans.length ? ans[0] : "(None)";
}

function filterString(string) {
    string = string.replaceAll("A#", "1")
    string = string.replaceAll("B#", "0") 
    string = string.replaceAll("C#", "2")
    string = string.replaceAll("D#", "3")
    string = string.replaceAll("F#", "4")
    string = string.replaceAll("G#", "5")
    return string;
}

function countTime(start, end) {
    const [sH, sM] = start.split(":").map(Number);
    const [eH, eM] = end.split(":").map(Number);
    
    const hourDiff = eH  - sH;
    const minDiff = eM - sM;
    
    return 60 * hourDiff + minDiff;
}