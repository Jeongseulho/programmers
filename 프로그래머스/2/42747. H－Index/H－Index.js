function solution(citations) {
    citations.sort((a,b) => b-a);
    let cnt = 1;
    for(const citation of citations) {
        if(citation >= cnt) {
            cnt += 1
        } else {
            return cnt - 1
        }
    }
    return citations.length
}