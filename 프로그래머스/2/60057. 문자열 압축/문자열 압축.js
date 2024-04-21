function solution(s) {
    let answer = s.length;
    const maxK = (s.length / 2) >> 0;
    for(let k = 1; k <= maxK; k++) {
        let sentence = "";
        let idx = 0;
        
        while(idx < s.length) {
           let cnt = 1;
           while (s.slice(idx, idx + k) === s.slice(idx + k, idx + 2*k)) {
                 cnt++;
                 idx += k;
           }
            
           if(cnt > 1) sentence += cnt;
           sentence += s.slice(idx, idx + k);
           idx += k;
        }
        
        answer = Math.min(answer, sentence.length);
    }
    return answer;
}