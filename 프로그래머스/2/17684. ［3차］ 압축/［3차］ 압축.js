function solution(msg) {
    const answer = [];
    let word = "";
    let lastCount = 27;
    const alphaList = Array.from({ length : 26}, (_, idx) => String.fromCharCode(idx + 65));
    const dict = {};
    alphaList.forEach((ele, idx) => {
        dict[ele] = idx + 1;
    })
    
    const lastWord = msg.split("").reduce((acc, cur) => {
        word = acc + cur;
        
        if (word in dict) {
           return acc + cur;
        }
        
        dict[word] = lastCount++;
        answer.push(dict[acc]);
        return cur;
    }, '');
   
    answer.push(dict[lastWord]);
    
    return answer;
}